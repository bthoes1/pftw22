let gameRules = window.alert('See how many times you can click the maroon rectangle before it disappears. Be sure your console log is open!');

let rectX = 0;
let rectWidth = 100;
let clickCount = 0;

function setup () {
    createCanvas(500, 500);
    background('lightblue');
}
// draw rectangle
function drawShape () {
    fill('maroon');
    rect(rectX, 0, rectWidth, 100);
    noStroke();
}

// make rectangle move left to right across canvas
function draw () {
    background('lightblue');
    drawShape();
    rectX++;

    // stop loop + display final score
    if(rectX > width) {
        noLoop();
        text('You got ' + clickCount + ' clicks.', 215, 250);
    }
}

// make the rectangle clickable + count the clicks
function mousePressed () {
    if ((mouseX >= rectX && mouseX <= (rectX + rectWidth)) && (mouseY >= 0 && mouseY <= 100)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}


