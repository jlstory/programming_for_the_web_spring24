// glocal vars
let bubbles = [];
let colorsArray = ['darkblue', 'blueviolet', 'navy', 'midnightblue', 'indigo', 'steelblue'];
let randColor;

function setup() {
    createCanvas(600, 400);
        for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 40);
        bubbles[i] = new Bubble(x, y, r);
    }
    }

    function draw() {
        background(0, 0, 0, 5);       
        for (let i = 0; i < 20; i++) {
        bubbles[i].move();
        bubbles[i].show();
        }
    }

    class Bubble {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    move() {
        this.x = this.x + random(-50, 50);
        this.y = this.y + random(-1, 1);
    }

    show() {             
            randColor = random(colorsArray.length);
            randColor = floor(randColor);
            stroke(colorsArray[randColor]);  
            strokeWeight(1);
            noFill();
            ellipse(this.x, this.y, this.r * 3);
        }
    }









