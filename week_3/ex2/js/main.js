function setup() {
    createCanvas(600, 600);
    background('white');
    noLoop();
}
function createTile(originX, originY, primaryColor, secondaryColor, tertiaryColor) {
    translate(originX, originY);
    fill(primaryColor);
    stroke('white');
    strokeWeight(5);
    rect(0, 0, 200, 200);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill(secondaryColor);
    circle(100, 25, 40);
    circle(100, 175, 40);
    circle(25, 100, 40);
    circle(175, 100, 40);
    fill(tertiaryColor);
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
}
function draw() {
     createTile(0, 0, 'black', 'orange', 'gold');
     createTile(0, 200, '#505050', 'yellow', 'red');
     createTile(0, 200, 'black', 'orange', 'gold');
     createTile(200, -400, '#505050', 'yellow', 'red');
     createTile(0, 200, 'black', 'orange', 'gold');
     createTile(0, 200, '#505050', 'yellow', 'red');
     createTile(200, -400, 'black', 'orange', 'gold');
     createTile(0, 200, '#505050', 'yellow', 'red');
     createTile(0, 200, 'black', 'orange', 'gold');
}
