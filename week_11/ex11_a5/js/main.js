// top level variables

// create canvas
function setup() {
    createCanvas(1000, 600, WEBGL);
    angleMode(DEGREES);
    rectMode(CENTER);
}
// draw function
function draw() {
    // background(0);
    for (let j = 10; j < 1000; j+=100) {
    for (let i = 0; i < 20; i++); {
            let x = random(-500, 500);
            let y = random(-300, 300);
            rotateX(random(0, 180));
            rotateY(random(0, 180));

            fill('slateblue');
            stroke(255);
            strokeWeight(0);
            triangle(x, x / 2, x, y * 2, y / 2, y,y);
            fill('indigo');
            rect(x, y, x / 3, y, x, x / 2, y, y / 2);
            
        }
        for (let i = 0; i < 20; i++); {
            let x = random(-500, 500);
            let y = random(-300, 300);
            rotateX(random(0, 180));
            rotateY(random(0, 180));

            fill('lightblue');
            stroke(255);
            strokeWeight(0);
            triangle(x, x / 2, x, y * 2, y / 2, y, y * 2);
            fill('indigo');
            rect(x, y, x / 2, y, x, x / 2, y, y / 2);
            
        }
        for (let i = 0; i < 20; i++); {
            let x = random(-500, 500);
            let y = random(-300, 300);
            rotateX(random(0, 180));
            rotateY(random(0, 180));

            fill('lightgreen');
            stroke(255);
            strokeWeight(0);
            triangle(x, x / 2, x, y * 2, y / 2, y,y);
            fill('indigo');
            rect(x, y, x / 3, y, x, x / 2, y, y / 2);
            
        }
        for (let i = 0; i < 20; i++); {
            let x = random(-500, 500);
            let y = random(-300, 300);
            rotateX(random(0, 180));
            rotateY(random(0, 180));

            fill('midnightblue');
            stroke(255);
            strokeWeight(0);
            triangle(x, x / 2, x, y * 2, y / 2, y,y);
            fill('indigo');
            rect(x, y, x / 3, y, x, x / 2, y, y / 2);
            
        }
        noLoop();
    }
}


    

