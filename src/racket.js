class Racket {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 180;
        this.y = 580;

        this.w = 40;
        this.h = 10;

        this._setListeners();
    }

    draw() {
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect( 
            this.x,
            this.y,
            this.w,
            this.h
          );
          this.ctx.fill();
    }


    _setListeners() {
        document.addEventListener('keydown', arrow => {
          
          switch (arrow.keyCode) {
            case RIGHT:
              if ((this.x >= this.ctx.canvas.width - this.w)) {
                this.x = this.ctx.canvas.width - this.w;
              } else {
                this.x += 10;
              }
              break
            case LEFT :
                if ((this.x <= 0)) {
                    this.x = 0;
                } else {
                    this.x -= 10;
                }
              break
          }
        })
    }
}