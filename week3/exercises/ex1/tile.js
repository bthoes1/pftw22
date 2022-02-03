function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    fill('#2C4D61');
    rect(0, 0, 200, 200);
    stroke('#33636E');
    strokeWeight(25);
    line(0, 37.5, 200, 37.5);
    line(0, 87.5, 200, 87.5);
    line(0, 137.5, 200, 137.5);
    line(0, 187.5, 200, 187.5);
    fill('#FFDFDA');
    noStroke();
    circle(100, 100, 75);
    circle(100, 25, 25);
    circle(100, 175, 25);
    circle(25, 100, 25);
    circle(175, 100, 25);
}

function draw() {
    createTile();
}