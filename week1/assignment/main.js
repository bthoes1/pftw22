let bgColor = prompt("Enter a basic color. Lowercase only!", "green");
let eyeColor = prompt("Enter another basic color. Lowercase only!", "blue");
let gloveColor = prompt("Last one! Lowercase only!", "red");
let tongueColor = prompt("I lied! One more please. Lowercase only!", "red");

let grid = undefined;
function setup() {
    createCanvas(1000, 1000)
    background(bgColor);
}
function draw() {
    // body
    fill(255, 255, 255);
    stroke(0, 0, 0);
    strokeWeight(5);
    // left foot
    ellipse(250, 750, 200);
    // right foot
    ellipse(750, 750, 200);
    // torso
    ellipse(500, 400, 600);
    // left glove
    fill(gloveColor);
    ellipse(125, 375, 200);
    // right glove
    ellipse(875, 375, 200);
    //limbs
    strokeWeight(5);
     // left leg
    line(250, 650, 100, 500);
    line(100, 500, 240, 550);
    // right leg
    line(750, 650, 900, 500);
    line(900, 500, 760, 550);
    // left arm
    line(250, 225, 50, 200);
    line(50, 200, 125, 275);
    // right arm
    line(750, 225, 950, 200);
    line(950, 200, 875, 275);
    //eyebrows
    stroke(0, 0, 0);
    strokeWeight(20);
    //left eyebrow
    line(200, 100, 450, 350);
    // right eyebrow
    line(800, 100, 550, 350);
    // eyes
    fill(eyeColor);
    strokeWeight(10);
    // left eye
    ellipse(400, 325, 25);
    // right eye
    ellipse(600, 325, 25);
    // mouth
    strokeWeight(5);
    line(300, 450, 400, 600);
    line(400, 600, 450, 500);
    line(450, 500, 500, 575);
    line(500, 575, 550, 500);
    // tongue
    fill(tongueColor);
    arc(360, 530, 80, 80, 7.45, PI + QUARTER_PI, OPEN);
    line(328, 554, 355, 533);
}