//Class that contains all the diamond properties
class Diamond extends Gem {
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
  }

  update() {
    super.update();
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    if (!this.found && this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}
