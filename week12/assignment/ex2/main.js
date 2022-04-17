// declarations
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var button8;
var button9;

function setup() {
    createCanvas(425, 500);

    // Create buttons for each note + load sound:
    
    // G
    button1 = createButton("G");
    button1.mousePressed(togglePlay1);
    button1.position(225, 375);
    button1.size(50,50);
    button1.style('border-radius', '50px');
    button1.style('fill', 'red');
    sound1 = loadSound("assets/sax-g.mp3");

    // A
    button2 = createButton("A");
    button2.mousePressed(togglePlay2);
    button2.position(225, 300);
    button2.size(50,50);
    button2.style('border-radius', '50px');
    sound2 = loadSound("assets/sax-a.mp3");

    // B
    button3 = createButton("B");
    button3.mousePressed(togglePlay3);
    button3.position(225, 225);
    button3.size(50,50);
    button3.style('border-radius', '50px');
    sound3 = loadSound("assets/sax-b.mp3");

    // C
    button4 = createButton("C");
    button4.mousePressed(togglePlay4);
    button4.position(275, 300);
    button4.size(50,50);
    button4.style('border-radius', '50px');
    sound4 = loadSound("assets/sax-c.mp3");

    // D
    button5 = createButton("D");
    button5.mousePressed(togglePlay5);
    button5.position(175, 600);
    button5.size(50,50);
    button5.style('border-radius', '50px');
    sound5 = loadSound("assets/sax-d.mp3");

    // E
    button6 = createButton("E");
    button6.mousePressed(togglePlay6);
    button6.position(175, 525);
    button6.size(50,50);
    button6.style('border-radius', '50px');
    sound6 = loadSound("assets/sax-e.mp3");

    // F
    button7 = createButton("F");
    button7.mousePressed(togglePlay7);
    button7.position(175, 450);
    button7.size(50,50);
    button7.style('border-radius', '50px');
    sound7 = loadSound("assets/sax-f-nat.mp3");

    // F#
    button8 = createButton("F#");
    button8.mousePressed(togglePlay8);
    button8.position(125, 525);
    button8.size(50,50);
    button8.style('border-radius', '50px');
    sound8 = loadSound("assets/sax-f.mp3");

    // G
    button9 = createButton("High G");
    button9.mousePressed(togglePlay9);
    button9.position(275, 375);
    button9.size(50,50);
    button9.style('border-radius', '50px');
    sound9 = loadSound("assets/sax-g-high.mp3");
    
    // visualization
    fft = new p5.FFT();
    reverb = new p5.Reverb();
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

// F
function togglePlay7() {
    sound7.play();
}

// F-sharp
function togglePlay8() {
    sound8.play();
}

// G
function togglePlay9() {
    sound9.play();
}

// visualizer
function draw() {
    background(0);
    let spectrum = fft.analyze();
    noStroke();
    fill(0,0,255);
    for (let i = 0; i< spectrum.length; i++) {
        let x = map(i, 0, spectrum[i], 0, width);
        let h = -height + map(spectrum[i], 0, 100, height, 0);
        rect(x, height, width / spectrum.length, h)
    }
}