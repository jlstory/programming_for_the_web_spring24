// top level variables
let colors = ['aquamarine', 'indigo', 'aqua', 'lightyellow', "yellow", 'lightgreen']
let rotateBy = .5;
// create canvas
function setup() {
    createCanvas(1000, 600);
    background(255);
    frameRate(10);
    angleMode(DEGREES);
    rectMode(CENTER);
}
// draw function
function draw() {
    for (let i = 0; i <= 6; i++) {
        for (let j = -200; j < 3000; j++) {
            let x = i + 25;
            let y = j + 25;
            let dw = 200;
            let dh= 200;
            rotate(rotateBy);
            fill(colors[i]);
            stroke(255);
            rect(x / 2, y * 1.25, dw, dh);
        }
    }    
      noLoop();
}



    

