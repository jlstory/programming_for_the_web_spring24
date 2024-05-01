// Global Vars
let polySynth;
let numKeysWhite = 16;
let numKeysBlackC = 2;
let numKeysBlackF = 3;
let numKeysBlackD = 2;
let numKeysBlackE = 3;
let numKeysBlackG = 2;
let volSlider;
let attackSlider;
let decaySlider;
let sustainSlider;
let releaseSlider;
let lowPassFilter;
let lpSlider;
let lpResSlider;
let reverb;
let revSlider;
let distortion; 
let distAmtSlider;
let whiteKeys = [];
let blackKeysC = [];
let blackKeysF = [];
let blackKeysD = [];
let blackKeysE = [];
let blackKeysG = [];
let xKeyWhite = [];
let xKeyBlackC = [];
let xKeyBlackF = [];
let xKeyBlackG = [];

function setup() {
  let cnv = createCanvas (1300, 600);
  // build keyboard layout
  for (let i = 0; i <= numKeysWhite; i++) {
    let w = 1300 / numKeysWhite;
    let x = w * i;
    xKeyWhite.push(x);    
  }
  for (let i = 0; i <= numKeysBlackC; i += .126) {
    let w = 1300 / numKeysBlackC;
    let x = w * i;
    xKeyBlackC.push(x);    
  }
    for (let i = 0; i <= numKeysBlackF; i += .19) {
    let w = 1300 / numKeysBlackF;
    let x = (w * i);
    xKeyBlackF.push(x);    
  }
    for (let i = 0; i <= numKeysBlackC; i += .126) {
    let w = 1300 / numKeysBlackD;
    let x = w * i;
    xKeyBlackC.push(x);    
  }
    for (let i = 0; i <= numKeysBlackE; i += .19) {
    let w = 1300 / numKeysBlackF;
    let x = (w * i);
    xKeyBlackF.push(x);    
  }
  for (let i = 0; i <= numKeysBlackE; i += .19) {
    let w = 1300 / numKeysBlackF;
    let x = (w * i);
    xKeyBlackG.push(x);    
  }
  // display keyboard layout
  for (let i = 0; i < numKeysWhite; i++) {
    whiteKeys.push(new whiteKey(i));
    whiteKeys[i].display();
  }
  for (let i = 0; i < numKeysBlackC; i++) {
    blackKeysC.push(new blackKeyC(i));
    blackKeysC[i].display();
  }
  for (let i = 0; i < numKeysBlackF; i++) {
    blackKeysF.push(new blackKeyF(i));
    blackKeysF[i].display();
  } 
    for (let i = 0; i < numKeysBlackD; i++) {
    blackKeysD.push(new blackKeyD(i));
    blackKeysD[i].display();
  }
  for (let i = 0; i < numKeysBlackE; i++) {
    blackKeysE.push(new blackKeyE(i));
    blackKeysE[i].display();
  } 
    for (let i = 0; i < numKeysBlackG; i++) {
    blackKeysG.push(new blackKeyG(i));
    blackKeysG[i].display();
  } 

  for (let r = 0; r < 1; r++);
  polySynth = new p5.PolySynth();
 
  function touchStarted() {
    for (let i = 0; i < numKeysWhite; i++) {
      whiteKeys[i].played();
    }
  }
 
  //reverb, lp, distortion
  reverb = new p5.Reverb();
  lowPassFilter = new p5.LowPass();
  distortion = new p5.Distortion();

  //  Volume Control
  volSlider = createSlider(0, 1, 0.5, 0);
  volSlider.position(500, 240);
  textSize(20);
  fill('dodgerblue');
  text('VOLUME', 15, 20);

  // Note / Octave Labels
  textSize(20);
  fill('lightblue');
  text('OCTAVE 1 UP: CAPSLOCK', 500, 200);
  text('BASS NOTES: z - m (lower case | C-MAJOR SCALE)', 400, 225);
  fill('gray');
  text('a       w     s      r        d        f         y     g      i      h      p       j       k:A     l:W   S     R       D        F       Y     G     I      H     P       J        K       -      L     -', 25, 280);
  
  // Reverb Slider
  revSlider = createSlider(0, 1, 0, 0);
  revSlider.position(500, 300);

  // ADSR Settings
  attackSlider = createSlider(0.1, 10, 0.5, 0);
  attackSlider.position(1390, 240);
  textSize(20);
  fill('dodgerblue');
  text('ATTACK', 943, 20);

  decaySlider = createSlider(0, 1, 0.2, 0);
  decaySlider.position(1390, 300);
  textSize(20);
  fill('dodgerblue');
  text('DECAY', 943, 83);

  sustainSlider = createSlider(0, 1, 0, 0);
  sustainSlider.position(1590, 240);
  textSize(20);
  fill('dodgerblue');
  text('SUSTAIN', 1192, 20);

  releaseSlider = createSlider(0.2, 5, 0.25, 0);
  releaseSlider.position(1590, 300);
  textSize(20);
  fill('dodgerblue');
  text('RELEASE', 1190, 83);

  // Low Pass Filter
  lpSlider = createSlider(10, 800, 600, 0);
  lpSlider.position(700, 240);
  textSize(20);
  fill('dodgerblue');
  text('LOW PASS', 225, 20);

  lpResSlider = createSlider(0, 80, 5, 0);
  lpResSlider.position(700, 300);
  textSize(20);
  fill('dodgerblue');
  text('RESONANCE', 225, 83);

  // Distortion 
  distAmtSlider = createSlider(0, 5, 0, 0);
  distAmtSlider.position(500, 360);
  textSize(20);
  fill('dodgerblue');
  text('DISTORTION', 15, 150);
}

function draw() {

  outputVolume(volSlider.value(), 0.025);
  //  Reverb Control
  textSize(20);
  fill('dodgerblue');
  text('REVERB', 15, 83);
  reverb.process(polySynth, revSlider.value(), 3);
  reverb.connect();
  reverb.amp(revSlider.value());
  // ADSR Control
  polySynth.setADSR(attackSlider.value(), decaySlider.value(), sustainSlider.value(), releaseSlider.value());
  polySynth.connect(lowPassFilter, reverb);
  // Filters
  lowPassFilter.freq(lpSlider.value());
  lowPassFilter.res(lpResSlider.value());
  // Distortion
  distortion.process(polySynth);
  distortion.set(distAmtSlider.value(), '2x');
  distortion.amp(distAmtSlider.value());
}

function keyPressed() {
    userStartAudio();
    if (key === 'a') { 
    console.log(key);
    polySynth.play('C3', 1, 0, 0.5);
  } else if (key === 's') {
    console.log(key);
    polySynth.play('D3', 1, 0, 0.5);
  } else if (key === 'd') {
    console.log(key);
    polySynth.play('E3', 1, 0, 0.5);
  } else if (key === 'f') {
    console.log(key);
    polySynth.play('F3', 1, 0, 0.5);
  } else if (key === 'g') {
    console.log(key);
    polySynth.play('G3', 1, 0, 0.5);
  } else if (key === 'h') {
    console.log(key);
    polySynth.play('A4', 1, 0, 0.5);
  } else if (key === 'j') {
    console.log(key);
    polySynth.play('B4', 1, 0, 0.5);
  } else if (key === 'k') {
    console.log(key);
    polySynth.play('C4', 1, 0, 0.5);
  } else if (key === 'l') {
    console.log(key);
    polySynth.play('D4', 1, 0, 0.5);
  } else if (key === 'w') {
    console.log(key);
    polySynth.play('C#3', 1, 0, 0.5);
  } else if (key === 'r') {
    console.log(key);
    polySynth.play('D#3', 1, 0, 0.5);
  } else if (key === 'y') {
    console.log(key);
    polySynth.play('F#3', 1, 0, 0.5);
  } else if (key === 'i') {
    console.log(key);
    polySynth.play('G#3', 1, 0, 0.5);
  } else if (key === 'p') {
    console.log(key);
    polySynth.play('A#4', 1, 0, 0.5);
  } else if (key === 'z') {
    console.log(key);
    polySynth.play('C1', 1, 0, 0.5);
  } else if (key === 'x') {
    console.log(key);
    polySynth.play('D1', 1, 0, 0.5);
  } else if (key === 'c') {
    console.log(key);
    polySynth.play('E1', 1, 0, 0.5);
  } else if (key === 'v') {
    console.log(key);
    polySynth.play('F1', 1, 0, 0.5);
  } else if (key === 'b') {
    console.log(key);
    polySynth.play('G1', 1, 0, 0.5);
  } else if (key === 'n') {
    console.log(key);
    polySynth.play('A2', 1, 0, 0.5);
  } else if (key === 'm') {
    console.log(key);
    polySynth.play('B2', 1, 0, 0.5);
  } else if (key === 'A') { 
    console.log(key);
    polySynth.play('C4', 1, 0, 0.5);
  } else if (key === 'S') {
    console.log(key);
    polySynth.play('D4', 1, 0, 0.5);
  } else if (key === 'D') {
    console.log(key);
    polySynth.play('E4', 1, 0, 0.5);
  } else if (key === 'F') {
    console.log(key);
    polySynth.play('F4', 1, 0, 0.5);
  } else if (key === 'G') {
    console.log(key);
    polySynth.play('G4', 1, 0, 0.5);
  } else if (key === 'H') {
    console.log(key);
    polySynth.play('A5', 1, 0, 0.5);
  } else if (key === 'J') {
    console.log(key);
    polySynth.play('B5', 1, 0, 0.5);
  } else if (key === 'K') {
    console.log(key);
    polySynth.play('C5', 1, 0, 0.5);
  } else if (key === 'L') {
    console.log(key);
    polySynth.play('D5', 1, 0, 0.5);
  } else if (key === 'W') {
    console.log(key);
    polySynth.play('C#4', 1, 0, 0.5);
  } else if (key === 'R') {
    console.log(key);
    polySynth.play('D#4', 1, 0, 0.5);
  } else if (key === 'Y') {
    console.log(key);
    polySynth.play('F#4', 1, 0, 0.5);
  } else if (key === 'I') {
    console.log(key);
    polySynth.play('G#4', 1, 0, 0.5);
  } else if (key === 'P') {
    console.log(key);
    polySynth.play('A#5', 1, 0, 0.5);
  } else if (key === 'Z') {
    console.log(key);
    polySynth.play('C2', 1, 0, 0.5);
  } else if (key === 'X') {
    console.log(key);
    polySynth.play('D2', 1, 0, 0.5);
  } else if (key === 'C') {
    console.log(key);
    polySynth.play('E2', 1, 0, 0.5);
  } else if (key === 'V') {
    console.log(key);
    polySynth.play('F2', 1, 0, 0.5);
  } else if (key === 'B') {
    console.log(key);
    polySynth.play('G2', 1, 0, 0.5);
  } else if (key === 'N') {
    console.log(key);
    polySynth.play('A3', 1, 0, 0.5);
  } else if (key === 'M') {
    console.log(key);
    polySynth.play('B3', 1, 0, 0.5);
  }
}
// Constructors for Keyboard
function whiteKey(id) {
  this.display = function() {
    stroke('black');
    strokeWeight(2);
    fill('white');
    rect(xKeyWhite[id], 250, (windowWidth / numKeysWhite), windowHeight / 2);
  }
}
function blackKeyC(id) {
  this.display = function() {
    noStroke();
    fill('black');
    rect(xKeyBlackC[id] + 55, 250, 50, windowHeight / 5);
  }
}
function blackKeyF(id) {
  this.display = function() {
    noStroke();
    fill('black');
    rect(xKeyBlackF[id] + 300, 250, 50, windowHeight / 5);
  }
}
function blackKeyD(id) {
  this.display = function() {
    noStroke();
    fill('black');
    rect(xKeyBlackC[id] + 625, 250, 50, windowHeight / 5);
  }
}
function blackKeyE(id) {
  this.display = function() {
    noStroke();
    fill('black');
    rect(xKeyBlackF[id] + 868, 250, 50, windowHeight / 5);
  }
}
function blackKeyG(id) {
  this.display = function() {
    noStroke();
    fill('black');
    rect(xKeyBlackC[id] + 1194, 250, 50, windowHeight / 5);
  }
}