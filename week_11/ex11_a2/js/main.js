// top level variables
let rotateByB = 6;
let rotateByC = 10;
// create canvas
function setup() {
    createCanvas(1000, 600);
    background(255);
    frameRate(10);
    angleMode(DEGREES);
    rectMode(CENTER);
    colorMode(HSB, 3, 300, 359);
}
// draw function
function draw() {
    for (let i = -100; i < 75; i++) {
        for (let j = -200; j < 25; j++) {
        let x = i * 50 + 25;
        let y = j * 50 + 25;
        let dw = 200;
        let dh= 200;
        rotate(rotateByB);
        fill(i * 2, 300, 200);
        stroke(i * 2, 200, 300);
        rect(x / 2, y, dw, dh);
        }
    }
    for (let k = -100; k < 2; k++)  {
        for (let l = -100; l < 2; l++) {
        let x = k * random(10, 150);
        let y = l * random(10, 150);
        rotate(rotateByC);
        fill(l * 2);
        stroke(l * 2, l / 2, 350);
        strokeWeight(5);
        triangle(x / 2, y / 2, x, y, x * 2.2, y * 2.35);
        }
      noLoop();
    }   
}



    

