//Class containing the podium object
class Podium {
  constructor() {
    //dimensions
    this.width = 1415;
    this.height = 780;

    //position
    this.x = 608;
    this.y = 355;

    //images
    this.podiumImage = podiumImage;
    this.podiumImageHov = podiumImageHov;

    //constraints
    this.podiumConstraints = {
      x: 889,
      x2: 972,
      y: 320,
      y2: 428,
    };
  }

  //Display the podium without the hover
  display() {
    push();
    imageMode(CENTER);
    image(this.podiumImage, this.x, this.y, this.width, this.height);
    pop();

    //Display this if possible
    this.checkHover();
  }

  //Display the hovered image
  displayHover() {
    push();
    imageMode(CENTER);
    image(this.podiumImageHov, this.x, this.y, this.width, this.height);
    pop();
  }

  //Check if the mouse is hovered over the podium
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.podiumConstraints.x && mouseX < this.podiumConstraints.x2){
      if (mouseY > this.podiumConstraints.y && mouseY < this.podiumConstraints.y2) {
        //If it is display the hovered image
        this.displayHover();
      }
    }
  }

  //Check to see if the podium is clicked on
  mouseClicked() {
    //Check to see if it is within these constraints
    if (mouseX > this.podiumConstraints.x && mouseX < this.podiumConstraints.x2){
      if (mouseY > this.podiumConstraints.y && mouseY < this.podiumConstraints.y2) {
        //Change states when clicked to the confession task
        state = new Confession;
      }
    }
  }
}
