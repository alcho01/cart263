//This is the pieces of paper scattered around the locations
class Paper {
  constructor() {

    //Paper to bag parameters
    this.paperToBag = {
      x: 430,
      y: 276,
      width: 1200,
      height: 800,
    };
    //Slot 2 of the bag
    this.paperToBag2 = {
      x: 430,
      y: 410,
      width: 1200,
      height: 800,
    };

    //paper 1 parameters
    this.paper1 = {
      x: 694,
      y: 384,
      width: 1250,
      height: 850,
      hide: false,
    };

    //paper 2 parameters
    this.paper2 = {
      x: 895,
      y: 301,
      width: 1250,
      height: 850,
      hide: false,
    };

    //paper 1 constraints
    this.paper1Constraints = {
      x: 670,
      x2: 710,
      y: 256,
      y2: 318,
    };

    //paper 2 constraints
    this.paper2Constraints = {
      x: 870,
      x2: 909,
      y: 173,
      y2: 234,
    };

    //Images
    this.paperImage = paperImage;
    this.paperImageHov = paperImageHov;
  }

  //Display that allows it to be used in the bag class
  displayInBag() {
    push();
    imageMode(CENTER);
    image(this.paperImage, this.paperToBag.x, this.paperToBag.y, this.paperToBag.width, this.paperToBag.height);
    pop();
  }
  //Display a paper in slot 2
  displayInBag2() {
    push();
    imageMode(CENTER);
    image(this.paperImage, this.paperToBag2.x, this.paperToBag2.y, this.paperToBag2.width, this.paperToBag2.height);
    pop();
  }

  //Display paper 1
  displayPaper1() {
    //If the paper is not hidden show it
    if (this.paper1.hide === false) {
      push();
      imageMode(CENTER);
      image(this.paperImage, this.paper1.x, this.paper1.y, this.paper1.width, this.paper1.height);
      pop();
      //Display this if possible
      this.checkHover();
    }
  }

  //Display paper 1 hover
  displayPaper1Hover() {
    push();
    imageMode(CENTER);
    image(this.paperImageHov, this.paper1.x, this.paper1.y, this.paper1.width, this.paper1.height);
    pop();
  }

  //Display paper 2
  displayPaper2() {
    //If the paper is not hidden show it
    if (this.paper2.hide === false) {
      push();
      imageMode(CENTER);
      image(this.paperImage, this.paper2.x, this.paper2.y, this.paper2.width, this.paper2.height);
      pop();
      //Display this if possible
      this.checkHover();
    }
  }

  //Display paper 2 hover
  displayPaper2Hover() {
    push();
    imageMode(CENTER);
    image(this.paperImageHov, this.paper2.x, this.paper2.y, this.paper2.width, this.paper2.height);
    pop();
  }

  //Check if the mouse is hovered over the paper 1
  checkHover() {
    //Check to see if the user is on the home location
    if (locationHome === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper1Constraints.x && mouseX < this.paper1Constraints.x2) {
        if (mouseY > this.paper1Constraints.y && mouseY < this.paper1Constraints.y2) {
          //If it is display the hovered image
          this.displayPaper1Hover();
        }
      }
    }
    //Check to see if the user is on the lab location
    if (locationLab === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper2Constraints.x && mouseX < this.paper2Constraints.x2) {
        if (mouseY > this.paper2Constraints.y && mouseY < this.paper2Constraints.y2) {
          //If it is display the hovered image
          this.displayPaper2Hover();
        }
      }
    }
  }

  //Check to see if the paper is clicked on
  mouseClicked() {
    //Check to see if the user is on the home location
    if (locationHome === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper1Constraints.x && mouseX < this.paper1Constraints.x2) {
        if (mouseY > this.paper1Constraints.y && mouseY < this.paper1Constraints.y2) {
          //If the paper is clicked hide it
          this.paper1.hide = true;
        }
      }
    }
    //Check to see if the user is on the lab location
    if (locationLab === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper2Constraints.x && mouseX < this.paper2Constraints.x2) {
        if (mouseY > this.paper2Constraints.y && mouseY < this.paper2Constraints.y2) {
          //If the paper is clicked hide it
          this.paper2.hide = true;
        }
      }
    }
  }
}
