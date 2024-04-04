// top level variables
// const w = window.innerWidth;
// const h = window.innerHeight;

// create canvas

function setup() {
    createCanvas(1000, 600, WEBGL);
    background(255);
    angleMode(DEGREES);
    rectMode(CENTER);
    colorMode(HSB, 100, 100, 359);
}

// draw function
function draw() {
    for (let i = -100; i < 75; i++) {
        for (let j = -100; j < 50; j++) {
        let x = i * 50 + 25;
        let y = j * 50 + 25;
        let d = 150;
        fill(i * 1);
        stroke(i * -1, 200, 300);
        ellipse(x / 2, y, d);
        }
    }
    for (let p = 0; p < 16; p++) 
        for (let n = 0; n < 150; n++) {
            for (let o = -500; o < 200; o++) {
            let x = n * -50 + 800;
            let y = o + 250;
            let d = 65;
            fill(n * 8, 200, 300);
            stroke(o++);
            ellipse((x * 3) - 1200, y, d);
            }
        }
        for (let n = 0; n < 30; n++) {
            for (let o = -500; o < 200; o++) {
            let x = n * -50 + 650;
            let y = o + 150;
            let d = 65;
            fill(n * 7, 200, 300);
            stroke(o++);
            ellipse((x * 5) - 1060, y - 150, d);
            }
        }
        for (let n = 0; n < 30; n++) {
            for (let o = -300; o < 200; o++) {
            let x = n * -50 + 650;
            let y = o + 150;
            let d = 60;
            fill(n * 7, 200, 300);
            stroke(o++);
            ellipse((x * 2.5) - 1000, y - 350, d);
            }
        }
        for (let q = 0; q < 300; q++) {
            for (let r = -100; r < 1000; r++) {
            let x = q * -50 + 650;
            let y = r;
            let d = 60;
            fill(q * 7, 200, 300);
            stroke(r++);
            rect(x - 30, y - 1300, d);
            }
        }

    }



    

