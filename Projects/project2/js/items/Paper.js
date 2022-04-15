//This is the pieces of paper scattered around the locations
//
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
    //Slot 3 of the bag
    this.paperToBag3 = {
      x: 430,
      y: 550,
      width: 1200,
      height: 800,
    };
    //Slot 4 of the bag
    this.paperToBag4 = {
      x: 630,
      y: 276,
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

    //paper 3 parameters
    this.paper3 = {
      x: 810,
      y: 630,
      width: 1250,
      height: 850,
      hide: false,
    };

    //paper 4 parameters
    this.paper4 = {
      x: 879,
      y: 659,
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
    //paper 3 constraints
    this.paper3Constraints = {
      x: 786,
      x2: 826,
      y: 504,
      y2: 564,
    };
    //paper 4 constraints
    this.paper4Constraints = {
      x: 854,
      x2: 894,
      y: 534,
      y2: 594,
    };

    //Images
    this.paperImage = paperImage;
    this.paperImageHov = paperImageHov;
  }

  //=================DISPLAY THE PAPER IN THE BAG=================\\

  //Display that allows it to be used in the bag class
  displayInBag() {
    push();
    imageMode(CENTER);
    image(this.paperImage, this.paperToBag.x, this.paperToBag.y, this.paperToBag.width, this.paperToBag.height);
    pop();
  }
  //Display a paper in slot 2 of the bag
  displayInBag2() {
    push();
    imageMode(CENTER);
    image(this.paperImage, this.paperToBag2.x, this.paperToBag2.y, this.paperToBag2.width, this.paperToBag2.height);
    pop();
  }
  //Display a paper in slot 3 of the bag
  displayInBag3() {
    push();
    imageMode(CENTER);
    image(this.paperImage, this.paperToBag3.x, this.paperToBag3.y, this.paperToBag3.width, this.paperToBag3.height);
    pop();
  }
  //Display a paper in slot 4 of the bag
  displayInBag4() {
    push();
    imageMode(CENTER);
    image(this.paperImage, this.paperToBag4.x, this.paperToBag4.y, this.paperToBag4.width, this.paperToBag4.height);
    pop();
  }

//=================DISPLAY THE PAPER AND THE HOVER METHOD=================\\

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

  //Display paper 3
  displayPaper3() {
    //If the paper is not hidden show it
    if (this.paper3.hide === false) {
      push();
      imageMode(CENTER);
      image(this.paperImage, this.paper3.x, this.paper3.y, this.paper3.width, this.paper3.height);
      pop();
      //Display this if possible
      this.checkHover();
    }
  }

  //Display paper 3 hover
  displayPaper3Hover() {
    push();
    imageMode(CENTER);
    image(this.paperImageHov, this.paper3.x, this.paper3.y, this.paper3.width, this.paper3.height);
    pop();
  }

  //Display paper 4
  displayPaper4() {
    //If the paper is not hidden show it
    if (this.paper4.hide === false) {
      push();
      imageMode(CENTER);
      image(this.paperImage, this.paper4.x, this.paper4.y, this.paper4.width, this.paper4.height);
      pop();
      //Display this if possible
      this.checkHover();
    }
  }

    //Display paper 4 hover
    displayPaper4Hover() {
      push();
      imageMode(CENTER);
      image(this.paperImageHov, this.paper4.x, this.paper4.y, this.paper4.width, this.paper4.height);
      pop();
    }

//=================FUNCTIONALITY FOR HOVER METHOD=================\\

  //Check if the mouse is hovered over the paper
  checkHover() {
    //Paper 1
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
    //Paper 2
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
    //Paper 3
    //Check to see if the user is on the shrine location
    if (locationShrine === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper3Constraints.x && mouseX < this.paper3Constraints.x2) {
        if (mouseY > this.paper3Constraints.y && mouseY < this.paper3Constraints.y2) {
          //If it is display the hovered image
          this.displayPaper3Hover();
        }
      }
    }
    //Paper 4
    //Check to see if the user is on the tower location
    if (locationTower === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper4Constraints.x && mouseX < this.paper4Constraints.x2) {
        if (mouseY > this.paper4Constraints.y && mouseY < this.paper4Constraints.y2) {
          //If it is display the hovered image
          this.displayPaper4Hover();
        }
      }
    }
  }

//=================FUNCTIONALITY FOR MOUSE CLICKED=================\\

  //Check to see if the paper is clicked on
  mouseClicked() {
    //Check to see if the user is on the home location
    if (locationHome === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper1Constraints.x && mouseX < this.paper1Constraints.x2) {
        if (mouseY > this.paper1Constraints.y && mouseY < this.paper1Constraints.y2) {
          //If the paper is clicked hide it
          this.paper1.hide = true;
          //play the paper sfx sound
          paperSFX.play();
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
          //play the paper sfx sound
          paperSFX.play();
        }
      }
    }
    //Check to see if the user is on the shrine location
    if (locationShrine === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper3Constraints.x && mouseX < this.paper3Constraints.x2) {
        if (mouseY > this.paper3Constraints.y && mouseY < this.paper3Constraints.y2) {
          //If the paper is clicked hide it
          this.paper3.hide = true;
          //play the paper sfx sound
          paperSFX.play();
        }
      }
    }
    //Check to see if the user is on the tower location
    if (locationTower === true) {
      //Check to see if it is within these constraints
      if (mouseX > this.paper4Constraints.x && mouseX < this.paper4Constraints.x2) {
        if (mouseY > this.paper4Constraints.y && mouseY < this.paper4Constraints.y2) {
          //If the paper is clicked hide it
          this.paper4.hide = true;
          //play the paper sfx sound
          paperSFX.play();
        }
      }
    }
  }
}
