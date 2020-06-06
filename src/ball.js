class Ball {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 200;
        this.r = 10;
        this.y = 580 - this.r;
    
        this.vx = -1;
        this.vy = -1;
        //this.ay = 1;
    
      }

      draw () {
        
        this.ctx.fillStyle = '#FF0000';
        this.ctx.beginPath();
        this.ctx.arc(
          this.x,
          this.y,
          this.r,
          0,
          2 * Math.PI
        );
        this.ctx.fill()
        this.ctx.closePath(); 
      }

      move () {
        //this.vy += this.ay;

        this.x += this.vx
        this.y += this.vy

        this.checkCollisions();
    
      }

      isFloor() {
         return (this.y + this.r >= this.ctx.canvas.height)    
      }


      checkCollisions() {

        if (this.isFloor()) {
          console.log("Has muerto")
        }

        if (this.x + this.r >= this.ctx.canvas.width) {
          this.vx *= -1
        }
    
        if (this.x - this.r <= 0) {
          this.vx *= -1
        }
    
        if (this.y + this.r >= this.ctx.canvas.height) {
          this.vy *= -1
          this.y = this.ctx.canvas.height - this.r
        }

        if (this.y - this.r <= 0) {
          this.vy *= -1;
        }
      }

      collide(element) {

        const colX = this.x + this.r > (element.x + element.w) && (this.x + this.r) < element.x;
        const colY = this.y + this.r > element.y && this.x + this.r < element.x + element.w + this.r
        console.log(colX && colY);
        return colX && colY
       }
}