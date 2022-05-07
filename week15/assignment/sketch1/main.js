let slider1;
let slider2;
var inc = .005;

function setup() {
    createCanvas(800,800);
    slider1 = createSlider(0,0.025,0.0025,0.000001);
    slider1.position(50, 900);
    slider1.style('width', '800px');

    slider2 = createSlider(0,0.025,0.0025,0.000001);
    slider2.position(475, 475);
    slider2.style('width', '800px');
    slider2.style('transform', 'rotate(90deg)');
}

function draw() {
    var val1 = slider1.value();
    var val2 = slider2.value();
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
            xoff += val1;
        }
        yoff += val2;
    }
    updatePixels();
}