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
            this._checkBrickCollisions()
            this._checkRacketCollisions()
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

    _checkBrickCollisions () {
        
      /**   const ball = this.ball;
        this.bricks.forEach(brick => {
            const bX = brick.x < ((ball.x) + (ball.r)) && ((brick.x) + (brick.w)) > ball.x + ball.r;
            const bY = ((brick.y) + (brick.h)) > ball.y + ball.r && brick.y < ((ball.y) + (ball.r));
            if (bX && bY) {
                console.log("han chocado!!")
            }
        });*/

        
        for (let a = 0; a < this.brickColumn; a++) {
        
            for (let b = 0; b < this.brickRow; b++) {
                     if (this.ball.x + this.ball.r >= brick.x && this.ball.x - this.ball.r < brick.x + brick.w &&
                         brick.y <= this.ball.y + this.ball.r && brick.y + brick.h >= this.ball.y - this.ball.r) {
                            console.log("choca ", brick) 
                            this.ball.checkBricksCollisions(brick);
                            this.bricks.bricksWall[a][b].status = 0;
                         }
                }
            }
           /* this.bricks.bricksWall.forEach(bric => {
                for (var brick of bric) {
                     if (this.ball.x + this.ball.r >= brick.x && this.ball.x - this.ball.r < brick.x + brick.w &&
                         brick.y <= this.ball.y + this.ball.r && brick.y + brick.h >= this.ball.y - this.ball.r) {
                            console.log("choca ", brick) 
                            this.ball.checkBricksCollisions(brick);
                            this.bricks.bricksWall[a][b].status = 0;
                         }
                }
            });*/
        /**return this.bricks.bricksWall.some(brick => {
            return this.ball.collide(brick);
        }) */ 

    
    }

    _checkRacketCollisions() {

        this.ball.checkRaquetCollisions(this.racket);
    }
    
}