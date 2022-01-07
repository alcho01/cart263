//Class that contains all the diamond properties
class Diamond extends Gem {
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
    this.growth = 0.5;
    this.width = 150;
    this.height = 150;
  }

  update() {
    this.display();

    if (this.found) {
      this.angle += this.rotationSpeed;
      this.width += this.growth;
      this.height += this.growth;
    }
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  mousePressed() {
    if (!this.found && this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
