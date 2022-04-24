let stars = [];
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 500; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  background(r, g, b);
  for (var j = 0; j < stars.length; j++) {
    stars[j].draw();
  }

  // change background color based on left-right mouse position
  r = 0;
  g = map(mouseX, 0, windowWidth, 0, 50);
  b = map(mouseX, 0, windowWidth, 0, 100);
}

// characteristics of each new Star
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 2); // min size 1 px, max 2px
    this.t = random(2, 10); // between 2 and 10 seconds
    fill(200);
    noStroke();
  }

  draw() {
    this.t += 0.05;
    var scale = this.size + sin(this.t) * 3; // 3 multiplier makes stars more visible
    ellipse(this.x, this.y, scale, scale * 1.5); // 1.5 multiplier makes stars slightly taller
    
  }
}