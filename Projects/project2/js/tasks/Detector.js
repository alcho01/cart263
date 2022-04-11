//This is the fourth and final task - detector
class Detector extends State {
  constructor(w, h, x, y) {
    super(w, h, x, y);
  }

  //Display everything
  display() {
    super.display();

    background(0);
  }

  mouseClicked() {
    super.mouseClicked();
  }

  keyPressed() {
    super.keyPressed();

    //If the escape key is pressed...
    if (keyCode === 27) {
      //Return to the tower state
      state = new Tower(1280, 720, 640, 360);
    }
  }
}
