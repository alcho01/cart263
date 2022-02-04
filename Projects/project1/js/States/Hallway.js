//This class contains the hallway scene.
class Hallway extends Universal {
  constructor(w, h, x, y, hallwayImage) {
    //Same parameters as the universal class
    super(w, h, x, y);

    //Image
    this.hallwayImage = hallwayImage;
  }

  //Display the hallway
  display() {
    push();
    imageMode(CENTER);
    image(this.hallwayImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
