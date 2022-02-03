function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, primaryColor, secondaryColor, circleColor) {
    translate(originX, originY);
    fill(primaryColor);
    stroke('white');
    strokeWeight(2);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(25);
    strokeCap(SQUARE);
    line(25, 50, 175, 50);
    line(25, 100, 175, 100);
    line(25, 150, 175, 150);
    fill(circleColor);
    noStroke();
    circle(100, 100, 75);
    circle(100, 25, 25);
    circle(100, 175, 25);
    circle(25, 100, 25);
    circle(175, 100, 25);
}

function draw() {
    createTile(0, 0, '#2C4D61', '#33636E', '#FFDFDA'); 
    createTile(0, 200, '#33636E', '#FFDFDA', '#98C5D4');
    createTile(0, 200, '#FFDFDA', '#98C5D4', '#2C4D61');
    createTile(200, -400, '#98C5D4', '#2C4D61', '#33636E');
    createTile(0, 200, '#2C4D61', '#33636E', '#FFDFDA');
    createTile(0, 200, '#33636E', '#FFDFDA', '#98C5D4');
    createTile(200, -400, '#FFDFDA', '#98C5D4', '#2C4D61');
    createTile(0, 200, '#98C5D4', '#2C4D61', '#33636E');
    createTile(0, 200, '#2C4D61', '#33636E', '#FFDFDA');
}

// teal #2C4D61
// light teal #33636E
// light blue #98C5D4
// light pink #FFDFDA
