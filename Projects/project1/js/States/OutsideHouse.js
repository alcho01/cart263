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

    //Image
    this.outsideHouseImage = outsideHouseImage;

    //Boundaries for the door
    this.doorX = 340;
    this.doorX2 = 470;
    this.doorY = 439;
    this.doorY2 = 697;
  }

  //display the outside of the house
  display() {
    push();
    imageMode(CENTER);
    image(this.outsideHouseImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse functionality
  mouseClicked() {
    if (mouseX > this.doorX && mouseX < this.doorX2) {
      if (mouseY > this.doorY && mouseY < this.doorY2) {
        state = 'SunkenPlace';
        //sunkenPlaceSong.play();
        windSFX.stop();
        frontDoorSFX.play();
      }
    }
  }
}
