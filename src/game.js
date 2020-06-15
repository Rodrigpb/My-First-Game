class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.intervalId = null;
        
        this.ball = new Ball(ctx);
        this.bricks = new Bricks(ctx);
        this.racket = new Racket(ctx);
        this.background = new Background(ctx);
        this.score = 0;
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
        this.background.draw();
        this.ball.draw();
        this.racket.draw();
        this.bricks.draw();
       // this.score.draw();
    }

    _move() {
        this.racket.move();
        this.ball.move();
    }

    _checkBrickCollisions () {
        for (let a = 0; a < this.bricks.brickColumn; a++) {
            for (let b = 0; b < this.bricks.brickRow; b++) {
                    const isCollide = this.ball.checkBricksCollisions(this.bricks.bricksWall[a][b]);
                    if(isCollide){
                        console.log(this.bricks.bricksWall[a][b]);
                        this.bricks.bricksWall[a][b].status = 0;
                        this.score += 10;
                        document.getElementById("score-number").innerHTML = this.score;
                    }   
            }
        }
    }

    _checkRacketCollisions() {
        this.ball.checkRaquetCollisions(this.racket);
    }
    
}