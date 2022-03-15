//This class contains the toolbar.
//The toolbar is what holds the journal, bag, and map.
class ToolBar {
  constructor() {
    //Dimensions
    this.width = 1200;
    this.height = 600;

    //Position
    this.x = 605;
    this.y = 414;

    //Images
    this.toolBarImage = toolBarImage;
    this.toolBarImageHov1 = toolBarImageHov1;
    this.toolBarImageHov2 = toolBarImageHov2;
    this.toolBarImageHov3 = toolBarImageHov3;

    //Constraints for the journal
    this.journalConstraints = {
      x: 17,
      x2: 72,
      y: 645,
      y2: 708,
    };

    //Constraints for the bag
    this.bagConstraints = {
      x: 85,
      x2: 138,
      y: 640,
      y2: 708,
    };

    //Constraints for the map
    this.mapConstraints = {
      x: 150,
      x2: 222,
      y: 647,
      y2: 710,
    };
  }

  //Display the toolbar
  display() {
    push();
    imageMode(CENTER);
    image(this.toolBarImage, this.x, this.y, this.width, this.height);
    pop();

    //Display the hover for the journal
    this.checkHover();
  }

  //Display the hover over the journal
  displayJournalHover() {
    push();
    imageMode(CENTER);
    image(this.toolBarImageHov3, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the hover over bag
  displayBagHover() {
    push();
    imageMode(CENTER);
    image(this.toolBarImageHov2, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the hover over the map
  displayMapHover() {
    push();
    imageMode(CENTER);
    image(this.toolBarImageHov1, this.x, this.y, this.width, this.height);
    pop();
  }

  //Check if the mouse is hovered over
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.journalConstraints.x && mouseX < this.journalConstraints.x2) {
      if (mouseY > this.journalConstraints.y && mouseY < this.journalConstraints.y2) {
        this.displayJournalHover();
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.bagConstraints.x && mouseX < this.bagConstraints.x2) {
      if (mouseY > this.bagConstraints.y && mouseY < this.bagConstraints.y2) {
        this.displayBagHover();
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.mapConstraints.x && mouseX < this.mapConstraints.x2) {
      if (mouseY > this.mapConstraints.y && mouseY < this.mapConstraints.y2) {
        this.displayMapHover();
      }
    }
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Click on the map
    if (mouseX > this.mapConstraints.x && mouseX < this.mapConstraints.x2) {
      if (mouseY > this.mapConstraints.y && mouseY < this.mapConstraints.y2) {
        //Link to the map class 
        state = new Map(1280, 720, 640, 360);
      }
    }
  }
}
