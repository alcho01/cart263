//Class for the controls
//Display the controls
//Key pressed event
class Instructions extends Universal {
  constructor(w, h, x, y, instructionsImage) {
    //extended from the universal class
    super(w, h, x, y);

    //Image
    this.instructionsImage = instructionsImage;
  }

  //Display the Instructions
  display() {
    push();
    imageMode(CENTER);
    image(this.instructionsImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Key pressed functionality
  keyPressed() {
    state = 'Outside';
    //Sound Settings
    titleTheme.stop();
    windSFX.play();
    windSFX.loop();
  }
}
