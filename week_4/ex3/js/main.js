// Global Vars
let boxWidth = 150;
let boxHeight = 200;

//Cards Array
let myCardsArray = [
    // Row 1
    {x: 225, y: 150},
    {x: 425, y: 150},
    {x: 625, y: 150},
    {x: 825, y: 150},
    {x: 1025, y: 150},
    {x: 1225, y: 150}, 
    // Row 2
    {x: 225, y: 400},
    {x: 425, y: 400},
    {x: 625, y: 400},
    {x: 825, y: 400},
    {x: 1025, y: 400},
    {x: 1225, y: 400},
    // Row 3
    {x: 225, y: 650},
    {x: 425, y: 650},
    {x: 625, y: 650},
    {x: 825, y: 650},
    {x: 1025, y: 650},
    {x: 1225, y: 650},         
]

// Canvas
function setup() {
    createCanvas(1600, 900);
    background(0, 0, 0, 0);
}
// Draw Loop --- Cards
function draw() {
    noLoop();
    for(let i = 0; i < myCardsArray.length; i++)
    rect(myCardsArray[i].x, myCardsArray[i].y, boxWidth, boxHeight)
}