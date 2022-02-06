let rotateBy = 50;
let originX = 150;
let originY = 150;

function setup() {
    createCanvas(600, 600);
    background('#152238');
    angleMode(DEGREES);
}

function makeArm(rotateBy, originX, originY) {
    let alt= Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke('yellow');
    strokeWeight(1);
    ellipse(originX / alt, originY - alt, 150 / alt, 10 * alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy, originX, originY);
    rotateBy += 20;
    originX += 10;
}

function mousePressed() {
    noLoop();
}