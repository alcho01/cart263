//This class contains the journal. The journal contains information on the tasks
//Display the outline of the journal
//Display the journal icons hovered and not hovered
//Display the information of the tasks when the specified icon is clicked
//Add a boolean system to hide the icons and the hovered icons when the information is shown
//Add a boolean system to hide information when the icons and the hovered icons are shown
//Add a key pressed to either get out of the journal state or return to the journal home page
class Journal extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Journal Icon parameters
    this.journalIcons = {
      x: 620,
      y: 365,
      width: 1180,
      height: 750,
    };

    //Journal info parameters (page 1 - HeartMonitor)
    this.journalInfoP1 = {
      x: 660,
      y: 370,
      width: 1400,
      height: 800,
    };
    //Journal info parameters (page 2 - HeartMonitor)
    this.journalInfoP2 = {
      x: 320,
      y: 420,
      width: 1370,
      height: 770,
    };
    //Journal info parameters (page 3 - Logic Pad)
    this.journalInfoP3 = {
      x: 680,
      y: 410,
      width: 1200,
      height: 800,
    };
    //Journal info parameters (page 4 - Logic Pad)
    this.journalInfoP4 = {
      x: 600,
      y: 390,
      width: 1200,
      height: 800,
    };

    //Journal info parameters (page 5-6 - Confession)
    this.journalInfoP5 = {
      x: 635,
      y: 380,
      width: 1200,
      height: 800,
    };

    //Journal info parameters (page 7-8 - Detector)
    this.journalInfoP7 = {
      x: 635,
      y: 380,
      width: 1200,
      height: 800,
    };

    //Constraints for the heart icon
    this.heartConstraints = {
      x: 324,
      x2: 477,
      y: 137,
      y2: 290,
    };
    //Constraints for the logic pad icon
    this.logicPadConstraints = {
      x: 307,
      x2: 485,
      y: 355,
      y2: 566,
    };
    //Constraints for the confess icon
    this.confessConstraints = {
      x: 655,
      x2: 766,
      y: 127,
      y2: 290,
    };
    //Constraints for the nautical icon
    this.detectorConstraints = {
      x: 640,
      x2: 780,
      y: 328,
      y2: 565,
    };

    //Boolean System
    //Check if the icons should be hidden
    this.iconsHide = false;
    //Check if the hovered heart icon should be hidden
    this.heartHovHide = false;
    //Check if the hovered logicpad icon should be hidden
    this.logicPadHovHide = false;
    //Check if the hovered confess icon should be hidden
    this.confessHovHide = false;
    //Check if the hovered detecor icon should be hidden
    this.detectorHovHide = false;

    //Check if the info should be shown
    //Check if the heart info should be shown
    this.heartInfoShow = false;
    //Check if the logic pad info should be shown
    this.logicPadInfoShow = false;
    //Check if the confession info should be shown
    this.confessionInfoShow = false;
    //Check if the detector info should be shown
    this.detectorInfoShow = false;

    //Images
    this.journalImage = journalImage;
    this.journalMainPage = journalMainPage;
    this.journalHeartHov = journalHeartHov;
    this.journalLogicPadHov = journalLogicPadHov;
    this.journalConfessHov = journalConfessHov;
    this.journalNauticalHov = journalNauticalHov;
    this.journalInfoImage = journalInfoImage;
    this.journalInfoImage2 = journalInfoImage2;
    this.journalInfoImage3 = journalInfoImage3;
    this.journalInfoImage4 = journalInfoImage4;
    this.journalInfoImage5 = journalInfoImage5;
    this.journalInfoImage6 = journalInfoImage6;
  }

  //Display everything
  display() {
    //Call the super display
    super.display();
    //Display the journal
    this.displayJournal();
    //Display the hover
    this.checkHover();
    //Display the instructions if true
    this.displayHeartInfo();
    this.displayLogicPadInfo();
    this.displayConfessionInfo();
    this.displayDetectorInfo();
  }

  //Display the journal
  displayJournal() {
    //Display the outline of the journal
    push();
    imageMode(CENTER);
    image(this.journalImage, this.x, this.y, this.width, this.height);
    pop();

    //If the icons are not hidden show them
    if (this.iconsHide === false) {
      //Display the icons
      push();
      imageMode(CENTER);
      image(this.journalMainPage, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
      pop();
    }
  }

  //Display the heart hovered icon
  displayHeartHov() {
    //If the hover method is shown...
    if (this.heartHovHide === false) {
      //Display the hovered icon
      push();
      imageMode(CENTER);
      image(this.journalHeartHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
      pop();
    }
  }
  //Display the logic pad hovered icon
  displayLogicPadHov() {
    //If the hover method is shown...
    if (this.logicPadHovHide === false) {
      //Display the hovered icon
      push();
      imageMode(CENTER);
      image(this.journalLogicPadHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
      pop();
    }
  }
  //Display the confess hovered icon
  displayConfessHov() {
    //If the hover method is shown...
    if (this.confessHovHide === false) {
      //Display the hovered icon
      push();
      imageMode(CENTER);
      image(this.journalConfessHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
      pop();
    }
  }
  //Display the detector hovered icon
  displayDetectorHov() {
    //If the hover method is shown...
    if (this.detectorHovHide === false) {
      //Display the hovered icon
      push();
      imageMode(CENTER);
      image(this.journalNauticalHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
      pop();
    }
  }

  //Display the heart monitor instructions
  displayHeartInfo() {
    //If the heart info is shown...
    if (this.heartInfoShow === true) {
      //Hide the icons
      this.iconsHide === true;
      //Display the information
      //Page 1
      push();
      imageMode(CENTER);
      image(this.journalInfoImage, this.journalInfoP1.x, this.journalInfoP1.y, this.journalInfoP1.width, this.journalInfoP1.height);
      pop();
      //Page 2
      push();
      imageMode(CENTER);
      image(this.journalInfoImage2, this.journalInfoP2.x, this.journalInfoP2.y, this.journalInfoP2.width, this.journalInfoP2.height);
      pop();
    }
  }
  //Display the logic pad instructions
  displayLogicPadInfo() {
    //if the logic pad instructions can be shown...
    if (this.logicPadInfoShow === true) {
      //Hide the icons
      this.iconsHide === true;
      //Display the information
      //Page 3
      push();
      imageMode(CENTER);
      image(this.journalInfoImage3, this.journalInfoP3.x, this.journalInfoP3.y, this.journalInfoP3.width, this.journalInfoP3.height);
      pop();
      //Page 4
      push();
      imageMode(CENTER);
      image(this.journalInfoImage4, this.journalInfoP4.x, this.journalInfoP4.y, this.journalInfoP4.width, this.journalInfoP4.height);
      pop();
    }
  }
  //Display the confession instrustioncs
  displayConfessionInfo() {
    //if the confession instructions can be shown
    if (this.confessionInfoShow === true) {
      //Hide the icons
      this.iconsHide === true;
      //Display the information
      //page 5 and 6
      push();
      imageMode(CENTER);
      image(this.journalInfoImage5, this.journalInfoP5.x, this.journalInfoP5.y, this.journalInfoP5.width, this.journalInfoP5.height);
      pop();
    }
  }
  //Display the detector instructions
  displayDetectorInfo() {
    //if the detector instructions can be shown
    if (this.detectorInfoShow === true) {
      //Hide the icons
      this.iconsHide === true;
      //Display the information
      //page 7 and 8
      push();
      imageMode(CENTER);
      image(this.journalInfoImage6, this.journalInfoP7.x, this.journalInfoP7.y, this.journalInfoP7.width, this.journalInfoP7.height);
      pop();
    }
  }

  //Check the hover
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.heartConstraints.x && mouseX < this.heartConstraints.x2) {
      if (mouseY > this.heartConstraints.y && mouseY < this.heartConstraints.y2) {
        //Display the hovered heart icon
        this.displayHeartHov();
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.logicPadConstraints.x && mouseX < this.logicPadConstraints.x2) {
      if (mouseY > this.logicPadConstraints.y && mouseY < this.logicPadConstraints.y2) {
        //Display the hovered logic pad icon
        this.displayLogicPadHov();
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.confessConstraints.x && mouseX < this.confessConstraints.x2) {
      if (mouseY > this.confessConstraints.y && mouseY < this.confessConstraints.y2) {
        //Display the hovered confess icon
        this.displayConfessHov();
      }
    }
    //Check to see if it is within these constraints
    if (mouseX > this.detectorConstraints.x && mouseX < this.detectorConstraints.x2) {
      if (mouseY > this.detectorConstraints.y && mouseY < this.detectorConstraints.y2) {
        //Display the hovered nautical icon
        this.displayDetectorHov();
      }
    }
  }

  //mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Check to see if mouse is within click box
    if (mouseX > this.heartConstraints.x && mouseX < this.heartConstraints.x2) {
      if (mouseY > this.heartConstraints.y && mouseY < this.heartConstraints.y2) {
        //Boolean system
        //Hide the icons
        //Hide the hover method
        //Display the heart info
        this.iconsHide = true;
        this.heartHovHide = true;
        this.logicPadHovHide = true;
        this.confessHovHide = true;
        this.detectorHovHide = true;
        this.heartInfoShow = true;
        this.logicPadInfoShow = false;
        this.confessionInfoShow = false;
        this.detectorInfoShow = false;
        this.displayHeartInfo();
      }
    }
    //Check to see if mouse is within click box
    if (mouseX > this.logicPadConstraints.x && mouseX < this.logicPadConstraints.x2) {
      if (mouseY > this.logicPadConstraints.y && mouseY < this.logicPadConstraints.y2) {
        //Boolean system
        //Hide the icons
        //Hide the hover method
        //Display the logic pad info
        this.iconsHide = true;
        this.heartHovHide = true;
        this.logicPadHovHide = true;
        this.confessHovHide = true;
        this.detectorHovHide = true;
        this.logicPadInfoShow = true;
        this.heartInfoShow = false;
        this.confessionInfoShow = false;
        this.detectorInfoShow = false;
        this.displayLogicPadInfo();
      }
    }
    //Check to see if mouse is within click box
    if (mouseX > this.confessConstraints.x && mouseX < this.confessConstraints.x2) {
      if (mouseY > this.confessConstraints.y && mouseY < this.confessConstraints.y2) {
        //Boolean system
        //Hide the icons
        //Hide the hover method
        //Display the confession info
        this.iconsHide = true;
        this.heartHovHide = true;
        this.logicPadHovHide = true;
        this.confessHovHide = true;
        this.detectorHovHide = true;
        this.confessionInfoShow = true;
        this.heartInfoShow = false;
        this.logicPadInfoShow = false;
        this.detectorInfoShow = false;
        this.displayConfessionInfo();
      }
    }
    //Check to see if mouse is within click box
    if (mouseX > this.detectorConstraints.x && mouseX < this.detectorConstraints.x2) {
      if (mouseY > this.detectorConstraints.y && mouseY < this.detectorConstraints.y2) {
        //Boolean system
        //Hide the icons
        //Hide the hover method
        //Display the detector info
        this.iconsHide = true;
        this.heartHovHide = true;
        this.logicPadHovHide = true;
        this.confessHovHide = true;
        this.detectorHovHide = true;
        this.detectorInfoShow = true;
        this.heartInfoShow = false;
        this.logicPadInfoShow = false;
        this.confessionInfoShow = false;
        this.displayDetectorInfo();
      }
    }
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If left arrow key is pressed go back to the main page
    if (keyCode === 37) {
      //The icons get shown again
      //All the information is hidden
      //Hover method is active again
      this.iconsHide = false;
      this.heartInfoShow = false;
      this.logicPadInfoShow = false;
      this.confessionInfoShow = false;
      this.detectorInfoShow = false;
      this.heartHovHide = false;
      this.logicPadHovHide = false;
      this.confessHovHide = false;
      this.detectorHovHide = false;
    }
    //If escape key is clicked return to the previous state
    if (keyCode === 27 && locationHome === true) {
      //Return to the home state
      state = new Home(1280, 720, 640, 360);
    }
    //If escape key is clicked return to the previous state
    if (keyCode === 27 && locationLab === true) {
      //Return to the lab state
      state = new Lab(1280, 720, 640, 360);
    }
    //If escape key is clicked return to the previous state
    if (keyCode === 27 && locationShrine === true) {
      //Return to the shrine state
      state = new Shrine(1280, 720, 640, 360);
    }
    //If escape key is clicked return to the previous state
    if (keyCode === 27 && locationTower === true) {
      //Return to the tower state
      state = new Tower(1280, 720, 640, 360);
    }
    //If escape key is clicked return to the previous state
    if (keyCode === 27 && locationDadHome === true) {
      //Return to the dad home state
      state = new DadHome(1280, 720, 640, 360);
    }
  }
}
