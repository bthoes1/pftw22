const DOWN = 'down';
const UP = 'up';
let startingX = 25;
let startingY = 25;
let cards = [];
const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
}
let cardfaceArray = [];
let cardBack;

function preload() {
    cardBack = loadImage('images/cardback.png');
    cardfaceArray = [
        loadImage('images/card1.png'),
        loadImage('images/card2.png'),
        loadImage('images/card3.png'),
        loadImage('images/card4.png'),
        loadImage('images/card5.png'),
        loadImage('images/card6.png'),
    ]
}

function setup () {
    createCanvas(1100, 700);
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove used cardface
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) {
            const cardFaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImg));
            startingX += 225;
        }
        startingY += 225;
        startingX = 25;
    }
}

function draw () {
    background(240);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('blue');
        textSize(18);
        text(' Hey, hey, \n you saved the \n world today!', 950, 500);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(0);
    textSize(18);
    text('attempts ' + gameState.attempts, 950, 350);
    text('matches ' + gameState.numMatched, 950, 400);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
    // checked flipped cards length
    // then trigger flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards  match
            // mark cards as flipped
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty flipped cards array
            gameState.flippedCards.length = 0;
            // increment score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 200;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show () {
        if (this.face === UP || this.isMatch) {
            fill(150);
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            fill(0);
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y);
        }
    }
    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }   
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray(array) {
    let counter = array.length;
    while (counter > 0) {
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}