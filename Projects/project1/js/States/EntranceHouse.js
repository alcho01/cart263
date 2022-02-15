//Class containing the display of the entrance of the house
//Add key pressed events which correspond to the movement
//Add mouse clicked events which correspond to interacting with objects/rooms
//Reset the position if needed
//Alert the user of what is interactive
class EntranceHouse extends Universal {
  constructor(w, h, x, y, entranceHouseImage) {
    //extended from the universal class
    super(w, h, x, y);

    //position
    this.origin = 400;

    //Reset Dimensions
    this.resetWidth = 800;
    this.resetHeight = 1000;

    //Position Increment
    this.incrementX = 50;
    //Increments
    this.increaseWidth = 100;
    this.increaseHeight = 100;
    //Decrements
    this.decreaseWidth = 100;
    this.decreaseHeight = 100;

    //Constraints
    //Position Constraint
    this.minX = 50;
    this.maxX = 600;

    //Width Constraints
    this.minWidth = 800;
    this.maxWidth = 1500;
    //Height Constraints
    this.minHeight = 1000;
    this.maxHeight = 1500;

    //Is the door locked
    this.doorLocked = true;

    //Has the user been hypnotized
    this.hypnotized = false;

    //Image
    this.entranceHouseImage = entranceHouseImage;

    //Boundaries for the opening of the bedroom
    this.stairs = {
      x: 165,
      x2: 575,
      y: 0,
      y2: 670,
    };

    //Boundaries for basement door
    this.basement = {
      x: 360,
      x2: 800,
      y: 0,
      y2: 667,
    };

    //Boundaries for speaker
    this.speaker = {
      x: 249,
      x2: 352,
      y: 255,
      y2: 308,
    };

    //Text
    this.text = {
      size: 20,
      x: 300,
      y: 250,
      //X and Y for downstairs alert sign
      downX: 595,
      downY: 310,
      //Color Black
      black: 0,
    };
  }

  //Display the entrance
  display() {
    //Add constraints to the positioning when zoomed in
    this.horizontalConstrain = constrain(this.x, this.minX, this.maxX);
    //Add constraints to how zoomed in/out you can get
    this.widthConstrain = constrain(this.width, this.minWidth, this.maxWidth);
    this.heightConstrain = constrain(this.height, this.minHeight, this.maxHeight);
    //Display the image
    push();
    imageMode(CENTER);
    image(this.entranceHouseImage, this.horizontalConstrain, this.y, this.widthConstrain, this.heightConstrain);
    pop();
  }

  //Display Alert to notify user that they can interact with the item
  displayAlert() {
    //Check if the width is equal to the max width and the x is at the minimum position
    if (this.width === this.maxWidth && this.x === this.minX) {
      //Display the alert
      push();
      noStroke();
      textAlign(CENTER);
      textSize(this.text.size);
      fill(this.text.black);
      text("Click me", this.text.x, this.text.y);
    }
    if (
      this.hypnotized === true &&
      this.width === this.maxWidth &&
      this.x === this.maxX
    ) {
      //Display the alert
      push();
      noStroke();
      textAlign(CENTER);
      textSize(this.text.size);
      fill(this.text.black);
      text("Click me to go upstairs", this.text.x, this.text.y);
    }
    if (
      this.doorLocked === false &&
      this.width === this.maxWidth &&
      this.x === this.minX
    ) {
      //Display the alert
      push();
      noStroke();
      textAlign(CENTER);
      textSize(this.text.size);
      fill(this.text.black);
      text("Click me to go downstairs", this.text.downX, this.text.downY);
    }
  }

  //Keypressed functionality
  keyPressed() {
    //If the "W" key is pressed and the initial width is less than the maximum width increase both width and height.
    if (keyCode === 87 && this.width < this.maxWidth) {
      indoorFootStepSFX.play();
      this.width += this.increaseWidth;
      this.height += this.increaseHeight;
    }
    //If the "S" key is pressed and the initial width is more than the minimum width decrease both width and height. (Must be at center of room to back up)
    else if (
      keyCode === 83 &&
      this.width > this.minWidth &&
      this.x === this.origin
    ) {
      indoorFootStepSFX.play();
      this.width -= this.decreaseWidth;
      this.height -= this.decreaseHeight;
    }
    //If the "A" key is pressed move to the left
    else if (
      keyCode === 65 &&
      this.width === this.maxWidth &&
      this.x < this.maxX
    ) {
      indoorFootStepSFX.play();
      this.x += this.incrementX;
    }
    //If x position is equal to the maximum x position change states to the living room
    else if (keyCode === 65 && this.x >= this.maxX) {
      indoorFootStepSFX.play();
      state = "LivingRoom";
    }
    //If the "D" key is pressed move to the right
    else if (
      keyCode === 68 &&
      this.width === this.maxWidth &&
      this.x > this.minX
    ) {
      indoorFootStepSFX.play();
      this.x -= this.incrementX;
    }
  }

  //Reset the position of the entrance upon entrance of another room
  resetPosition() {
    this.width = this.resetWidth;
    this.height = this.resetHeight;
    this.x = this.origin;
  }

  //Mouse Pressed functionality
  mouseClicked() {
    //If the user has been hypnotized permit the use of mouse clicked
    if (this.hypnotized === true) {
      //Make sure it is withing the stairs boundaries and is max width and furthest on the x position
      if (
        mouseX > this.stairs.x &&
        mouseX < this.stairs.x2 &&
        this.width === this.maxWidth &&
        this.x === this.maxX
      ) {
        if (mouseY > this.stairs.y && mouseY < this.stairs.y2) {
          //Change states to the bed room
          state = "BedRoom";
        }
      }
    }
    //The user has not been hypnotized
    if (this.hypnotized === false) {
      //Make sure it is withing the stairs boundaries and is max width and furthest on the x position
      if (
        mouseX > this.stairs.x &&
        mouseX < this.stairs.x2 &&
        this.width === this.maxWidth &&
        this.x === this.maxX
      ) {
        if (mouseY > this.stairs.y && mouseY < this.stairs.y2) {
          //play the locked door sfx
          lockedDoorSFX.play();
        }
      }
    }
    //The basement door is locked at the start
    if (this.doorLocked === true) {
      //Make sure it is withing the basement door boundaries and is max width and furthest on the x position
      if (
        mouseX > this.basement.x &&
        mouseX < this.basement.x2 &&
        this.width === this.maxWidth &&
        this.x === this.minX
      ) {
        if (mouseY > this.basement.y && mouseY < this.basement.y2) {
          //play the locked door sfx
          lockedDoorSFX.play();
        }
      }
    }
    //Check if the basement door is unlocked
    if (this.doorLocked === false) {
      //Make sure it is withing the basement door boundaries and is max width and furthest on the x position
      if (
        mouseX > this.basement.x &&
        mouseX < this.basement.x2 &&
        this.width === this.maxWidth &&
        this.x === this.minX
      ) {
        if (mouseY > this.basement.y && mouseY < this.basement.y2) {
          //Change the state to the basement hallway
          state = "Hallway";
          //Play white noise
          whiteNoiseSFX.play();
          whiteNoiseSFX.loop();
          //stop the previous soundtrack
          houseSoundTrack.stop();
        }
      }
    }
    //Interact with the speaker
    if (
      mouseX > this.speaker.x &&
      mouseX < this.speaker.x2 &&
      this.width === this.maxWidth &&
      this.x === this.minX
    ) {
      if (mouseY > this.speaker.y && mouseY < this.speaker.y2) {
        //Change states to the close up of the speaker
        state = "Speaker";
        //Speaker gives off a message
        responsiveVoice.speak("What is the secret Code", "French Male");
        //The answer output for annyang
        this.answer = "rotten";
      }
    }
  }
}
