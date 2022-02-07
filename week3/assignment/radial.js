// flashing lights warning
const warning = window.alert('Please be aware that the following contains rapidly changing colors in a strobe effect.');
console.log(warning);

// starting value directions
let rotateBy = 50;
let originX = 150;
let originY = 150;
let r, g, b;
let lineWeight = 2;

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
    rotateBy += 20; // adds 20 to rotation value for each new ellipse
    originX -= 10; // subtracts 10 from originX value of each new ellipse
    lineWeight -= .001; // descreases stroke weight of each new ellipse
    r = random(255);
    g = random(255);
    b = random(255);
}

function mousePressed() {
    noLoop();
}