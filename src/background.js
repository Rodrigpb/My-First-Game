class Background {
    constructor(ctx) {
      this.ctx = ctx
      this.w = this.ctx.canvas.width ;
      this.h = this.ctx.canvas.height ;
      this.x = 0;
      this.y = 0;
  
    //   this.x = this._ctx.canvas.width * 0.05
    //   this.y = this._ctx.canvas.height * 0.97 - this.h
    //   this.y0 = this.y
  
      
  
      this.img = new Image()
      this.img.frames = 5
      this.img.frameIndex = 0
      this.img.src = './img/Arcade - Arkanoid - Fields.png';
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0,
        this.img.width * 0.97 / this.img.frames,
        this.img.height * 0.96 / 2,
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
}