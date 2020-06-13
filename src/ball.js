class Ball {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 200;
        this.r = 10;
        this.y = 550 - this.r;
    
        this.vx = -2;
        this.vy = -2;
        //this.ay = 1;
        this.wall;
        this.side;
    
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

        this.checkSidesCollisions();
    
      }

      isFloor() {
         return (this.y + this.r >= this.ctx.canvas.height)    
      }


      checkSidesCollisions() {
  
        if (this.isFloor()) {
          console.log("Has muerto")
        }

        if (this.x + this.r >= this.ctx.canvas.width) {
          this.vx *= -1
          this.side = "right";
          
        }
    
        if (this.x - this.r <= 0) {
          this.vx *= -1
          this.side = "left";
         
        }
    
        if (this.y + this.r >= this.ctx.canvas.height) {
          this.vy *= -1
          this.y = this.ctx.canvas.height - this.r
        }

        if (this.y - this.r <= 0) {
          this.vy *= -1;
        }
      }

      checkBricksCollisions(element) {

        if (element.status === 1) {
          if (this.x + this.r > element.x && this.x - this.r < element.x + element.w &&
            element.y < this.y + this.r && element.y + element.h > this.y - this.r) {
           
          
           if (this.x + this.r > element.x && this.x - this.r < element.x + element.w ) {
            this.vx *= -1;
            
        //     this.vy *= -1;
            
           } else if(element.y < this.y + this.r && element.y + element.h > this.y - this.r) {
             this.vy *= -1;
        //     //this.vx *= -1;
        
           }
           return true;
        // }
            }
          }
      }

      checkRaquetCollisions(element) {

        if ((this.y + this.r > element.y) && (this.x + this.r > element.x) && (((this.x - this.r) < (element.x + element.w)))) {
          if (this.side === "right") {
            if (this.x > (element.x + element.w)/2) {
              this.vy *= -1;
              this.vx *= -1;
            } else {
              this.vy *= -1;
            }
          }  else if (this.side === "left") {
            if (this.x < (element.x + element.w)/2){
              this.vy *= -1;
              this.vx *= -1;
            } else {
              this.vy *= -1;
            }
        } else {
          this.vy *= -1;
        }
      }
    }
}