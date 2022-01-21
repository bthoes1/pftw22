const circle = window.prompt("Enter a number between 1 and 400");

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(100, 240, 180);
}

function draw() {
  if (mouseIsPressed) {
    fill(93, 62, 245);
    blendMode(BURN);
    stroke(100, 240, 180);
  } else {
    fill(100, 240, 180);
    stroke(93, 62, 245);
    blendMode(MULTIPLY);
  }
  ellipse(mouseX, mouseY, circle);
}