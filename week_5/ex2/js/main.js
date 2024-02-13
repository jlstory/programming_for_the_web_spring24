// glocal vars & array
let bubbles = [];
let randColor;
let colorsArray = ['darkblue', 'blueviolet', 'navy', 'midnightblue', 'indigo', 'steelblue'];

// canvas setup
function setup() {
    createCanvas(600, 400);
        for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        bubbles[i] = new Bubble(x, y, r);
        }
    }
// Draw function -> displays class
    function draw() {
        background(0, 0, 0, 5);       
        for (let i = 0; i < 20; i++) {
        bubbles[i].move();
        bubbles[i].show();
        }
    }
    // Class construction
    class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    // movement
    move() {
        this.x = this.x + random(-50, 50);
        this.y = this.y + random(-1, 1);
    }
    // shape design
    show() {             
            randColor = random(colorsArray.length);
            randColor = floor(randColor);
            stroke(colorsArray[randColor]);  
            strokeWeight(1);
            noFill();
            ellipse(this.x, this.y, this.r * 3);
        }
    }









