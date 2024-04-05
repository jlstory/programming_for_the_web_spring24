// top level variables

// create canvas
function setup() {
    createCanvas(1000, 600, WEBGL);
    frameRate(10);
    angleMode(DEGREES);
    rectMode(CENTER);
    loop();
}
// draw function
function draw() {
    background(0);

    rotateX(-15);
    rotateY(-15)

    noFill();
    stroke(255);
    strokeWeight(2);

    for (let i = 0; i < 50; i++) {
        let r = map(sin(frameCount), -1, 1, 0, 255);
        let g = map(i, 0, 20, 0, 255);
        let b = map(cos(frameCount), -1, 1, 200, 100);
        stroke(r, g, b);
        rotate(frameCount / 20)
        beginShape();
        for (let j = 0; j < 360; j += 250) {
            let rad = i * 3;
            let x = rad * cos(j) + mouseX;
            let y = rad * sin(j);
            let z = rad * sin(frameCount * 2 + i * 5) * 100;

            vertex(x, y, z)
        }
        endShape(CLOSE);
        
        for (let i = 0; i < 50; i++) {
        let r = map(sin(frameCount), -1, 1, 0, 255);
        let g = map(i, 0, 20, 0, 255);
        let b = map(cos(frameCount), -1, 1, 200, 100);
        stroke(r, g, b);
        rotate(frameCount / 20)
        beginShape();
        for (let j = 0; j < 360; j += 250) {
            let rad = i * 3;
            let x = rad * cos(j) + mouseX;
            let y = rad * sin(j);
            let z = rad * sin(frameCount * 2 + i * 5) * 50;

            vertex(x, y, z)
        }
        endShape(CLOSE);
        }      
    }
    for (let i = 0; i < 50; i++) {
        let r = map(sin(frameCount), -1, 1, 0, 255);
        let g = map(i, 0, 20, 0, 255);
        let b = map(cos(frameCount), -1, 1, 200, 100);
        stroke(r, g, b);
        rotate(frameCount / 40)
        beginShape();
        for (let j = 0; j < 360; j += 10) {
            let rad = i * 5;
            let x = rad * cos(j);
            let y = rad * sin(j);
            let z = rad * sin(frameCount * 2 + i * 5) * 100;

            vertex(x, y, z)
        }
        endShape(CLOSE);
        
        for (let i = 0; i < 50; i++) {
        let r = map(sin(frameCount), -1, 1, 0, 255);
        let g = map(i, 0, 20, 0, 255);
        let b = map(cos(frameCount), -1, 1, 200, 100);
        stroke(r, g, b);
        rotate(frameCount / 20)
        beginShape();
        for (let j = 0; j < 360; j += 250) {
            let rad = i * 3;
            let x = rad * cos(j);
            let y = rad * sin(j) + mouseX;
            let z = rad * sin(frameCount * 2 + i * 5) * 100 + mouseX;

            vertex(x, y, z)
        }
        endShape(CLOSE);
        }      
    }
}


    

