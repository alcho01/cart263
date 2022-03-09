//The home location
//Display the interior home images.
class Home extends State {
  constructor(w, h, x, y) {
    //Extend from the state class
    super(w, h, x, y);
    //Images
    this.home1Image = home1Image;
    this.home2Image = home2Image;
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
      image(this.home1Image, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 15 / 2) {
      image(this.home2Image, this.x, this.y, this.width, this.height);
    }
    pop();
    //Call the heartbox display to actually be able to display it
    heartBox.display();
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Get the heartBox mouse clicked to enable the required state
    heartBox.mouseClicked();
  }
}
