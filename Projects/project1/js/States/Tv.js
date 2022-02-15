//Class For the tv title screen
class Tv extends Universal {
  constructor(w, h, x, y, tvImage) {
    //Same parameters as the universal class
    super(w, h, x, y);

    //Image
    this.tvImage = tvImage;

    //tv play button Constraints
    this.button = {
      x: 663,
      x2: 773,
      y: 350,
      y2: 460,
    };
  }

  //Display the tv
  display() {
    push();
    imageMode(CENTER);
    image(this.tvImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //mouse clicked functionality
  mouseClicked() {
    //Calculate the tv's play button position
    if (mouseX > this.button.x && mouseX < this.button.x2) {
      if (mouseY > this.button.y && mouseY < this.button.y2) {
        //Change state to the coagula
        state = "Coagula";
        //Play the narration voice
        narrationSFX.play();
      }
    }
  }
}
