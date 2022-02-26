//Heart Monitor Setup
class HeartMonitor {
  constructor() {
    //Array
    this.line = [];
    //Control
    this.control = 0;

    //Point Value
    //Blue point system
    this.pointSystemBlue = {
        value: 0,
        completeProgress: false,
        addPoint: 2,
        toggleMode: true,
    };
    //Red point system
    this.pointSystemRed = {
        value: 0,
        completeProgress: false,
        addPoint: 2,
        toggleMode: true,
    };
    //Point Goals
    this.pointGoal = {
      achievment1: 10,
      achievment2: 30,
      achievment3: 50,
      ending: 80,
    };

    //Mouse Position
    this.mouseYBlue = 120;
    this.mouseYRed = 650;

    //Rectangle Progress Bars
    //Blue progress bar
    this.progressBarBlue = {
      x: 33,
      y: 640,
      w: 10,
      h: 10,
    };

    //Red progress bar
    this.progressBarRed = {
      x: 43.2,
      y: 640,
      w: 10,
      h: 10,
    };

    //Progress bar increaser
    this.progressIncreaser = {
      stage1: 40,
      stage2: 80,
      stage3: 120,
      stage4: 150,
    }

    //Stroke color
    this.strokeFill = {
    r: undefined,
    g: undefined,
    b: undefined,
  };
    //Stroke Color Blue
    this.strokeFillBlue = {
    r: 0,
    g: 213,
    b: 255,
  };
    //Stroke Color Red
    this.strokeFillRed = {
    r: 255,
    g: 64,
    b: 0,
  };
    //Stroke Color White
    this.strokeFillWhite = {
    r: 255,
    g: 255,
    b: 255,
  };
}

  //Display the entire functionality of the line
  displayLine() {
    this.createLineShape();
    this.controlLineOutcome();
    this.controlStrokeColor();

    //Point System
    this.pointValueSystem();
    this.pointCheck();

    //Progress Bar
    this.displayProgress();
    this.increaseProgress();

  }

//Create the shape of the line
  createLineShape() {
    push();
    stroke(this.strokeFill.r, this.strokeFill.g, this.strokeFill.b);
    noFill();
    //Create a simple line that moves along the x axis
    beginShape();
    //Keep the line growing
    for (let i = 0; i < width; i++) {
      vertex(i, this.line[i]);
    }
    //Close the shape
    endShape();
  }

  //Control how the line looks
  controlLineOutcome() {
    //Control the peaks of the line with the mouse Y
    this.control = mouseY;
    //If the line length is less than the canvas width keep it moving forward
    if (this.line.length < width) this.line.push(this.control);
    //If the line reaches the end of the canvas continue to keep it moving. Don't make it stop.
    else this.line.shift();
  }

  //Control the stroke color
  controlStrokeColor() {
    //Blue
    if (mouseY <= this.mouseYBlue) {
      this.strokeFill.r = this.strokeFillBlue.r;
      this.strokeFill.g = this.strokeFillBlue.g;
      this.strokeFill.b = this.strokeFillBlue.b;
    }
    //Red
    else if (mouseY >= this.mouseYRed) {
      this.strokeFill.r = this.strokeFillRed.r;
      this.strokeFill.g = this.strokeFillRed.g;
      this.strokeFill.b = this.strokeFillRed.b;
    }
    //White
    else if (mouseY <= this.mouseYRed && mouseY >= this.mouseYBlue) {
      this.strokeFill.r = this.strokeFillWhite.r;
      this.strokeFill.g = this.strokeFillWhite.g;
      this.strokeFill.b = this.strokeFillWhite.b;
    }
  }

  //Display two rectangles showcasing the progress of the score
  displayProgress() {
    //Blue progress bar
    push();
    rectMode(CENTER);
    noStroke();
    //Use the stroke blue color
    fill(this.strokeFillBlue.r, this.strokeFillBlue.g, this.strokeFillBlue.b);
    rect(this.progressBarBlue.x, this.progressBarBlue.y, this.progressBarBlue.w, this.progressBarBlue.h);
    pop();

    //Red progress bar
    push();
    rectMode(CENTER);
    noStroke();
    //Use the stroke red color
    fill(this.strokeFillRed.r, this.strokeFillRed.g, this.strokeFillRed.b);
    rect(this.progressBarRed.x, this.progressBarRed.y, this.progressBarRed.w, this.progressBarRed.h);
    pop();
  }

  //Increase the progress every few points
  increaseProgress() {
    if (this.pointSystemBlue.value >= this.pointGoal.achievment1) {
      this.progressBarBlue.h = this.progressIncreaser.stage1;
      this.progressBarRed.h = this.progressIncreaser.stage1;
    }
    if (this.pointSystemBlue.value >= this.pointGoal.achievment2) {
      this.progressBarBlue.h = this.progressIncreaser.stage2;
      this.progressBarRed.h = this.progressIncreaser.stage2;
    }
    if (this.pointSystemBlue.value >= this.pointGoal.achievment3) {
      this.progressBarBlue.h = this.progressIncreaser.stage3;
      this.progressBarRed.h = this.progressIncreaser.stage3;
    }
    if (this.pointSystemBlue.value >= this.pointGoal.ending) {
      this.progressBarBlue.h = this.progressIncreaser.stage4;
      this.progressBarRed.h = this.progressIncreaser.stage4;
    }
  }

  //Keep track of the point value
  pointValueSystem() {
    if (mouseY <= this.mouseYBlue && this.pointSystemBlue.toggleMode === true) {
      this.pointSystemBlue.value = this.pointSystemBlue.value += this.pointSystemBlue.addPoint;
      this.pointSystemBlue.toggleMode = false;
      console.log(this.pointSystemBlue.value);
    }
    else if (mouseY >= this.mouseYRed && this.pointSystemRed.toggleMode === true) {
      this.pointSystemRed.value = this.pointSystemRed.value += this.pointSystemRed.addPoint;
      this.pointSystemRed.toggleMode = false;
      console.log(this.pointSystemRed.value);
    }
  }

  //Check to see if the boolean is false
  pointCheck() {
    if (this.pointSystemBlue.toggleMode === false && this.pointSystemRed.toggleMode === false) {
      this.pointSystemBlue.toggleMode = true;
      this.pointSystemRed.toggleMode = true;
    }
  }
}
