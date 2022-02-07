// flashing lights warning
const warning = window.alert('Please be aware that the following contains rapidly changing colors in a strobe effect.');
console.log(warning);

// starting value declarations
let rotateBy = 50;
let originX = 150;
let originY = 150;
let lineWeight = 2; // named 'lineWeight' to differentiate from strokeWeight
let r, g, b;

function setup() {
    createCanvas(600, 600);
    background('black');
    angleMode(DEGREES);
    r = random(255);
    g = random(255);
    b = random(255);
}

function makeArm(rotateBy, originX, lineWeight) {
    let alt= Math.round(rotateBy / 360);
    console.log(alt);
    // ellipse properties
    noFill();
    stroke(r, g, b);
    strokeWeight(lineWeight);
    ellipse(originX / alt, originY - alt, 150 / alt, 10 + alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy, originX, lineWeight);
    
    // speciifc changes to each arm
    rotateBy += 20; // adds 20 degrees
    originX -= 10; // subtracts 10px
    lineWeight -= .001; // subtracts .001 px
    r = random(255); // selects random r value
    g = random(255); // selects random g value
    b = random(255); // selects random b value
}

function mousePressed() {
    noLoop();
}