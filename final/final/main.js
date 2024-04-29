let oh, hh, snare, bass, sub; //INSTRUMENT. will serve as a container that holds a sound source 
let ohPat, hPat, cPat, subPat, bPat; //INSTRUMENT PATTERN. it will be an array of numbers that we can manipulate to make beats
let ohPhrase, hPhrase, sPhrase, bPhrase, subPhrase; //INSTRUMENT PHRASE. which defines how the instrument pattern is interpreted. 
let drums; //PART. we will attach the phrase to the part, which will serve as our transport to drive the phrase
let bpmCTRL;
let beatLength;
let cellWidth;
let cnv, playPause;
let sPat;
let reverb, delay, filter;
let currentSpeed;
let valueDisplayer;
let font;
let cursorPos;

function preload() {
  font = loadFont('./fonts/DIGITEK.TTF');
}

function setup() {
  cnv = createCanvas(1280, 385);
  cnv.mousePressed(canvasPressed);
  textFont(font)
  //create BPM Display
  valueDisplayer = createElement('h3');
  valueDisplayer.position(width - width / 2 , height + 400);
  //labels
  textAlign(LEFT);
  let labelA;
  labelA = createP();
  labelA.position(160, 326);
  labelA.html('Synth Cymbal');
  let labelB;
  labelB = createP();
  labelB.position(160, 395);
  labelB.html('High-Hat');
  let labelC;
  labelC = createP();
  labelC.position(160, 465);
  labelC.html('Snare Drum');
  let labelD;
  labelD = createP();
  labelD.position(160, 534);
  labelD.html('Kick Drum');
  let labelE;
  labelE = createP();
  labelE.position(160, 605);
  labelE.html('Sub Hit');

  beatLength = 16;
  cellWidth = width / beatLength;
  cursorPos = 0;
// samples
  console.log("preload");
  soundFormats('wav');
  oh = loadSound('./sounds/hh_open.wav', () => {});
  hh = loadSound('./sounds/hh_closed.wav', () => {});
  snare = loadSound('./sounds/snare.wav', () => {});
  bass = loadSound('./sounds/kick.wav', () => {});
  sub = loadSound('./sounds/bass_hit.wav', () => {});
  
// predifined sequence
  ohPat = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
  hPat = [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1];
  cPat = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
  bPat = [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0];
  subPat = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  ohPhrase = new p5.Phrase('oh', (time) => {
    oh.play(time);
  }, ohPat);
  hPhrase = new p5.Phrase('hh', (time) => {
    hh.play(time);
  }, hPat);
  sPhrase = new p5.Phrase('snare', (time) => {
    snare.play(time);
  }, cPat);
  bPhrase = new p5.Phrase('bass', (time) => {
    bass.play(time);
  }, bPat);
  subPhrase = new p5.Phrase('sub', (time) => {
    sub.play(time);
  }, subPat);

  //play button
  playPause = createButton("Play Your Beat!")
    .position(width * .72, 600)
    .mousePressed(() => {
    if (hh.isLoaded() && snare.isLoaded() && bass.isLoaded() && oh.isLoaded() && sub.isLoaded()) {
      if (!drums.isPlaying) {
        userStartAudio();
        drums.loop();
        playPause.html("Pause the Beat")
      } else {
        drums.stop();
        playPause.html("Play Your Beat!")
      }
    } else {
      console.log('drums loading...');
    }
  }) 

//sequence parts
  drums = new p5.Part();

  drums.addPhrase(ohPhrase);
  drums.addPhrase(hPhrase);
  drums.addPhrase(sPhrase);
  drums.addPhrase(bPhrase);
  drums.addPhrase(subPhrase);
  drums.addPhrase('seq', sequence, sPat);
  //BPM Slider
  bpmCTRL = createSlider(10, 250, 80, 1);
  bpmCTRL.position(windowWidth * .25, 550);
  bpmCTRL.addClass('slider');
  bpmCTRL.input((event) => {
    console.log(event.target);
    drums.setBPM(bpmCTRL.value())
  });
  drums.setBPM('80');

  drawMatrix();
}

//Spacebar Start
function keyPressed() {
  if (key === " ") {
    if (oh.isLoaded() && hh.isLoaded() && snare.isLoaded() && bass.isLoaded() && sub.isLoaded()) {
      if (!drums.isPlaying) {
        userStartAudio();
        drums.loop();
      } else {
        drums.stop();
      }
    } else {
      console.log('drums loading...');
    }
  }
} 
//User Sequencing
function canvasPressed() {
  let rowClicked = floor(5 * mouseY / height);
  let indexClicked = floor(16 * mouseX / width);
  if (rowClicked === 0) {
    console.log('synth cymbal ' + indexClicked);
    ohPat[indexClicked] = +!ohPat[indexClicked];
  } else if (rowClicked === 1) {
    console.log('high hat ');
    hPat[indexClicked] = +!hPat[indexClicked];
  } else if (rowClicked === 2) {
    console.log('snare drum ');
    cPat[indexClicked] = +!cPat[indexClicked];
  } else if (rowClicked === 3) {
    console.log('kick drum ');
    bPat[indexClicked] = +!bPat[indexClicked];
  } else if (rowClicked === 4) {
    console.log('sub bass ');
    subPat[indexClicked] = +!subPat[indexClicked];
  }
  
  drawMatrix();
}
//Matrix UI (add/remove notes from arrangement)
const drawMatrix = () => {
  let r;
  let g;
  let b;
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  background(0);
  stroke(r, g, b);
  strokeWeight(1);
  fill('blue');
  for (let i = 0; i < beatLength + 1; i++) {
    line(i * cellWidth, 0, i * cellWidth, height);
  }
  for (let i = 0; i < 6; i++) {
    line(0, i * height / 5, width, i * height / 5);
  }
  stroke('white');
  strokeWeight(1);
  for (let i = 0; i < beatLength; i++) {
    if (ohPat[i] === 1) {
      stroke('deepskyblue');
      fill('deepskyblue');
      rect(i * cellWidth + 0.13 *cellWidth, height * .12 / 6, 60);
    } else {
      stroke('deepskyblue');
      noFill();
      rect(i * cellWidth + 0.13 *cellWidth, height * .12 / 6, 60);
    }
    if (hPat[i] === 1) {
      stroke('dodgerblue');
      fill('dodgerblue');
      rect(i * cellWidth + 0.13 * cellWidth, height / 4.55, 60);
    } else {
      stroke('dodgerblue');
      noFill();
      rect(i * cellWidth + 0.13 * cellWidth, height / 4.55, 60); 
    }
    if (cPat[i] === 1) {
      stroke('yellow');
      fill('yellow');
      rect(i * cellWidth + 0.13 * cellWidth, height / 2.38, 60);
    } else {
      stroke('yellow');
      noFill();
      rect(i * cellWidth + 0.13 * cellWidth, height / 2.38, 60);
    }
    if (bPat[i] === 1) {
      stroke('darkorange');
      fill('darkorange')
      rect(i * cellWidth + 0.13 * cellWidth, height * 3.72 / 6, 60);
    } else {
      stroke('darkorange');
      noFill();
      rect(i * cellWidth + 0.13 * cellWidth, height * 3.72 / 6, 60);
    }
    if (subPat[i] === 1) {
      stroke('crimson');
      fill('crimson')
      rect(i * cellWidth + 0.13 * cellWidth, height * 4.92 / 6, 60);
    } else {
      stroke('crimson');
      noFill();
      rect(i * cellWidth + 0.13 * cellWidth, height * 4.92 / 6, 60);
    }
  }

  console.log(bpmCTRL.value);
  valueDisplayer.html('BPM: ' + bpmCTRL.value());
}

const sequence = (time, beatIndex) => {
	console.log(beatIndex);
    setTimeout(() => {drawMatrix();
    drawPlayhead(beatIndex);}, time * 1000);
}

const drawPlayhead = (beatIndex) => {
  stroke('limegreen');
  strokeWeight(6)
  fill(0, 255, 10, 65);
  rect((beatIndex - 1) * cellWidth, 0, cellWidth, height);
}

const touchStarted = () => {
  if (getAudioContext().state !== 'running') {
    getAudioContext().loop();
  }
}

