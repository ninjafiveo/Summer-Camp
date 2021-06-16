// https://www.youtube.com/watch?v=eI9idPTT0c4
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d'); //context

canvas.width = innerWidth; //Property of the window object. window.innerWidth is the same thing.
canvas.height = innerHeight;

class Player{
// what attributes does a player have?
    constructor(x, y, radius, color){
        //called each time we create a new player class.
        this.x = x;
        this.y = y;

        this.radius = radius;
        this.color = color;
    }
    draw(){
        //could be called anything. not just draw.
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color
        c.fill();
    }
}

const x = canvas.width/2;
const player = new Player (x, 100, 30, 'blue');
player.draw()
console.log(player)