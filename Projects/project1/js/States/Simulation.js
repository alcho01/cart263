//This is the main simulation which occurs right after the title screen
class Simulation {
  constructor(w, h) {
    //Position
    this.x = 400;
    this.y = 500;

    //Dimensions
    this.width = w;
    this.height = h;

    //Fill black
    this.black = 0;
  }

  //Display the black rectangle
  display() {
    push();
    rectMode(CENTER);
    fill(this.black);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
