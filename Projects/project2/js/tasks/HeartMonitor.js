//Heart Monitor Setup
//Used this page to help me out - https://happycoding.io/tutorials/p5js/array-functions#push.
//Used this for the delay time - https://github.com/pippinbarr/cart253-2020/tree/master/examples/time/oop-and-timers
//Helpful for creating custom shape - https://p5js.org/reference/#/p5/beginShape

//Create a line that undulates with beginShape and the use of mouseY
//Create an array for the line to keep extending it even when it goes off the screen
//Create a function that controls the stroke colour. When it is in blue zone the stroke will turn blue, when it is in the red zone the stroke will turn red.
//Display a progress bar that will augment or reset depending on the timer that is connected to it.
//When the user achieves the end goal of 80 points, the user succesfully completes the task, and the stroke turns green.

/*DESCRIPTION OF THE GAME

Difficulty - Intermediate

The heart monitor task involves the user to rapidly use the mouse and zig zag from top to bottom / bottom to top and reach the goal before times run out.
If time runs out, the progress bar will reset and force the user to start again.
The goal is 80 points. 2 points per "touch". The user has 10 seconds.
If the user succesfully completes the task the stroke will turn green.

This information can be found in the journal along with a simple diagram.
*/

class HeartMonitor extends State {
  constructor() {
    //Call the super class
    super();

    //Set the background colour
    this.bgColour = 0;

    //Array
    this.line = [];

    //Control
    this.control = undefined;

    //Delay after completing task 1 seconds
    this.timeDelay = 1000;

    //Timer
    this.timer = 10;
    //Reset the time back to 8 seconds
    this.timerReset = 10;

    //Handle time sequence
    this.timeManagement = {
      //Seconds
      sec: 1,
      //Minutes
      min: 60,
      //Checks to see if the timer is less than the checker which is 0
      checker: 0,
      //If the timer is less than the checker give it the value being 0
      value: 0,
    };

    //How the time/text looks
    this.timeLook = {
      //Fill it white
      white: 255,
      //Size
      size: 20,
      //Position
      x: 69,
      y: 646,
    };

    //Point Value
    //Blue point system
    this.pointSystemBlue = {
      //How many points are accumulated
      value: 0,
      //Reset the point value if the user fails
      valueReset: 0,
      //Check to see if the task is complete
      completeProgress: false,
      //Point increments
      addPoint: 2,
      //Toggle when to turn the point activation on or off (Meaning having to zig zag between red and blue)
      toggleMode: true,
    };
    //Red point system
    this.pointSystemRed = {
      //How many points are accumulated
      value: 0,
      //Reset the point value if the user fails
      valueReset: 0,
      //Check to see if the task is complete
      completeProgress: false,
      //Point increments
      addPoint: 2,
      //Toggle when to turn the point activation on or off (Meaning having to zig zag between red and blue)
      toggleMode: true,
    };
    //Point Goals to reach
    this.pointGoal = {
      achievment1: 10,
      achievment2: 30,
      achievment3: 50,
      ending: 80,
    };

    //Mouse Position
    //Where the line turns blue
    this.mouseYBlue = 120;
    //Where the line turns red
    this.mouseYRed = 650;

    //Rectangle Progress Bars
    //Blue progress bar
    this.progressBarBlue = {
      x: 33,
      y: 640,
      w: 10,
      h: 10,
      //Reset the height if the user fails
      hReset: 10,
    };

    //Red progress bar
    this.progressBarRed = {
      x: 43.2,
      y: 640,
      w: 10,
      h: 10,
      //Reset the height if the user fails
      hReset: 10,
    };

    //Progress bar increaser
    this.progressIncreaser = {
      stage1: 40,
      stage2: 80,
      stage3: 120,
      stage4: 150,
    };

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
    //Stroke Color Green
    this.strokeFillGreen = {
      r: 2,
      g: 250,
      b: 68,
    };
  }

  //Display the entire functionality of the line
  display() {
    //Call the super display
    super.display();
    //Background
    background(this.bgColour);
    //The line
    this.createLineShape();
    this.controlLineOutcome();
    this.controlStrokeColor();

    //Point System
    this.pointValueSystem();
    this.pointCheck();

    //Progress Bar
    this.displayProgress();
    this.increaseProgress();

    //Timer
    this.checkTimer();
    this.displayTime();

    //Check for Win
    this.activateWin();
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
      //Keep the line moving along the x, and alternate between the high and low points,
      //Only need one vertex and expand that point.
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
    //If the line reaches the end of the canvas continue to keep it moving. Don't make it stop at the end of the canvas.
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
    rect(
      this.progressBarBlue.x,
      this.progressBarBlue.y,
      this.progressBarBlue.w,
      this.progressBarBlue.h
    );
    pop();

    //Red progress bar
    push();
    rectMode(CENTER);
    noStroke();
    //Use the stroke red color
    fill(this.strokeFillRed.r, this.strokeFillRed.g, this.strokeFillRed.b);
    rect(
      this.progressBarRed.x,
      this.progressBarRed.y,
      this.progressBarRed.w,
      this.progressBarRed.h
    );
    pop();
  }

  //Keep track of the point value
  //If the mouse position of the Y axis is in the required zone and the toggle mode is activated to true add a point and reset the toggle mode to false
  pointValueSystem() {
    if (mouseY <= this.mouseYBlue && this.pointSystemBlue.toggleMode === true) {
      this.pointSystemBlue.value = this.pointSystemBlue.value += this.pointSystemBlue.addPoint;
      //Play a sound
      heartbeatSFX.play();
      this.pointSystemBlue.toggleMode = false;
      console.log(this.pointSystemBlue.value);
    } else if (
      mouseY >= this.mouseYRed &&
      this.pointSystemRed.toggleMode === true
    ) {
      this.pointSystemRed.value = this.pointSystemRed.value += this.pointSystemRed.addPoint;
      //Play a sound
      heartbeatSFX.play();
      this.pointSystemRed.toggleMode = false;
      console.log(this.pointSystemRed.value);
    }
  }

  //Check to see if the booleans are false
  //If both booleans are false reset the toggle modes to true
  pointCheck() {
    if (
      this.pointSystemBlue.toggleMode === false &&
      this.pointSystemRed.toggleMode === false
    ) {
      this.pointSystemBlue.toggleMode = true;
      this.pointSystemRed.toggleMode = true;
    }
  }

  //Increase the progress every few points
  //If the point value is greater than the specific point goal increase the height of the progress bar by x amount
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
      //Turn boolean to true to signify the goal was met
      this.pointSystemBlue.completeProgress = true;
      this.pointSystemRed.completeProgress = true;
    }
  }

  //Check to see if the time ran out
  checkTimer() {
    //Remove one second at a time
    this.timer -= this.timeManagement.sec / this.timeManagement.min;
    if (this.timer <= this.timeManagement.checker) {
      //Set the timer variable to 0 if it reaches 0
      this.timer = this.timeManagement.value;
      //Reset the progress/points if not completed in time
      this.reset();
    }
  }

  //display the time
  displayTime() {
    push();
    textAlign(CENTER);
    textFont(dialogueFont);
    fill(this.timeLook.white);
    textSize(this.timeLook.size);
    text(round(this.timer), this.timeLook.x, this.timeLook.y);
    pop();
  }

  //Notify the user has succesfully completed the task
  activateWin() {
    if (
      this.pointSystemBlue.completeProgress === true &&
      this.pointSystemRed.completeProgress === true
    ) {
      //Play a sound to notify the completion of the task
      //Change the color of the line to green (PlaceHolder)
      this.strokeFill.r = this.strokeFillGreen.r;
      this.strokeFill.g = this.strokeFillGreen.g;
      this.strokeFill.b = this.strokeFillGreen.b;
      //Keep the progress bar maximized
      this.progressBarBlue.h = this.progressIncreaser.stage4;
      this.progressBarRed.h = this.progressIncreaser.stage4;
      //For testing
      console.log("Win");
      //Activate the boolean to true
      task1Done = true;
      //Return to home state
      //Add a timer to display the green line for a few seconds
      this.returnTimer = setTimeout(this.returnHome.bind(this), this.timeDelay);
    }
  }

  //Make the state become the home state once the task is complete and the timeout is set
  returnHome() {
    state = new Home(1280, 720, 640, 360);
  }

  //Reset function to start the game over if failed
  reset() {
    //Reset the timer
    this.timer = this.timerReset;
    //Reset the point values
    this.pointSystemBlue.value = this.pointSystemBlue.valueReset;
    this.pointSystemRed.value = this.pointSystemRed.valueReset;
    //Reset the progress bars
    this.progressBarBlue.h = this.progressBarBlue.hReset;
    this.progressBarRed.h = this.progressBarRed.hReset;
    //Reset toggle mode
    this.pointSystemBlue.toggleMode = true;
    this.pointSystemRed.toggleMode = true;
    //Reset Completed progress
    //this.pointSystemBlue.completeProgress = false;
    //this.pointSystemRed.completeProgress = false;
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If the escape key is pressed...
    if (keyCode === 27) {
      //Return to the home state
      state = new Home(1280, 720, 640, 360);
    }
  }
}
