// top level variables
const w = window.innerWidth;
const h = window.innerHeight;
let rotateBy = 1;
let rotateByB = 360;
let rotateByC = 720;
let randColor;
let colorsArray = ['darkblue', 'blueviolet', 'navy', 'midnightblue', 'indigo', 'steelblue'];
// create canvas
function setup() {
    createCanvas(w, h, WEBGL);
    background('rgba(0, 0, 0, .8)');
    angleMode(DEGREES);
}
// Make arm
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    let altB = Math.round(rotateByB / 360);
    noFill();
    stroke(random(255))
    point(random(800), random(800));
    blendMode(SUBTRACT);
    stroke("lightblue");
    strokeWeight(10);
    rect(50 * (1 * alt), 1 * alt, 50 + alt);
    stroke("midnightblue")
    fill(0, 75, 130, 25);
    rect(25 * (1 * altB), 1 * altB, -100 - altB);
    noFill;
    stroke(255)
    line(50 * (1 * alt), 1 * alt, 100 + alt, 100 - alt);
    stroke(random(255));
    strokeWeight(2);
    line(75 * (1 * alt), 1 * alt, 100 + alt, 100 - alt);
    blendMode(NORMAL);
    stroke("midnightblue");
    rect(55 * (1 * alt), 1 * alt, 55 + alt);
    fill(0, 75, 130, 25);
    rect(25 * (1 * altB), 1 * altB, -110 - altB);
    noFill;
    stroke(255)
    line(50 * (1 * alt), 1 * alt, 100 + alt, 110 - alt);
    stroke(0)
    strokeWeight(2)
    line(75 * (1 * alt), 1 * alt, 100 + alt, 100 - alt);
    line(78 * (1 * alt), 1 * alt, 100 + alt);
    rect(55 * (1 * alt), 1 * alt, 50 + alt);
    stroke("midnightblue")
    fill(0, 75, 130, 25);
    rect(25 * (1 * altB), 1 * altB, -100 - altB);
}
// draw function
function draw() {
    translate (300, 100);
    rotate(rotateBy);
    makeArm(rotateBy);
    makeArm(rotateByB);
    makeArm(rotateByC);
    rotateBy += 20;
}
// Pause on Mouse Hold
function mousePressed() {
    noLoop();
}
// Resume on Mouse Release
function mouseReleased() {
    loop();
}
