// top level variables
let rotateBy = 5;
// create canvas
function setup() {
    createCanvas(800, 800);
    background(0);
    angleMode(DEGREES);
}
// Make arm
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    noFill();
    stroke(random(255), random(255), random(255));
    strokeWeight(1);
    circle(50 * (1.5 * alt), 1.5 * alt, 50 - alt);
}
// draw function
function draw() {
    translate (400, 400);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}
// stop function
function mousePressed() {
    noLoop();
}
