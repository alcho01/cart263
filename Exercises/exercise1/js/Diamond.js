//Class that contains all the diamond properties
class Diamond extends Gem {
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
    this.growth = 1;
    this.width = 80;
    this.height = 80;
    this.speed = 5;
  }

  //Perform the action of the diamond
  update() {
    this.display();

    if (this.found) {
      this.angle += this.rotationSpeed;
      this.width += this.growth;
      this.height += this.growth;
    }

    if (this.width > 500) {
      state = "end";
    }
  }

  //Display the diamond
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  //Mouse pressed functionality for the diamond
  mousePressed() {
    if (!this.found && this.overlap(mouseX, mouseY)) {
      this.found = true;
      foundSound.play();
    }
  }
}
