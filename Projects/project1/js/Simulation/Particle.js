//This contains the floating particles during the simulation
//Display the particle
//Give it the ability to move
class Particle {
  constructor() {
    //Position
    this.x = random(0, 800);
    this.y = random(0, 1000);

    //Velocities
    this.vx = 0;
    this.vy = 0;

    //speed
    this.speed = random(3, 10);

    //the color
    this.r = 255;
    this.g = 255;
    this.b = 255;

    //map points
    //Lower current range
    this.lowCurrent = 0;
    //Highest current range it can be
    this.maxCurrent = 1;
    //Lower targeted range
    this.lowTarget = 0;
    //Highest targeted range
    this.maxTarget = 80;
  }

  //Display the particles
  display() {
    push();
    noStroke();
    //Get the amplitude level
    let level = amplitude.getLevel();
    //Map how big and small the particles will be
    let size = map(level, this.lowCurrent, this.maxCurrent, this.lowTarget, this.maxTarget);
    //Fill them white
    fill(this.r, this.g, this.b);
    //Add the parameters to a circle to create a single particle
    circle(this.x, this.y, size, size);
    pop();
  }

  //The jitter movement of the particles
  move() {
    //Give the velocities a random speed
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    //Add them to the x and y position for movement
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
}
