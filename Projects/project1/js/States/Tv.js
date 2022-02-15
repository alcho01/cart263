//Class For the tv title screen
class Tv extends Universal {
  constructor(w, h, x, y, tvImage) {
    //Same parameters as the universal class
    super(w, h, x, y);

    //Image
    this.tvImage = tvImage;
  }

  //Display the tv
  display() {
    push();
    imageMode(CENTER);
    image(this.tvImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
