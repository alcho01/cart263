//This class contains the journal. The journal contains information on the tasks
class Journal extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

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

    //Arrow parameters
    this.arrow = {
      x: 1100,
      y: 600,
      width: 1000,
      height: 700,
    };

    //Arrow constraints
    this.arrowConstraints = {
      x: 804,
      x2: 863,
      y: 507,
      y2: 556,
    };

    //Boolean to hide show tasks
    this.showTask1 = true;

    //Images
    this.journalImage = journalImage;
    this.journalInfoImage = journalInfoImage;
    this.journalInfoImage2 = journalInfoImage2;
    this.journalArrowImage = journalArrowImage;
    this.journalArrowImageHov = journalArrowImageHov;
  }

  //Display everything
  display() {
    //Call the super display
    super.display();
    //Display the journal
    this.displayJournal();
    //Display the info
    this.displayHeartTask();
    //Display the arrow
    this.displayArrow();
    //Display the hover over the arrow
    this.checkHover();
  }

  //Display the journal
  displayJournal() {
    push();
    imageMode(CENTER);
    image(this.journalImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the heart task instructions
  displayHeartTask() {
    //If it is true display the instructions
    if (this.showTask1 === true) {
    //Instructions page 1
    push();
    imageMode(CENTER);
    image(this.journalInfoImage, this.journalInfoP1.x, this.journalInfoP1.y, this.journalInfoP1.width, this.journalInfoP1.height);
    pop();
    //Instructions page 2
    push();
    imageMode(CENTER);
    image(this.journalInfoImage2, this.journalInfoP2.x, this.journalInfoP2.y, this.journalInfoP2.width, this.journalInfoP2.height);
    pop();
  }
}

  //Display the arrow
  displayArrow() {
    push();
    imageMode(CENTER);
    image(this.journalArrowImage, this.arrow.x, this.arrow.y, this.arrow.width, this.arrow.height);
    pop();
  }

  //Display the arrow when hovered over
  displayArrowHover() {
    push();
    imageMode(CENTER);
    image(this.journalArrowImageHov, this.arrow.x, this.arrow.y, this.arrow.width, this.arrow.height);
    pop();
  }

  //Check the hover
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.arrowConstraints.x && mouseX < this.arrowConstraints.x2) {
      if (mouseY > this.arrowConstraints.y && mouseY < this.arrowConstraints.y2) {
        //Display the hover
        this.displayArrowHover();
      }
    }
  }

  //mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Check to see if mouse is within click box
    if (mouseX > this.arrowConstraints.x && mouseX < this.arrowConstraints.x2) {
      if (mouseY > this.arrowConstraints.y && mouseY < this.arrowConstraints.y2) {
        //Hide this task
        this.showTask1 = false;
      }
    }
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If escape key is clicked return to the previous state
    if (keyCode === 27 && locationHome === true) {
      //Return to the home state
      state = new Home(1280, 720, 640, 360);
    }
  }
}
