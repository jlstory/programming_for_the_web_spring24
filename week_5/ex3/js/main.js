// Global Vars
let boxWidth = 150;
let boxHeight = 200;
const DOWN = 'down';
const UP = 'up';
let startingX = 225;
let startingY = 150;
let cards = [];
const gameState = {
    totalPairs: 9,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};

// Preloads
let cardFaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('../img/cardBack.png');
    cardFaceArray = [
        loadImage('../img/cardOne.png'),
        loadImage('../img/cardTwo.png'),
        loadImage('../img/cardThree.png'),
        loadImage('../img/carFour.png'),
        loadImage('../img/cardFive.png'),
        loadImage('../img/cardSix.png'),
        loadImage('../img/cardSeven.png'),
        loadImage('../img/CardEight.png'),
        loadImage('../img/cardNine.png')
    ]
}
// Canvas
function setup() {
    createCanvas(1600, 1200);
    background(0, 0, 0, 0);
    let selectedFaces = [];
    for (let z = 0; z < 9; z++) {
        const randomIndex = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIndex];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // Stop Repeated Faces
        cardFaceArray.splice(randomIndex, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 6; i++) {
                const faceImage = selectedFaces.pop();
                cards.push(new Card(startingX, startingY, faceImage));
                startingX += 200;
                }
                startingX = 225;
                startingY += 240;
            }
            startingX = 225;
            startingY = 650;
        }
// Draw Loop --- Cards
function draw() {
    if (gameState.numMatched === gameState.totalPairs) {
        fill ('lime');
        textSize(64);
        text('YOU WIN!!!', 800, 1190);
        noLoop();
    }
    for (let a = 0; a < cards.length; a++) {
        if (!cards[a].isMatch) {
            cards[a].face = DOWN;
        }
        cards[a].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('olivedrab');
    stroke('white');
    strokeWeight(5)
    rect(400, 875, 800, 130);
    fill ('white');
    noStroke();
    textAlign(CENTER);
    textSize(36);
    text('attempts:  ' + gameState.attempts, width / 2, 930);
    text('matches:  ' + gameState.numMatched, width / 2, 970);
}
// MousePressed Loop -- First check for # flipped cards, then for a hit to trigger flip
function mousePressed() {
    if (gameState.waiting) {
        return
    }
    for (let k = 0; k < cards.length; k++) {
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    //matching and scoring - if = matched, else = not matched/Time out
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        //match
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0;
            gameState.numMatched++;
            loop();
        //no match with timeout
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
             loop();
             window.clearTimeout(loopTimeout);   
            }, 1000)
        }    
    }    
}

// Class
class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.w = boxWidth;
        this.h = boxHeight;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();

    }
    show() {
        if (this.face === UP || this.isMatch) {
        fill('green');
        rect(this.x, this.y, this.w, this.h);
        image(this.cardFaceImg,this.x, this.y, this.w, this.h)  
    } else {
        fill('white');
        rect(this.x, this.y, this.w, this.h);
        image(cardBack,this.x, this.y, this.w, this.h)  
        }
    }
    didHit(mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y+ this.h) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip() {
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
// Shuffle Cards
function shuffleArray (cardFaceArray) {
        let counter = cardFaceArray.length;
        while (counter > 0) {
            // Random Index
            const idx = Math.floor(Math.random() * counter);
            // decrement counter
            counter--;
            // Swap Element with the last element in array
            const temp = cardFaceArray[counter];
            cardFaceArray[counter] = cardFaceArray[idx];
            cardFaceArray[idx] = temp;
        }
        return cardFaceArray;
    }