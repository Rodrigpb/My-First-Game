class Bricks {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 250;
        this.y = 200;

        this.w = 40;
        this.h = 10;

    }

    draw() {
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect( 
            this.x,
            this.y,
            this.w,
            this.h
          );
          this.ctx.fill();
    }
}