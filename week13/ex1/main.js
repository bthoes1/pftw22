var pos;

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
  
    pos = 0.0;
    inc = 1.0;
  
    pos2 = 0.0;
    inc2 = 1.5;
  
    pos3 = 1.0;
    inc3 = 2.0;
  
    pos4 = 1.0
    inc4 = 3.0;
}

function draw() {
    clear();
    stroke('beige');
    background(0);
    translate(width/2, height/2);

    var mySinVal = sin(pos * 2);
    var mySinVal2 = sin(pos2 / 2);
    var mySinVal3 = sin(pos3 * 2);
    var mySinVal4 = sin(pos4 / 2);

    amplified = mySinVal * 100;
    amplified2 = mySinVal2 * 200;
    amplified3 = mySinVal3 * 50;
    amplified4 = mySinVal4 * 75;

    // shape 1
    for (x = 0; x <= 360; x = x + 1) {
        curve(amplified, amplified2, amplified, amplified2, amplified, amplified2, amplified2, 0);
        rotate(x * mySinVal);   
    }

    // shape 2
    for (x = 0; x <= 360; x = x + 1) {
            curve(amplified3, amplified4, amplified3, amplified4, amplified3, amplified4, amplified4, 0);
            rotate(x * mySinVal3);   
    }

    pos = pos + inc;
    pos2 = pos2 + inc2;
    pos3 = pos3 + inc3;
    pos4 = pos4 + inc4;
}