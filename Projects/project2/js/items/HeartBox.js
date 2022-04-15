//This is only to display the heartbox no functionality in this class
//Displays the heartbox when not hovered and when hovered over.
//Add a clickbox to the heartbox.
class HeartBox {
  constructor() {
    //Dimensions
    this.width = 1200;
    this.height = 565;

    //Position
    this.x = 1086;
    this.y = 297;

    //Images
    this.heartBoxImage = heartBoxImage;
    this.heartBoxImageHov = heartBoxImageHov;

    //Constraints
    this.boxConstraints = {
      x: 1015,
      x2: 1143,
      y: 207,
      y2: 307,
    };
  }

  //Display the heartbox
  display() {
    push();
    imageMode(CENTER);
    image(this.heartBoxImage, this.x, this.y, this.width, this.height);
    pop();
    //Display this if possible
    this.checkHover();
  }

  //Display the hovered image
  displayHover() {
    push();
    imageMode(CENTER);
    image(this.heartBoxImageHov, this.x, this.y, this.width, this.height);
    pop();
  }

  //Check if the mouse is hovered over the box
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.boxConstraints.x && mouseX < this.boxConstraints.x2) {
      if (mouseY > this.boxConstraints.y && mouseY < this.boxConstraints.y2) {
        //If it is display the hovered image
        this.displayHover();
      }
    }
  }

  //Check to see if the box is clicked on
  mouseClicked() {
    //Check to see if it is within these constraints
    if (mouseX > this.boxConstraints.x && mouseX < this.boxConstraints.x2) {
      if (mouseY > this.boxConstraints.y && mouseY < this.boxConstraints.y2) {
        //Change states when clicked
        state = new HeartMonitor();
        //Play the heartbox SFX
        heartBoxSFX.play();
      }
    }
  }
}
