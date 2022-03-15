//This class will contain the map
//Apply hover methods
//Apply mouse interactivity
//Apply task count
class Map extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //Images
    this.mapImage = mapImage;
    this.mapImageHov1 = mapImageHov1;
    this.mapImageHov2 = mapImageHov2;
    this.mapImageHov3 = mapImageHov3;
    this.mapImageHov4 = mapImageHov4;

    //Constraints for home
    this.homeConstraints = {
      x: 85,
      x2: 230,
      y: 450,
      y2: 660,
    };

    //Constraints for lab
    this.labConstraints = {
      x: 276,
      x2: 468,
      y: 94,
      y2: 265,
    };

    //Constraints for shrine
    this.shrineConstraints = {
      x: 625,
      x2: 780,
      y: 290,
      y2: 523,
    };

    //Constraints for tower
    this.towerConstraints = {
      x: 1003,
      x2: 1151,
      y: 50,
      y2: 335,
    };
  }

  //Display the first map visual
  display() {
    //Call the super display
    super.display();
    //Display the first map
    push();
    imageMode(CENTER);
    image(this.mapImage, this.x, this.y, this.width, this.height);
    pop();
    //Call the hover function
    this.checkHover();
  }
  //Display the first map visual
  displayHomeHover() {
    push();
    imageMode(CENTER);
    image(this.mapImageHov1, this.x, this.y, this.width, this.height);
    pop();
  }
  //Display the second map visual
  displayLabHover() {
    push();
    imageMode(CENTER);
    image(this.mapImageHov2, this.x, this.y, this.width, this.height);
    pop();
  }
  //Display the third map visual
  displayShrineHover() {
    push();
    imageMode(CENTER);
    image(this.mapImageHov3, this.x, this.y, this.width, this.height);
    pop();
  }
  //Display the fourth map visual
  displayTowerHover() {
    push();
    imageMode(CENTER);
    image(this.mapImageHov4, this.x, this.y, this.width, this.height);
    pop();
  }

  //Check to see if the mouse is hovered over a specified entity
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.homeConstraints.x && mouseX < this.homeConstraints.x2) {
      if (mouseY > this.homeConstraints.y && mouseY < this.homeConstraints.y2) {
        //Display the hover image
        this.displayHomeHover();
        //Play a sound
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.labConstraints.x && mouseX < this.labConstraints.x2) {
      if (mouseY > this.labConstraints.y && mouseY < this.labConstraints.y2) {
        //Display the hover image
        this.displayLabHover();
        //Play a sound
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.shrineConstraints.x && mouseX < this.shrineConstraints.x2) {
      if (mouseY > this.shrineConstraints.y && mouseY < this.shrineConstraints.y2) {
        //Display the hover image
        this.displayShrineHover();
        //Play a sound
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.towerConstraints.x && mouseX < this.towerConstraints.x2) {
      if (mouseY > this.towerConstraints.y && mouseY < this.towerConstraints.y2) {
        //Display the hover image
        this.displayTowerHover();
        //Play a sound 
      }
    }
  }

  //mouse Functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Check to see if within the clickbox
    if (mouseX > this.homeConstraints.x && mouseX < this.homeConstraints.x2) {
      if (mouseY > this.homeConstraints.y && mouseY < this.homeConstraints.y2) {
        //Go to the specified state
        state = new Home(1280, 720, 640, 360);
      }
    }
    //Check to see if within the clickbox
    if (mouseX > this.labConstraints.x && mouseX < this.labConstraints.x2) {
      if (mouseY > this.labConstraints.y && mouseY < this.labConstraints.y2) {
        //state = new Lab(1280, 720, 640, 360);
      }
    }
    //Check to see if within the clickbox
    if (mouseX > this.shrineConstraints.x && mouseX < this.shrineConstraints.x2) {
      if (mouseY > this.shrineConstraints.y && mouseY < this.shrineConstraints.y2) {
        //state = new Shrine(1280, 720, 640, 360);
      }
    }
    //Check to see if within the clickbox
    if (mouseX > this.towerConstraints.x && mouseX < this.towerConstraints.x2) {
      if (mouseY > this.towerConstraints.y && mouseY < this.towerConstraints.y2) {
        //state = new Tower(1280, 720, 640, 360);
      }
    }
  }
}
