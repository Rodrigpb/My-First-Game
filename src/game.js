class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        this.tick = 0;

        this.ball = new Ball(ctx);
        this.bricks = new Bricks(ctx)
        this.racket = new Racket(ctx);
    }

    start() {
        this.intervalId =  setInterval(() => {
            
            this._clear()
            this._draw()
            this._move()
            
          }, 1000 / 60);
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      }

    _draw() {
        this.ball.draw();
        this.racket.draw();
        this.bricks.draw();
    }

    _move() {
        this.ball.move();
    }

    
}