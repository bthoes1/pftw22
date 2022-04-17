var song;
var button;

function setup() {
    createCanvas(1000, 600);
    song = loadSound("assets/song.mp3", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    fft = new p5.FFT();
}

function loaded() {
    console.log("loaded");
}

function togglePlaying() {
    song.play();
}

function draw(){
    background(0);
    let spectrum = fft.analyze();
    noStroke();
    fill(0, 0, 255);
    for (let i = 0; i< spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h)
    }
}