//The class for the credits
class Credits extends Universal {
  constructor(w, h, x, y, creditsImage) {
    //Same parameters as the universal class
    super(w, h, x);

    //Unique Y position
    this.y = y;
    //Add velocity so it scrolls up along the y-axis
    this.vy = -1;

    //Background color
    this.bgColor = 0;

    //Image
    this.creditsImage = creditsImage;

    //Constraints
    this.minConstraint = 500;
    this.maxConstraint = 2500;
  }

  //Display the credits
  display() {
    //Add constraint so it doesn't go off screen
    this.yMax = constrain(this.y, this.minConstraint, this.maxConstraint);

    //Set the background
    background(this.bgColor);

    push();
    imageMode(CENTER);
    image(this.creditsImage, this.x, this.yMax, this.width, this.height);
    pop();
  }

  //Credits roll from bottom up
  rollUp() {
    this.y = this.y += this.vy;
  }
}
