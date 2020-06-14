class Racket {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 180;
        this.y = this.ctx.canvas.height - 30;

        this.w = 80;
        this.h = 15;
        this.v = 5;

        //this._setListeners();
        this.move = function () {
          window.addEventListener('mousemove', function (e) {
            document.getElementById('x-value').textContent = e.x;
            document.getElementById('y-value').textContent = e.y;
        });
        }


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

    // draw() {
    //   canvas.drawImage(imagenes, 16, 47, 16, 8, this.x, this.y, this.anchoBloque, this.altoBloque);
    //     this.ctx.fillStyle = '#000000';
    //     this.ctx.fillRect(
    //         this.x,
    //         this.y,
    //         this.w,
    //         this.h
    //       );
    //       this.ctx.fill();
    // }


    // move() {
    //   if(mouseX > this.x) {
    //     this.x += this.v;
    //   } else if (mouseX < this.x) {
    //     this.x -= this.v;
    //   }
    // }

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