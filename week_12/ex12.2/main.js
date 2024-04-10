let cx = innerWidth / 2;
let cy = innerHeight * .33;
let cSize = 300;
let hx = innerWidth / 4;
let hy = innerHeight * .33;
let hSize = 300;
let sx = innerWidth * .75;
let sy = innerHeight * .33;
let sSize = 300;
let hhx = innerWidth / 2.75;
let hhy = innerHeight * .66;
let hhSize = 300;
let ohx = innerWidth * .63;
let ohy = innerHeight * .66;
let ohSize = 300;

let sounds;
function preload() {
  soundFormats('wav');
  sounds = [
  loadSound('./sounds/kick.wav'),
  loadSound('./sounds/snare.wav'),
  loadSound('./sounds/hh_closed.wav'),
  loadSound('./sounds/hh_open.wav'),
  loadSound('./sounds/bass_hit.wav')
  ]

  fontRegular = loadFont('./fonts/DancingScript-VariableFont_wght.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(20);
  frameRate(20);  
}

function draw () {
  fill('black');
  stroke('white');
  strokeWeight(5);
  ellipse(cx, cy, cSize);
  ellipse(hx, hy, hSize);
  ellipse(sx, sy, sSize);
  ellipse(hhx, hhy, hhSize);
  ellipse(ohx, ohy, ohSize);
  textSize(80);
  textAlign(CENTER);
  textFont(fontRegular);
  text('Play Some Drums!', width / 2, 100);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, cx, cy);
  if(d < cSize / 2) {
    console.log(d);
    sounds[3].play();
    fill('lightblue');
    ellipse(cx, cy, cSize);
  }
  let db = dist(mouseX, mouseY, hx, hy);
  if(db < hSize / 2) {
    console.log(db);
    sounds[1].play();
    fill('blue');
    ellipse(hx, hy, hSize);
  }
  let dc = dist(mouseX, mouseY, sx, sy);
  if(dc < sSize / 2) {
    console.log(dc);
    sounds[4].play();
    fill('red');
    ellipse(sx, sy, sSize);
  }
  let dd = dist(mouseX, mouseY, hhx, hhy);
    if(dd < sSize / 2) {
    console.log(dd);
    sounds[2].play();
    fill('lightyellow');
    ellipse(hhx, hhy, hhSize);
  }
    let de = dist(mouseX, mouseY, ohx, ohy);
    if(de < sSize / 2) {
    console.log(de);
    sounds[0].play();
    fill('red');
    ellipse(ohx, ohy, ohSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}