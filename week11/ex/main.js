function setup() {
    createCanvas(600, 600);
    background('black');
}

let rotateBy = 5;
let originX = 0;

function draw() {
    for (var i = 0; i <= 600; i++) {

        stroke(200);
        line(originX + (i / 2), i, 600, i / 600);
        rotate(rotateBy / i);
        bezier(i, i++);
        
    }
}