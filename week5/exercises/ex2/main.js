let bubble = [];


function setup() {
    createCanvas(500, 500);
    for(let i = 0; i <= 100; i++) {
        bubble[i] = new Bubble();
    }
}

function draw() {
    background(0);
    for(let i = 0; i <= 100; i++) {
        bubble[i].show();
        bubble[i].move();
    }
}

class Bubble {
    constructor() {
        this.x = 250;
        this.y = 250;
    }
    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }
    show () {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, 100, 100);
    }
}