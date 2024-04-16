let offset = 0;
let amp = 1.5;
let i = 0;
let white;
let blue;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  white = color(255, 255, 255);
  blue = color(60, 135, 200);
} 

function draw() { 
  background('rgba(0, 0, 0, .03)');
  // color "loop" based on sine movement
  const color = map(sin(i), -1, 1, 0, 1);
  stroke(lerpColor(white, blue, color));
  strokeWeight(1)
  // noFill();
  fill(lerpColor(white, blue, color))
  beginShape();
  vertex(0, height);
  // for loop with sin() set up to control the y value of the vertex (amplitude of the wave)
  for(var x = -5; x < width + 5; x++){
    let angle = offset + x * 0.01;
    let y = map(sin(angle), -amp, amp, width / 2, -height / 12);
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  offset += 0.1;
  i += 0.01; 
}