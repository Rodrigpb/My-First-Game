class Racket {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 180;
        this.y = this.ctx.canvas.height - 30;

        this.w = 80;
        this.h = 15;
        this.v = 5;

        this.img = new Image()
        this.img.src = './img/racket.png';
    }


    draw() {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      )
    }

     move() {
       document.addEventListener("mousemove", mouse => {
         let position = mouse.x - this.ctx.canvas.offsetLeft;
          if (position > 0  && position <= this.ctx.canvas.width) {
              this.x = mouse.x - 100;
          }
       })
     }

    // _setListeners() {
    //     document.addEventListener('keydown', arrow => {

    //       switch (arrow.keyCode) {
    //         case RIGHT:
    //           if ((this.x >= this.ctx.canvas.width - this.w)) {
    //             this.x = this.ctx.canvas.width - this.w;
    //           } else {
    //             this.x += 20;
    //           }
    //           break
    //         case LEFT :
    //             if ((this.x <= 0)) {
    //                 this.x = 0;
    //             } else {
    //                 this.x -= 20;
    //             }
    //           break
    //       }
    //     })
    // }


}