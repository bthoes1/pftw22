function setup() {
    createCanvas(600, 600);
    background(50);
}

function draw() {
    for (var i = 20; i <= 580; i += 20) {
        for (var j = 20; j <= 580; j += 20) {
            stroke('#E0707C');
            noFill();
            ellipse (i, j, 80, 80);
        }
    }
}
