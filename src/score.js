class Score {
    constructor(ctx) {
        this.ctx = ctx;
    
    }



    draw() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: "+ this.score, 8, 20);
    }
}