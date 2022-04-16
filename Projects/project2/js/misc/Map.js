//This class will contain the map
//Display the map images when hovered and not hovered
//add a mouse clicked function that will allow to change the current state
//Also the mouse clicked function will activate specific sounds for each location
//Add a boolean system to allow the user to not constantly get reset to the same location (Example: if the user is in the lab location they should respawn in the lab location when they close the map and not back in the home location)
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
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.labConstraints.x && mouseX < this.labConstraints.x2) {
      if (mouseY > this.labConstraints.y && mouseY < this.labConstraints.y2) {
        //Display the hover image
        this.displayLabHover();
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.shrineConstraints.x && mouseX < this.shrineConstraints.x2) {
      if (mouseY > this.shrineConstraints.y && mouseY < this.shrineConstraints.y2) {
        //Display the hover image
        this.displayShrineHover();
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.towerConstraints.x && mouseX < this.towerConstraints.x2) {
      if (mouseY > this.towerConstraints.y && mouseY < this.towerConstraints.y2) {
        //Display the hover image
        this.displayTowerHover();
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
        //Go to the home state
        state = new Home(1280, 720, 640, 360);
        //Boolean system
        locationHome = true;
        locationLab = false;
        locationShrine = false;
        locationTower = false;
        locationDadHome = false;
        //Play the home sfx
        homeSFX.play();
      }
    }
    //Check to see if within the clickbox
    if (mouseX > this.labConstraints.x && mouseX < this.labConstraints.x2) {
      if (mouseY > this.labConstraints.y && mouseY < this.labConstraints.y2) {
        //Go to the lab scene
        state = new LabScene(1280, 720, 640, 360);
        //Boolean system
        locationHome = false;
        locationLab = true;
        locationShrine = false;
        locationTower = false;
        locationDadHome = false;
        //Stop the theme song
        themeSong.stop();
        //Play the lab sfx
        labSFX.play();
        //Play the wind sfx
        windSFX.play();
        windSFX.loop();
      }
    }
    //Check to see if within the clickbox
    if (mouseX > this.shrineConstraints.x && mouseX < this.shrineConstraints.x2) {
      if (mouseY > this.shrineConstraints.y && mouseY < this.shrineConstraints.y2) {
        //Go to the shrine scene
        state = new ShrineScene(1280, 720, 640, 360);
        //Boolean System
        locationHome = false;
        locationLab = false;
        locationShrine = true;
        locationTower = false;
        locationDadHome = false;
        //Stop the theme song
        themeSong.stop();
        //Play the shrine sfx
        shrineSFX.play();
        //Play the wind sfx
        windSFX.play();
        windSFX.loop();

      }
    }
    //Check to see if within the clickbox
    if (mouseX > this.towerConstraints.x && mouseX < this.towerConstraints.x2) {
      if (mouseY > this.towerConstraints.y && mouseY < this.towerConstraints.y2) {
        //Go to the tower scene
        state = new TowerScene(1280, 720, 640, 360);
        //Boolean System
        locationHome = false;
        locationLab = false;
        locationShrine = false;
        locationTower = true;
        locationDadHome = false;
        //Stop the theme song
        themeSong.stop();
        //Play the tower sfx
        towerSFX.play();
        //Play the ocean sfx
        oceanSFX.play();
        oceanSFX.loop();
      }
    }
  }
}
