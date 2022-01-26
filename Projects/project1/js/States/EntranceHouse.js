//Class containing the display of the entrance of the house
class EntranceHouse {
  constructor(w, h, entranceHouseImage) {
    //position
    this.x = 400;
    this.y = 500;
    this.origin = 400;

    //dimensions
    this.width = w;
    this.height = h;
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

    //Position Constraint
    this.minX = 50;
    this.maxX = 600;

    //Constraints
    //Width Constraints
    this.minWidth = 800;
    this.maxWidth = 1500;
    //Height Constraints
    this.minHeight = 1000;
    this.maxHeight = 1500;

    //Image
    this.entranceHouseImage = entranceHouseImage;
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
}
