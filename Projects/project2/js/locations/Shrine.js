//This is the location for the shrine
class Shrine extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Images
    this.shrine1Image = shrine1Image;
    this.shrine2Image = shrine2Image;
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
      image(this.shrine1Image, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 15 / 2) {
      image(this.shrine2Image, this.x, this.y, this.width, this.height);
    }
    pop();

    //Display the toolbar
    toolBar.display();
    //Display the podium item
    podium.display();
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Get the toolbar mouse clicked
    toolBar.mouseClicked();
  }
}
