//This is to display passage #5
//Display the passage
//Add a key pressed event to exit from the passage
class Passage5 extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Image
    this.passageImage5 = passageImage5;
  }

  //Display the passage
  display() {
    //Call the super display
    super.display();

    push();
    imageMode(CENTER);
    image(this.passageImage5, this.x, this.y, this.width, this.height);
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
