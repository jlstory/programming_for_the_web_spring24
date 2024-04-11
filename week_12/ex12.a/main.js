let hh, snare, bass; //INSTRUMENT. will serve as a container that holds a sound source 
let hPat, cPat, bPat; //INSTRUMENT PATTERN. it will be an array of numbers that we can manipulate to make beats
let hPhrase, sPhrase, bPhrase; //INSTRUMENT PHRASE. which defines how the instrument pattern is interpreted. 
let drums; //PART. we will attach the phrase to the part, which will serve as our transport to drive the phrase
let bpmCTRL;
let beatLength;
let cellWidth;
let cnv, playPause;
let sPat;
let cursorPos;

function setup() {
  cnv = createCanvas(1280, 240);
  cnv.mousePressed(canvasPressed);

  beatLength = 16;
  cellWidth = width / beatLength;
  cursorPos = 0;

  hh = loadSound('./sounds/hh_closed.wav', () => {});
  snare = loadSound('./sounds/snare.wav', () => {});
  bass = loadSound('./sounds/kick.wav', () => {});

  hPat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  cPat = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
  bPat = [1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0];
  sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  hPhrase = new p5.Phrase('hh', (time) => {
    hh.play(time);
  }, hPat);
  sPhrase = new p5.Phrase('snare', (time) => {
    snare.play(time);
  }, cPat);
  bPhrase = new p5.Phrase('bass', (time) => {
    bass.play(time);
  }, bPat);
  //play button
  playPause = createButton("Play Your Beat!")
    .position(width * .72, 600)
    .mousePressed(() => {
    if (hh.isLoaded() && snare.isLoaded() && bass.isLoaded()) {
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

  drums = new p5.Part();

  drums.addPhrase(hPhrase);
  drums.addPhrase(sPhrase);
  drums.addPhrase(bPhrase);
  drums.addPhrase('seq', sequence, sPat);
  //BPM Slider
  bpmCTRL = createSlider(10, 180, 80, 1);
  bpmCTRL.position(width / 2, 550);
  bpmCTRL.addClass('slider');
  bpmCTRL.input(() => {
    drums.setBPM(bpmCTRL.value())
  });
  drums.setBPM('80');
  drawMatrix();
}

//Spacebar Start
function keyPressed() {
  if (key === " ") {
    if (hh.isLoaded() && snare.isLoaded() && bass.isLoaded()) {
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

function canvasPressed() {
  let rowClicked = floor(3 * mouseY / height);
  let indexClicked = floor(16 * mouseX / width);
  if (rowClicked === 0) {
    console.log('first row ' + indexClicked);
    hPat[indexClicked] = +!hPat[indexClicked];
  } else if (rowClicked === 1) {
    console.log('second row');
    cPat[indexClicked] = +!cPat[indexClicked];
  } else if (rowClicked === 2) {
    console.log('third row');
    bPat[indexClicked] = +!bPat[indexClicked];
  }
  
  drawMatrix();
}

const drawMatrix = () => {
  background(80);
  stroke('gray');
  strokeWeight(2);
  fill('blue');
  for (let i = 0; i < beatLength + 1; i++) {
    line(i * cellWidth, 0, i * cellWidth, height);
  }
  for (let i = 0; i < 4; i++) {
    line(0, i * height / 3, width, i * height / 3);
  }
  stroke('white');
  strokeWeight(2);
  for (let i = 0; i < beatLength; i++) {
    if (hPat[i] === 1) {
      ellipse(i * cellWidth + 0.5 * cellWidth, height / 6, 30);
    }
    if (cPat[i] === 1) {
      ellipse(i * cellWidth + 0.5 * cellWidth, height / 2, 30);
    }
    if (bPat[i] === 1) {
      ellipse(i * cellWidth + 0.5 * cellWidth, height * 5 / 6, 30);
    }
  }
}

const sequence = (time, beatIndex) => {
	console.log(beatIndex);
    setTimeout(() => {drawMatrix();
    drawPlayhead(beatIndex);}, time * 1000);
}

const drawPlayhead = (beatIndex) => {
	stroke('red');
  fill(255, 0, 0, 30);
  rect((beatIndex-1) * cellWidth, 0, cellWidth, height);

}

const touchStarted = () => {
  if (getAudioContext().state !== 'running') {
    getAudioContext().loop();
  }
}