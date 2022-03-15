//This class contains the bag that stores certain artifact.
class Bag extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //exit button parameters
    this.exitButton = {
      x: 1470,
      y: 1130,
      width: 1800,
      height: 1200,
    };

    //Exit button constraints
    this.exitConstraints = {
      x: 588,
      x2: 675,
      y: 550,
      y2: 649,
    };

    //Images
    this.exitButtonImage = exitButtonImage;
    this.exitButtonImage2 = exitButtonImage2;
    this.bagImage = bagImage;
  }

  //Display everything
  display() {
    //Call the super display
    super.display();
    //Get the display bag function
    this.displayBag();
    //Get the display exitButton function
    this.displayExitButton();
    //Check the hover over the exit button
    this.checkHover();
  }

  //Display the bag
  displayBag() {
    push();
    imageMode(CENTER);
    image(this.bagImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the exit button
  displayExitButton() {
    push();
    imageMode(CENTER);
    image(this.exitButtonImage, this.exitButton.x, this.exitButton.y, this.exitButton.width, this.exitButton.height);
    pop();
  }

  //Display the exit button hovered
  displayExitHovered() {
    push();
    imageMode(CENTER);
    image(this.exitButtonImage2, this.exitButton.x, this.exitButton.y, this.exitButton.width, this.exitButton.height);
    pop();
  }

  //Check to see if the mouse is hovered over the exit button
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.exitConstraints.x && mouseX < this.exitConstraints.x2) {
      if (mouseY > this.exitConstraints.y && mouseY < this.exitConstraints.y2) {
        this.displayExitHovered();
      }
    }
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Check to see if the locationhome is set to true
    if (locationHome === true) {
      //check to see if the mouse is within the click box
      if (mouseX > this.exitConstraints.x && mouseX < this.exitConstraints.x2) {
        if (mouseY > this.exitConstraints.y && mouseY < this.exitConstraints.y2) {
          //Return to the home state
          state = new Home(1280, 720, 640, 360);
        }
      }
    }
  }
}
