//This will include everything related to the living room
class LivingRoom {
  constructor(w, h, livingRoomImage) {
    //position
    this.x = 400;
    this.y = 500;

    //dimensions
    this.width = w;
    this.height = h;

    //image
    this.livingRoomImage = livingRoomImage;
  }

  //Display the living room
  display() {
    push();
    imageMode(CENTER);
    image(this.livingRoomImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //keypressed functionality
  keyPressed() {
    if (keyCode === 68) {
      state = 'Entrance';
    }
  }
}
