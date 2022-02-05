//This class contains the hallway scene.
class Hallway extends Universal {
  constructor(w, h, x, y, hallwayImage) {
    //Same parameters as the universal class
    super(w, h, x, y);

    //Image
    this.hallwayImage = hallwayImage;
  }

  //Display the hallway
  display() {
    push();
    imageMode(CENTER);
    image(this.hallwayImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //key pressed functionality
  keyPressed() {
    if (keyCode === 83) {
      //Return to entrance
      state = 'Entrance';
      //Reset the room position
      entranceHouse.resetPosition();
      //Stop the white noise
      whiteNoiseSFX.stop();
      //Resume the house sound track 
      houseSoundTrack.play();
      houseSoundTrack.loop();
    }
  }
}
