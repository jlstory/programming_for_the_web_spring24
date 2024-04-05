const minLineWidth = 0;
const maxLineWidth = 350;
let variation = 20;

function setup() {
  createCanvas(1000, 600);
  frameRate(30);
  strokeWeight(1);
  stroke(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  background(random(0, 255));

  let lineWidth = random(minLineWidth, maxLineWidth);
  for(let i = 0; i < height; i++){
    lineWidth += random(-variation, variation);
    lineWidth = constrain(lineWidth, minLineWidth, maxLineWidth);

    line(width / 2 - lineWidth, i, width / 2 + lineWidth, i);
  }
  noLoop();
}