//Display the scoreboard - scoreboard settings
class ScoreDisplay {
  constructor() {
    //Position
    this.x = 500;
    this.y = 263;

    //Text Info
    this.size = 35;
    this.r = 247;
    this.g = 208;
    this.b = 146;
  }

  //Display the score
  display() {
    push();
    textAlign(CENTER);
    fill(this.r, this.g, this.b);
    textSize(this.size);
    text(score, this.x, this.y);
    pop();
  }
}
