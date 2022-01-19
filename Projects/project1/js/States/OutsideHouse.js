//Everything related to "Outside House"
class OutsideHouse {
  constructor(w, h, outsideHouseImage) {
    //PARAMETERS FOR OUTSIDE OF HOUSE
    //position
    this.x = 400;
    this.y = 500;

    //dimensions
    this.width = w;
    this.height = h;

    //Increments
    this.increaseWidth = 200;
    this.increaseHeight = 200;

    //Constraints
    //Width Constraints
    this.minWidth = 800;
    this.maxWidth = 2000;
    //Height Constraints
    this.minHeight = 1000;
    this.maxHeight = 2000;

    //Image
    this.outsideHouseImage = outsideHouseImage;

    //Boundaries for the door
    this.doorX = 243;
    this.doorX2 = 568;
    this.doorY = 380;
    this.doorY2 = 946;
  }

  //display the outside of the house
  display() {
    //Add constraints to how close up you can get
    this.widthConstrain = constrain(this.width, this.minWidth, this.maxWidth);
    this.heightConstrain = constrain(this.height, this.minHeight, this.maxHeight);

    push();
    imageMode(CENTER);
    image(this.outsideHouseImage, this.x, this.y, this.widthConstrain, this.heightConstrain);
    pop();
  }

  //Increase the width and height everytime the "W" key is clicked
  keyPressed() {
    if (keyCode === 87) {
      footStepSFX.play();
      this.width += this.increaseWidth;
      this.height += this.increaseHeight;
    }
  }

  //Mouse functionality
  mouseClicked() {
    //If the width is equal or greater to the max width enter the house
    if (this.width >= this.maxWidth) {
      if (mouseX > this.doorX && mouseX < this.doorX2) {
        if (mouseY > this.doorY && mouseY < this.doorY2) {
          state = 'Entrance';
          //Sound Settings
          //sunkenPlaceSong.play();
          windSFX.stop();
          frontDoorSFX.play();
          houseSoundTrack.play();
          houseSoundTrack.loop();
        }
      }
    }
  }
}
