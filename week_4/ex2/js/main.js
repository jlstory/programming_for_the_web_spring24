// vars
let rectX = 0;
let rectY = 0;
const rectWidth = 75;
const rectHeight = 75;
let clickCount = 0;
let speed;
let mouseTrails = []
// Canvas setup with randoms for Y value and "speed"
function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
    speed = random(1, 3);
}
// Draw on Canvas
function draw() {
// Change cursor to hand 
    cursor(HAND);
    background(0);
// Display and Animate Rectangle       
    drawShape();
    rectX += speed;
        if (rectX > width) {
        noLoop();   
// Score Board
        stroke('deeppink');
        noFill();
        strokeWeight(8);
        circle(250, 250, 400); 
        noStroke();
        fill('aqua');
        textAlign(CENTER);
        textSize(40);
        text('Your score was ' + clickCount + '!', width / 2, 250);
        }
// Mouse Pointer Effects    
    fill('deeppink')
    mouseTrails.push(createVector(mouseX, mouseY))
    if(mouseTrails.length > 15) {
        mouseTrails.shift()
    }
    for (let i=0; i < mouseTrails.length; i++) {
        let pos = mouseTrails[i];
        ellipse(pos.x, pos.y, i / 2);
        loop();
    }
}
// "Hit" function
function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && rectHeight <= 75)) {
        clickCount++;
        console.log('hit' , clickCount);
    }
}
// Shape function
function drawShape() {
    fill('aqua');
// "Hit" indicator    
    if ((mouseIsPressed === true) && (mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && rectHeight <= 75)) {
    fill('deeppink');
    }
    // **** noStroke(); -- This leaves a 1px blue line on the right on loop termination??
    stroke('black');
    strokeWeight(-1);
    rect(rectX, rectY, rectWidth, rectHeight);
}






