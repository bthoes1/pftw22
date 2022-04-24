var total = 5;
var l = 100;
a = 0;
randomNum = Math.random(0,45);

let windSpeed;
let noisePos = 0;
let windInc = 0.01;


function setup() {
  createCanvas(750, 750);
  background(0);
}

function iter(l) {
    translate(l / 2, -l)
    if (l > total) {
      push()
      rotate(45 / randomNum)
      fill(255)
      noStroke()
      iter(l / sqrt(2))
      pop()
      push()
      rotate(135 / randomNum)
      fill(255) 
      iter2(l / sqrt(2))
      pop()
      push()
      rotate(-45 / randomNum)
      fill(255)
      noStroke()
      iter3(l / sqrt(2))
      pop()
    }
  }

  function iter2(l) {
    square(0, 0, l)
    fill(255)
    noStroke()
    triangle(-l/2,l/2,l/2,3*l/2,l/2,+l/2)
    translate(-l / 2, -l)
    if (l > total) {
      push()
      rotate(-randomNum)
      fill(255)
      noStroke()
      iter2(l / sqrt(2))
      pop()
      push()
      rotate(randomNum)
      fill(255)
      iter(l / sqrt(2))
      pop()
    }
  }

  function iter3(l) {
    square(0, 0, l)
    fill(255)
    noStroke()
    triangle(-l,l,l,l,l,l)
    translate(-l / 2, -l)
    if (l > total) {
      push()
      rotate(-randomNum)
      fill(255)
      noStroke()
      iter2(l / sqrt(2))
      pop()
      push()
      rotate(randomNum)
      fill(255)
      iter(l / sqrt(2))
      pop()
    }
  }

function tree(l,a,b) {
  push()
  rect(0,l/2,l/4,l*4)
  translate(b*1/8, -l)
  if (l > total) {
    push()
    rotate(a)
    iter(l / sqrt(2))
    pop()
    push()
    rotate(a)
    iter2(l / sqrt(2))
    pop()
}
  pop()
}

function draw() {
    rectMode(CENTER)
    angleMode(DEGREES)
    translate(width/2, height - (l * 2))

    rotate(radians(windSpeed));

    fill(255)
    noStroke()
    if(l>total){
        tree(l,45,1)
        tree(l,-45,-1)
    }
    windSpeed = noise(noisePos) * 30;
    noisePos += windInc;
  }



