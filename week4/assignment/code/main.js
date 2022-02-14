const rectWidth = 200;
let startingX = 25;
const rectHeight = 200;
let startingY = 25;
let myCards = [];
let startingId = 0;

function setup () {
    createCanvas(1100, 750);
    background('#323232');
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 4; i++) {
            fill(0);
            rect(startingX, startingY, rectWidth, rectHeight);
            myCards.push({ x: startingX, y: startingY, id: startingId });
            startingX += 225;
            startingId++;
        }
        startingY += 225;
        startingX = 25;
    }  
    console.log(myCards);
}

function mousePressed() {
    for (let j = 0; j < myCards.length; j++) {
        if (mouseX > startingX && mouseX < startingX + rectWidth && mouseY > startingY && mouseY < startingY + rectHeight) {
            console.log('tile hit', myCards[j].id);
        }
    }
}