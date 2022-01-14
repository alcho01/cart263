//Displaying the end screen
class EndScreen {
  constructor() {
    //Position
    this.x = 500;
    this.y = 400;

    //text size
    this.size = 35;

    //fill white
    this.white = 255;

  }

  display() {
    push();
    textAlign(CENTER);
    fill(this.white);
    textSize(this.size);
    text('THANKS FOR PLAYING', this.x, this.y);
    pop();
  }
}
