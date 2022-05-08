function setup() {
    createCanvas(windowWidth, 800);
    background(50);
}

function draw() {
    for (var i = 100; i <= 100; i++) {
        for (var j = 100; j <= 100; j ++) {
            stroke('#E0707C');
            noFill();
            strokeWeight(.5);
            line(i, j, mouseX, mouseY);
        }
    }
}

