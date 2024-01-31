function setup() {
    createCanvas(200, 200);
    background('white');
    noLoop();
}

function createTile() {
    translate(0, 0);
    fill('black');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('orange');
    circle(100, 25, 40);
    circle(100, 175, 40);
    circle(25, 100, 40);
    circle(175, 100, 40);
    fill('red');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('white');
    strokeWeight(5);
    circle(100, 100, 100);
    circle(0, 0, 100);
    circle(200, 0, 100);
    circle(0, 200, 100);
    circle(200, 200, 100);
};

function draw() {
     createTile();
}
