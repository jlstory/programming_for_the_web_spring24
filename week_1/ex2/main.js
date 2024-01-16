const scale = window.prompt('Please enter your preferred brush size in pixels here');

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
    if (mouseIsPressed) {
      fill(100, 120, 240);
      stroke(0)
    } else {
      noFill();
      noStroke();
    }
    ellipse(mouseX, mouseY, scale, scale);
    ellipseMode (RADIUS)
}
