//This will include everything related to the living room
class LivingRoom {
  constructor(w, h, livingRoomImage, inChairImage) {
    //position
    this.x = 400;
    this.y = 500;

    //dimensions
    this.width = w;
    this.height = h;

    //images
    this.livingRoomImage = livingRoomImage;
    //When the chair is clicked
    this.inChairImage = inChairImage;

    //Boundaries for the chair
    this.chairX = 30;
    this.chairX2 = 336;
    this.chairY = 546;
    this.chairY2 = 825;
  }

  //Display the living room
  display() {
    push();
    imageMode(CENTER);
    image(this.livingRoomImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the protagonist in chair
  displayInChair() {
    push();
    imageMode(CENTER);
    image(this.inChairImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //keypressed functionality
  keyPressed() {
    if (keyCode === 68) {
      state = 'Entrance';
      indoorFootStepSFX.play();
    }
  }

  //mouseclicked functionality
  mouseClicked() {
    if (mouseX > this.chairX && mouseX < this.chairX2) {
      if (mouseY > this.chairY && mouseY < this.chairY2) {
        state = 'InChair';
      }
    }
  }
}
