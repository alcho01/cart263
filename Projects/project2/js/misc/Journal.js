//This class contains the journal. The journal contains information on the tasks
//DO COMMENTS AT THE END
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

    //Journal info parameters (page 1)
    this.journalInfoP1 = {
      x: 660,
      y: 370,
      width: 1400,
      height: 800,
    };

    //Journal info parameters (page 2)
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
    //Constaints for the heart icon
    this.heartConstraints = {
      x: 324,
      x2: 477,
      y: 137,
      y2: 290,
    };
    //Constaints for the logic pad icon
    this.logicPadConstraints = {
      x: 307,
      x2: 485,
      y: 355,
      y2: 566,
    };
    //Constaints for the confess icon
    this.confessConstraints = {
      x: 655,
      x2: 766,
      y: 127,
      y2: 290,
    };
    //Constaints for the nautical icon
    this.nauticalConstraints = {
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
    //Check if the hovered nautical icon should be hidden
    this.nauticalHovHide = false;
    //Check if the heart info should be showed
    this.heartInfoShow = false;
    //Check if the logic pad info should be showed
    this.logicPadInfoShow = false;

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
  }

  //Display the journal
  displayJournal() {
    //Display the outline of the journal
    push();
    imageMode(CENTER);
    image(this.journalImage, this.x, this.y, this.width, this.height);
    pop();

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
    if (this.heartHovHide === false) {
    push();
    imageMode(CENTER);
    image(this.journalHeartHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
    pop();
  }
}
  //Display the logic pad hovered icon
  displayLogicPadHov() {
    if (this.logicPadHovHide === false) {
    push();
    imageMode(CENTER);
    image(this.journalLogicPadHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
    pop();
  }
}
  //Display the confess hovered icon
  displayConfessHov() {
    if (this.confessHovHide === false) {
    push();
    imageMode(CENTER);
    image(this.journalConfessHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
    pop();
  }
}
  //Display the nautical hovered icon
  displayNauticalHov() {
    if (this.nauticalHovHide === false) {
    push();
    imageMode(CENTER);
    image(this.journalNauticalHov, this.journalIcons.x, this.journalIcons.y, this.journalIcons.width, this.journalIcons.height);
    pop();
  }
}

  //Display the heart monitor instructions
  displayHeartInfo() {
    if (this.heartInfoShow === true) {
      //Hide the icons
      this.iconsHide === true;
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
    //Check to see if the logic pad instructions can be shown
    if (this.logicPadInfoShow === true) {
      //Hide the icons
      this.iconsHide === true;
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
    if (mouseX > this.nauticalConstraints.x && mouseX < this.nauticalConstraints.x2) {
      if (mouseY > this.nauticalConstraints.y && mouseY < this.nauticalConstraints.y2) {
        //Display the hovered nautical icon
        this.displayNauticalHov();
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
        this.iconsHide = true;
        this.heartHovHide = true;
        this.logicPadHovHide = true;
        this.confessHovHide = true;
        this.nauticalHovHide = true;
        this.heartInfoShow = true;
        this.displayHeartInfo();
      }
    }
    //Check to see if mouse is within click box
    if (mouseX > this.logicPadConstraints.x && mouseX < this.logicPadConstraints.x2) {
      if (mouseY > this.logicPadConstraints.y && mouseY < this.logicPadConstraints.y2) {
        //Boolean system
        this.iconsHide = true;
        this.heartHovHide = true;
        this.logicPadHovHide = true;
        this.confessHovHide = true;
        this.nauticalHovHide = true;
        this.logicPadInfoShow = true;
        this.displayLogicPadInfo();
      }
    }
    //Do for the confess task
    //Do for the nautical task
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If left arrow key is pressed go back to the main page
    if (keyCode === 37) {
      this.iconsHide = false;
      this.heartInfoShow = false;
      this.logicPadInfoShow = false;
      this.heartHovHide = false;
      this.logicPadHovHide = false;
      this.confessHovHide = false;
      this.nauticalHovHide = false;
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
      //Return to the home state
      state = new Tower(1280, 720, 640, 360);
    }
  }
}
