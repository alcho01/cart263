//Class containing the display of the entrance of the house
//Add key pressed events which correspond to the movement
//Add mouse clicked events which correspond to interacting with objects/rooms

class EntranceHouse extends Universal{
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

    //Image
    this.entranceHouseImage = entranceHouseImage;

    //Boundaries for the opening of the bedroom
    this.stairsX = 165;
    this.stairsX2 = 575;
    this.stairsY = 0;
    this.stairsY2 = 670;

    //Boundaries for basement door
    this.basementX = 360;
    this.basementX2 = 800;
    this.basementY = 0;
    this.basementY2 = 667;

    //Boundaries for speaker
    this.speakerX = 249;
    this.speakerX2 = 352;
    this.speakerY = 255;
    this.speakerY2 = 308;

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
     text('Click me', this.text.x, this.text.y);
    }
   if (hypnotized === true && this.width === this.maxWidth && this.x === this.maxX) {
     //Display the alert
     push();
     noStroke();
     textAlign(CENTER);
     textSize(this.text.size);
     fill(this.text.black);
     text('Click me to go upstairs', this.text.x, this.text.y);
    }
   if (doorLocked === false && this.width === this.maxWidth && this.x === this.minX) {
     //Display the alert
     push();
     noStroke();
     textAlign(CENTER);
     textSize(this.text.size);
     fill(this.text.black);
     text('Click me to go downstairs', this.text.downX, this.text.downY);
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
    else if (keyCode === 83 && this.width > this.minWidth && this.x === this.origin) {
      indoorFootStepSFX.play();
      this.width -= this.decreaseWidth;
      this.height -= this.decreaseHeight;
    }
    //If the "A" key is pressed move to the left
    else if (keyCode === 65 && this.width === this.maxWidth && this.x < this.maxX) {
      indoorFootStepSFX.play();
      this.x += this.incrementX;
    }
    //If x position is equal to the maximum x position change states to the living room
    else if (keyCode === 65 && this.x >= this.maxX) {
      indoorFootStepSFX.play();
      state = 'LivingRoom';
    }
    //If the "D" key is pressed move to the right
    else if (keyCode === 68 && this.width === this.maxWidth && this.x > this.minX) {
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
    if (hypnotized === true) {
      //Make sure it is withing the stairs boundaries and is max width and furthest on the x position
      if (mouseX > this.stairsX && mouseX < this.stairsX2 && this.width === this.maxWidth && this.x === this.maxX) {
        if (mouseY > this.stairsY && mouseY < this.stairsY2) {
          //Change states to the bed room
          state = 'BedRoom';
        }
      }
    }
    //The user has not been hypnotized
    if (hypnotized === false) {
      //Make sure it is withing the stairs boundaries and is max width and furthest on the x position
      if (mouseX > this.stairsX && mouseX < this.stairsX2 && this.width === this.maxWidth && this.x === this.maxX) {
        if (mouseY > this.stairsY && mouseY < this.stairsY2) {
          //play the locked door sfx
          lockedDoorSFX.play();
        }
      }
    }
    //The basement door is locked at the start
    if (doorLocked === true) {
      //Make sure it is withing the basement door boundaries and is max width and furthest on the x position
      if (mouseX > this.basementX && mouseX < this.basementX2 && this.width === this.maxWidth && this.x === this.minX) {
        if (mouseY > this.basementY && mouseY < this.basementY2) {
          //play the locked door sfx
          lockedDoorSFX.play();
        }
      }
    }
    //Check if the basement door is unlocked
    if (doorLocked === false) {
      //Make sure it is withing the basement door boundaries and is max width and furthest on the x position
      if (mouseX > this.basementX && mouseX < this.basementX2 && this.width === this.maxWidth && this.x === this.minX) {
        if (mouseY > this.basementY && mouseY < this.basementY2) {
          //Change the state to the basement hallway
          state = 'Hallway';
          //Play white noise
          whiteNoiseSFX.play();
          whiteNoiseSFX.loop();
          //stop the previous soundtrack
          houseSoundTrack.stop();
        }
      }
    }
    //Interact with the speaker
    if (mouseX > this.speakerX && mouseX < this.speakerX2 && this.width === this.maxWidth && this.x === this.minX) {
      if (mouseY > this.speakerY && mouseY < this.speakerY2) {
        //Change states to the close up of the speaker
        state = 'Speaker';
        //Speaker gives off a message
        responsiveVoice.speak("What is the secret Code", "French Male");
        //The answer output for annyang
        this.answer = 'rotten';
      }
    }
  }
}
