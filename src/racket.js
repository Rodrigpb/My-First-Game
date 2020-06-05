class Racket {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 250;
        this.y = 580;

        this.w = 40;
        this.h = 10;

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

    move() {
        
    }

}