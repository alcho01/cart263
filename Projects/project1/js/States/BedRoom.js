//This class coresponds to the bedroom
class BedRoom {
  constructor(w, h, bedRoomImage) {
    //position
    this.x = 400;
    this.y = 500;

    //dimensions
    this.width = w;
    this.height = h;

    //Image
    this.bedRoomImage = bedRoomImage;
  }

  //Display the bedroom
  display() {
    push();
    imageMode(CENTER);
    image(this.bedRoomImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
