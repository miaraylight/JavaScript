const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');
cvs.width = 500;
cvs.height = 500;

// ctx.fillStyle = '#1abc9c'
// ctx.fillRect(10, 10, 100, 200) // залитый квадрат


// ctx.strokeStyle = '#e74c3c'
// ctx.strokeRect(10, 10, 200, 200) // квадрат линиями

// ctx.beginPath()
// ctx.moveTo(250, 250);
// ctx.lineTo(300, 300);
// ctx.lineTo(300, 250);
// ctx.lineTo(250, 250);
// // ctx.troke();
// ctx.fill();

// const x = [...new Array(100000)].map((item, index) => index*0.01);

// ctx.beginPath();
// x.forEach(elem => {
//     const y = Math.sin(elem);
//     ctx.lineTo(elem*10, y*50 + 250);
// })
// ctx.stroke();

class Plot {

    constructor(x_list, func) {
        this.x_list = x.x_list;
        this.func = func;
    }
    render(ctx) {
        ctx.beginPath();
        this.x_list.forEach(elem => {
            const y = this._func(elem);
            ctx.lineTo(elem * 10, y * 50 + 250);
        })
        ctx.stroke();
    }
}

const plot_1 = new Plot()

