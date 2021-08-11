class myCanvas {
    
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        canvas.width = "500";
        canvas.height = "500";
        this.moveX = Math.floor(Math.random() * canvas.width);
        this.moveY = Math.floor(Math.random() * canvas.height);
        this.speedX = 1;
        this.speedY = 1;
        this.triangleLength = 0;
        this.arrowLength = 40;

        //listener on load
        window.addEventListener("load", this.animate.bind(this));
    }

    // event on click
    animate(){
        requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, canvas.height, canvas.width);
        this.ctx.beginPath();
        this.ctx.moveTo(21 + this.moveX, 41 + this.moveY);
        this.ctx.lineTo(41 + this.moveX, 40 + this.moveY);
    
        this.ctx.moveTo(40 + this.moveX, 38+ this.moveY);
        this.ctx.lineTo(37+ this.moveX, 60+ this.moveY);
        this.ctx.lineWidth = 4;
 
        this.ctx.moveTo(33 + this.moveX, 46 + this.moveY);
        this.ctx.quadraticCurveTo(11 + this.moveX, 60+ this.moveY, 1 + this.moveX, 85 + this.moveY);
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = '#0f4c81';
        this.ctx.stroke();

        (this.moveX + this.arrowLength > canvas.width || this.moveX < 0) ? this.speedX = -this.speedX: this.speedX;
        this.moveX += this.speedX;
        (this.moveY + this.arrowLength > canvas.height || this.moveY < 0) ? this.speedY = -this.speedY: this.speedY;
        this.moveY += this.speedY;
    }

}

const canvas = document.querySelector("#myCanvas");

const myCanvasProject = new myCanvas(canvas);