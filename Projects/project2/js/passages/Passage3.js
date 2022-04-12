//This is the third passage found
class Passage3 extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //Images
    this.passageImage3 = passageImage3;
  }

  //Display the passage
  display() {
    //Call the super display
    super.display();

    push();
    imageMode(CENTER);
    image(this.passageImage3, this.x, this.y, this.width, this.height);
    pop();
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //if the escape key is pressed...
    if (keyCode === 27) {
      //return to the bag state
      state = new Bag(1280, 720, 640, 360);
    }
  }
}
