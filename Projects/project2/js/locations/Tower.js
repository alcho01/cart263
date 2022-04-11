//This is the location for the tower
class Tower extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Images
    this.tower1Image = tower1Image;
    this.tower2Image = tower2Image;
  }

  //Display the images
  display() {
    //Call the super state
    super.display();
    //Display the sequence
    push();
    imageMode(CENTER);
    //Use frame count to animate the background
    if (frameCount % 65 < 15 / 2) {
      image(this.tower1Image, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 15 / 2) {
      image(this.tower2Image, this.x, this.y, this.width, this.height);
    }
    pop();

    //Display the toolbar
    toolBar.display();
    //Display the nautical item
    nautical.display();
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Get the toolbar mouse clicked
    toolBar.mouseClicked();
    //Get the nautical mouse mouse clicked
    nautical.mouseClicked();
  }
}
