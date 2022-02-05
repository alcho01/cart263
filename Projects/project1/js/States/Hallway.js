//This class contains the hallway scene.
class Hallway extends Universal {
  constructor(w, h, x, y, hallwayImage) {
    //Same parameters as the universal class
    super(w, h, x, y);

    //Image
    this.hallwayImage = hallwayImage;

    //Increments
    this.increaseX = 15;
    this.increaseY = 80;
    this.increaseWidth = 500;
    this.increaseHeight = 500;

    //Constraints
    this.minX = 400;
    this.minY = 500;
    this.maxX = 510;
    this.maxY = 1120;

    this.minWidth = 800;
    this.minHeight = 1000;
    this.maxWidth = 5000;
    this.maxHeight = 5000;

    //Reset parameters
    this.resetWidth = 800;
    this.resetHeight = 1000;
    this.originX = 400;
    this.originY = 500;

  }

  //Display the hallway
  display() {
    //Add constraints to position
    this.xConstrain = constrain(this.x, this.minX, this.maxX);
    this.yConstrain = constrain(this.y, this.minY, this.maxY);
    //Add constraints to how zoomed in/out you can get
    this.widthConstrain = constrain(this.width, this.minWidth, this.maxWidth);
    this.heightConstrain = constrain(this.height, this.minHeight, this.maxHeight);

    push();
    imageMode(CENTER);
    image(this.hallwayImage, this.xConstrain, this.yConstrain, this.widthConstrain, this.heightConstrain);
    pop();
  }

  //Reset the hall's position
  resetPosition() {
    this.width = this.resetWidth;
    this.height = this.resetHeight;
    this.x = this.originX;
    this.y = this.originY;
  }

  //key pressed functionality
  keyPressed() {
    //S key
    if (keyCode === 83) {
      //Return to entrance
      state = 'Entrance';
      //Reset the room position and the hallway position
      entranceHouse.resetPosition();
      //Stop the white noise
      whiteNoiseSFX.stop();
      //Resume the house sound track
      houseSoundTrack.play();
      houseSoundTrack.loop();
    }
    //W key
    else if (keyCode === 87) {
      //Play foot step sfx
      indoorFootStepSFX.play();
      //Movement
      this.x += this.increaseX;
      this.y += this.increaseY;
      this.width += this.increaseWidth;
      this.height += this.increaseHeight;
    }
  }
}
