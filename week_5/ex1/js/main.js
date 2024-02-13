
// glocal vars
let blockX = 0;
let blockY = 0;
let drawTimer;
const speed = 10;
const distance = 2;
let blockColor = 255;
// Canvas setup 
function setup() {
    createCanvas(500, 500);
    background(0);
}
// Draw Block & Setup Parameters 
function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}
// Key Type
function keyTyped() {
    let keyToNumber = Number(key);
    if(isNaN(keyToNumber)) {
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number ', keyToNumber);
    blockColor = keyToNumber;
}
//set Time Out (2s)
window.setTimeout(() => {
    // Setup Timer
    drawTimer = window.setInterval(() => {
    // Draw
    if((blockY - 50) <= height && (blockX - 50 < width)) {
    drawBlock(blockX, blockY, blockColor);
    blockY += distance;
    } else {
        blockY = 0;
        blockX += 50;
    }
    // Stop Drawing
    if((blockY > height) && (blockX + 50 >= width)) {
        window.clearInterval(drawTimer);
        alert('DONE!');
    }
}, speed);
}, 2000);









