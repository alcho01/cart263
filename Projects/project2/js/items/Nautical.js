//Class containing the nautical object
class Nautical {
  constructor() {
    //dimensions
    this.width = 1300;
    this.height = 600;

    //position
    this.x = 648;
    this.y = 370;

    //images
    this.nauticalImage = nauticalImage;
    this.nauticalImageHov = nauticalImageHov;

    //constraints
    this.nauticalConstraints = {
      x: 124,
      x2: 302,
      y: 370,
      y2: 615,
    };
  }

  //Display the nautical without the hover
  display() {
    push();
    imageMode(CENTER);
    image(this.nauticalImage, this.x, this.y, this.width, this.height);
    pop();

    //Display this if possible
    this.checkHover();
  }

  //Display the hovered image
  displayHover() {
    push();
    imageMode(CENTER);
    image(this.nauticalImageHov, this.x, this.y, this.width, this.height);
    pop();
  }

  //Check if the mouse is hovered over the nautical
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.nauticalConstraints.x && mouseX < this.nauticalConstraints.x2){
      if (mouseY > this.nauticalConstraints.y && mouseY < this.nauticalConstraints.y2) {
        //If it is display the hovered image
        this.displayHover();
      }
    }
  }

  //Check to see if the nautical is clicked on
  mouseClicked() {
    //Check to see if it is within these constraints
    if (mouseX > this.nauticalConstraints.x && mouseX < this.nauticalConstraints.x2){
      if (mouseY > this.nauticalConstraints.y && mouseY < this.nauticalConstraints.y2) {
        //Change states when clicked
        //state = new Detector;
      }
    }
  }
}
