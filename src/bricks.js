class Bricks {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 20;
        this.y = 20;

        this.w = 80;
        this.h = 30;

        this.brickRow = 5;
        this.brickColumn = 7;

        this.padding = 10;
        this.brickLeft = 40;
        this.brickTop = 30;

        this.damageX = 3;
        this.damageY = 3;
        
        this.bricksWall = [];
        this.briksinit = false;
    }

    
    _randomColor() {
        return Math.random() * 255;
    }
    
    _randomRgb() {
        const r = this._randomColor()
        const g = this._randomColor()
        const b = this._randomColor()

        return `rgb(${r}, ${g}, ${b})`
    }
    


    draw() {

        if (this.briksinit === false) {   
            for(let a=0; a <this.brickColumn; a++) {
                this.bricksWall[a] = [];
                this.briksinit = true;
                for(let b=0; b < this.brickRow; b++) {
                    this.bricksWall[a][b] = { x: 0, y: 0, status: 1 };
                    this.briksinit = true;
                    let brickX = (a * (this.w + this.padding)) + this.brickLeft;
                    let brickY = (b * (this.h + this.padding)) + this.brickTop;
                    this.bricksWall[a][b].x = brickX;
                    this.bricksWall[a][b].y = brickY;
                    this.bricksWall[a][b].w = this.w;
                    this.bricksWall[a][b].h = this.h;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, this.w, this.h);
                    ctx.fillStyle = this._randomRgb();
                    ctx.fill();
                    ctx.closePath();
                }
            }
        } else {
            for (let a = 0; a < this.brickColumn; a++) {
                
                for (let b = 0; b < this.brickRow; b++) {
                    if (this.bricksWall[a][b].status === 0) {
                        //console.log(this.bricksWall[a][b]);
                        let brickX = (a * (this.w + this.padding)) + this.brickLeft;
                        let brickY = (b * (this.h + this.padding)) + this.brickTop;
                        this.bricksWall[a][b].x = brickX;
                        this.bricksWall[a][b].y = brickY;
                        this.bricksWall[a][b].w = this.w;
                        this.bricksWall[a][b].h = this.h;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, this.w, this.h);
                        ctx.fillStyle = "transparent";
                        ctx.fill();
                        ctx.closePath();
                    } else {
                        let brickX = (a * (this.w + this.padding)) + this.brickLeft;
                        let brickY = (b * (this.h + this.padding)) + this.brickTop;
                        this.bricksWall[a][b].x = brickX;
                        this.bricksWall[a][b].y = brickY;
                        this.bricksWall[a][b].w = this.w;
                        this.bricksWall[a][b].h = this.h;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, this.w, this.h);
                        ctx.fillStyle = this._randomRgb();
                        ctx.fill();
                        ctx.closePath();
                    }  
               }
            }
        }
    

        



    }

  
    
}

