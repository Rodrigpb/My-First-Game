class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        this.tick = 0;

        this.ball = new Ball(ctx);
        this.bricks = new Bricks(ctx);
        this.racket = new Racket(ctx);
        
    }

    start() {
        this.intervalId =  setInterval(() => {
            
            this._clear()
            this._draw()
            this._move()
            this._checkBrickCollisions()
            
          }, 1000 / 60);
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
      }

    _draw() {
        this.ball.draw();
        this.racket.draw();
        this.bricks.forEach(brick => {
            brick.draw();
        });
    }

    _move() {
        this.ball.move();
    }

    _checkBrickCollisions () {
        
      /**   const ball = this.ball;
        this.bricks.forEach(brick => {
            const bX = brick.x < ((ball.x) + (ball.r)) && ((brick.x) + (brick.w)) > ball.x + ball.r;
            const bY = ((brick.y) + (brick.h)) > ball.y + ball.r && brick.y < ((ball.y) + (ball.r));
            if (bX && bY) {
                console.log("han chocado!!")
            }
        });*/


    
       return this.bricks.bricksWall.some(brick => {
            return this.ball.collide(brick);
        }) 

    
    }

    _checkRacketCollisions() {

        
    }
    
}