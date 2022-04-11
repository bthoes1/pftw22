function setup() {
    createCanvas(600, 600);
    background(50);
}

function draw() {
    for (var i = 200; i <= 600; i += 200) {
            let randomIdx = random(0,600)
            strokeWeight(.05);
            stroke('#E0707C');
            line(0, 0, randomIdx, 600);
            line(600, 600, randomIdx, 0);   
    }
}
