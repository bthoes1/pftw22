function setup() {
    createCanvas(600, 600);
    background(50);
}

function draw() {
    for (var i = 200; i <= 400; i += 200) {
        for (var j = 200; j <= 400; j += 100) {
            stroke('#E0707C');
            strokeWeight(.1);
            line(i + 5, j, mouseX, mouseY);
        }
    }
}