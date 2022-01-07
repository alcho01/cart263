//Class that contains all the gem properties
class Gem {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.width = 150;
    this.height = 150;
    this.image = image;
    this.angle = 0;
  }

  update() {
    this.display();
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  overlap(x, y) {
    if (
      x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
