//This is the title class after the pretitle
class Title extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //background colour
    this.bgColour = 0;

    //Boolean system for the icons
    this.icon1On = true;
    this.icon2On = false;
    this.icon3On = false;
    this.icon4On = false;

    //Boolean system for displaying cracks
    this.crack1On = false;
    this.crack2On = false;
    this.crack3On = false;
    this.crack4On = false;

    //Icon 1 parameters
    this.icon1Params = {
      x: 950,
      y: 180,
      width: 40,
      height: 40,
      fill: 255,
    };
    //Icon 1 constraints
    this.icon1Constraints = {
      x: 932,
      x2: 971,
      y: 162,
      y2: 202,
    };

    //Icon 2 parameters
    this.icon2Params = {
      x: 1120,
      y: 394,
      width: 40,
      height: 40,
      fill: 255,
    };
    //Icon 2 constraints
    this.icon2Constraints = {
      x: 1102,
      x2: 1142,
      y: 375,
      y2: 415,
    };

    //Icon 3 parameters
    this.icon3Params = {
      x: 690,
      y: 530,
      width: 40,
      height: 40,
      fill: 255,
    };
    //Icon 3 constraints
    this.icon3Constraints = {
      x: 670,
      x2: 713,
      y: 512,
      y2: 551,
    };

    //Icon 4 parameters
    this.icon4Params = {
      x: 660,
      y: 430,
      width: 40,
      height: 40,
      fill: 255,
    };
    //Icon 4 constraints
    this.icon4Constraints = {
      x: 640,
      x2: 682,
      y: 412,
      y2: 452,
    };

    //Play button constraints
    this.playButtonConstraints = {
      x: 435,
      x2: 655,
      y: 275,
      y2: 400,
    };

    //Images
    this.titleImage1 = titleImage1;
    this.titleImage2 = titleImage2;
    this.titleImage3 = titleImage3;
    this.titleImage4 = titleImage4;
    this.titleImageHov = titleImageHov;
    this.titleTextImage = titleTextImage;
  }

  //Display everything
  display() {
    //call the super display
    super.display();
    //Apply the background colour
    background(this.bgColour);
    //Display the title Header
    this.titleHeader();
    //Display the cracks
    this.cracks();
    //Display the icon clickers
    this.iconClickers();
  }

  //Display the title header
  titleHeader() {
    push();
    imageMode(CENTER);
    image(this.titleTextImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Icons where the user clicks
  iconClickers() {
    //If the icon 1 is true display it
    if (this.icon1On === true) {
      push();
      noStroke();
      fill(this.icon1Params.fill);
      ellipse(this.icon1Params.x, this.icon1Params.y, this.icon1Params.width, this.icon1Params.height);
      pop();
    }
    //If the icon 2 is true display it
    if (this.icon2On === true) {
      push();
      noStroke();
      fill(this.icon2Params.fill);
      ellipse(this.icon2Params.x, this.icon2Params.y, this.icon2Params.width, this.icon2Params.height);
      pop();
    }
    //If the icon 3 is true display it
    if (this.icon3On === true) {
      push();
      noStroke();
      fill(this.icon3Params.fill);
      ellipse(this.icon3Params.x, this.icon3Params.y, this.icon3Params.width, this.icon3Params.height);
      pop();
    }
    //If the icon 4 is true display it
    if (this.icon4On === true) {
      push();
      noStroke();
      fill(this.icon4Params.fill);
      ellipse(this.icon4Params.x, this.icon4Params.y, this.icon4Params.width, this.icon4Params.height);
      pop();
    }
  }

  //Display the cracks
  cracks() {
    //If crack 1 is true display it
    if (this.crack1On === true) {
      push();
      imageMode(CENTER);
      image(this.titleImage1, this.x, this.y, this.width, this.height);
      pop();
    }
    //If crack 2 is true display it
    if (this.crack2On === true) {
      push();
      imageMode(CENTER);
      image(this.titleImage2, this.x, this.y, this.width, this.height);
      pop();
    }
    //If crack 3 is true display it
    if (this.crack3On === true) {
      push();
      imageMode(CENTER);
      image(this.titleImage3, this.x, this.y, this.width, this.height);
      pop();
    }
    //If crack 4 is true display it
    if (this.crack4On === true) {
      push();
      imageMode(CENTER);
      image(this.titleImage4, this.x, this.y, this.width, this.height);
      pop();
      //If possible enable it
      this.checkHover();
    }
  }

  //Display the hovered play button
  displayHover() {
    push();
    imageMode(CENTER);
    image(this.titleImageHov, this.x, this.y, this.width, this.height);
    pop();
  }

  //Check the hover over the play button
  checkHover() {
    //If crack 4 is true...
    if (this.crack4On = true) {
      //And the mouse is within the play button's constraints...
      if (mouseX > this.playButtonConstraints.x && mouseX < this.playButtonConstraints.x2) {
        if (mouseY > this.playButtonConstraints.y && mouseY < this.playButtonConstraints.y2) {
          //Display the hover
          this.displayHover();
        }
      }
    }
  }

  //mouse clicked functionality
  mouseClicked() {
    //call the super mouse clicked
    super.mouseClicked();
    //Create a click box for icon 1
    if (mouseX > this.icon1Constraints.x && mouseX < this.icon1Constraints.x2) {
      if (mouseY > this.icon1Constraints.y && mouseY < this.icon1Constraints.y2) {
        //Play cracked glass sfx
        glassCrackSFX.play();
        //Display the crack
        this.crack1On = true;
        //Hide icon 1
        this.icon1On = false;
        //Display icon 2
        this.icon2On = true;
      }
    }
    //Create a click box for icon 2
    if (mouseX > this.icon2Constraints.x && mouseX < this.icon2Constraints.x2) {
      if (mouseY > this.icon2Constraints.y && mouseY < this.icon2Constraints.y2) {
        //Play cracked glass sfx
        glassCrackSFX.play();
        //Display the crack
        this.crack2On = true;
        //Hide icon 1
        this.icon2On = false;
        //Display icon 3
        this.icon3On = true;
      }
    }
    //Create a click box for icon 3
    if (mouseX > this.icon3Constraints.x && mouseX < this.icon3Constraints.x2) {
      if (mouseY > this.icon3Constraints.y && mouseY < this.icon3Constraints.y2) {
        //Play cracked glass sfx
        glassCrackSFX.play();
        //Display the crack
        this.crack3On = true;
        //Hide icon 1
        this.icon3On = false;
        //Display icon 4
        this.icon4On = true;
      }
    }
    //Create a click box for icon 4
    if (mouseX > this.icon4Constraints.x && mouseX < this.icon4Constraints.x2) {
      if (mouseY > this.icon4Constraints.y && mouseY < this.icon4Constraints.y2) {
        //Play cracked glass sfx
        glassCrackSFX.play();
        //Display the crack
        this.crack4On = true;
        //Hide icon 1
        this.icon4On = false;
      }
    }
    //Create a click box for the play button
    if (mouseX > this.playButtonConstraints.x && mouseX < this.playButtonConstraints.x2) {
      if (mouseY > this.playButtonConstraints.y && mouseY < this.playButtonConstraints.y2) {
        //Go to the instructions screen
        state = new Instructions(1280, 720, 640, 360);
      }
    }
  }
}
