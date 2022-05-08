function setup() {
    createCanvas(windowWidth, 800);
}

function draw() {
    var yoff = 0;
    loadPixels();
    for (var y = 0; y < height; y++) {
        var xoff = 0;
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index + 0] = noise(xoff, yoff) * 224;
            pixels[index + 1] = noise(xoff, yoff) * 112;
            pixels[index + 2] = noise(xoff, yoff) * 124;
            pixels[index + 3] = 255;
            xoff += mouseX / 100000;
        }
        yoff += mouseY / 100000;
    }
    updatePixels();
}