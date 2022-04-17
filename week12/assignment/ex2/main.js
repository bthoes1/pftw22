// declarations
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;

function setup() {
    createCanvas(1375, 600);

    
    // Create buttons for each note + load sound:
    
    // G
    button1 = createButton("G");
    button1.mousePressed(togglePlay1);
    button1.position(200, 200);
    button1.size(100,100);
    sound1 = loadSound("assets/sax-g.mp3");

    // A
    button2 = createButton("A", sound2);
    button2.mousePressed(togglePlay2);
    button2.position(325, 200);
    button2.size(100,100);
    sound2 = loadSound("assets/sax-a.mp3");

    // B
    button3 = createButton("B", sound3);
    button3.mousePressed(togglePlay3);
    button3.position(450, 200);
    button3.size(100,100);
    sound3 = loadSound("assets/sax-b.mp3");

    // C
    button4 = createButton("C", sound4);
    button4.mousePressed(togglePlay4);
    button4.position(575, 200);
    button4.size(100,100);
    sound4 = loadSound("assets/sax-c.mp3");

    // D
     button5 = createButton("D", sound5);
     button5.mousePressed(togglePlay5);
     button5.position(700, 200);
     button5.size(100,100);
     sound5 = loadSound("assets/sax-d.mp3");

    // E
    button6 = createButton("E", sound6);
    button6.mousePressed(togglePlay6);
    button6.position(825, 200);
    button6.size(100,100);
    sound6 = loadSound("assets/sax-e.mp3");

    // F
    button7 = createButton("F#", sound7);
    button7.mousePressed(togglePlay7);
    button7.position(950, 200);
    button7.size(100,100);
    sound7 = loadSound("assets/sax-f.mp3");

    // G
    button8 = createButton("G", sound8);
    button8.mousePressed(togglePlay8);
    button8.position(1075, 200);
    button8.size(100,100);
    sound8 = loadSound("assets/sax-g-high.mp3");
    
    // visualization
    fft = new p5.FFT();
}

// Play each note on button click:

// G
function togglePlay1() {
    sound1.play();
}

// A
function togglePlay2() {
    sound2.play();
}

// B
function togglePlay3() {
    sound3.play();
}

// C
function togglePlay4() {
    sound4.play();
}

// D
function togglePlay5() {
    sound5.play();
}

// E
function togglePlay6() {
    sound6.play();
}

// F-sharp
function togglePlay7() {
    sound7.play();
}

// G
function togglePlay8() {
    sound8.play();
}

// visualizer
function draw() {
    background(0);
    let spectrum = fft.analyze();
    noStroke();
    fill(0,0,255);
    for (let i = 0; i< spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h = -height + map(spectrum[i], 0, 255, height, 0);
        rect(x, height, width / spectrum.length, h)
    }
}