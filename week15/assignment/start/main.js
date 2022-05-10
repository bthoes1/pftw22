var swarm = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i <2000; i++) {
        swarm[i] = new Particle();
    }
}

function draw() {
    background(0);
    for (var i = 0; i < swarm.length; i++) {
        swarm[i].update();
        swarm[i].display();
    }
}

function Particle() {
    this.position = new createVector(width/2, height/2);
    this.velocity = new createVector();
    this.acceleration = new createVector();
    this.topspeed = 20;

  this.update = function() {
    var point = createVector(random(width),random(height));
    this.acceleration = p5.Vector.sub(point,this.position);
    this.acceleration.setMag(0.01);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  };
  
  this.display = function() {
    noFill();
    stroke(255,112,124);
    strokeWeight(.2);
    ellipse(this.position.x, this.position.y,10,10);
  };
}