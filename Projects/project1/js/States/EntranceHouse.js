//Class containing the display of the entrance of the house
class EntranceHouse {
  constructor(w, h, entranceHouseImage) {
    //position
    this.x = 400;
    this.y = 500;

    //dimensions
    this.width = w;
    this.height = h;

    //Image
    this.entranceHouseImage = entranceHouseImage;
  }

  //Display the entrance
  display() {
    push();
    imageMode(CENTER);
    image(this.entranceHouseImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
