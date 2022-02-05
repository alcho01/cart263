//This class coresponds to the bedroom
//Display the bedroom image
//Give mouse functionality
class BedRoom extends Universal {
  constructor(w, h, x, y, bedRoomImage) {

    //extended from the universal class
    super(w, h, x, y);

    //Image
    this.bedRoomImage = bedRoomImage;

    //Boundaries for the radio
    this.radioX = 254;
    this.radioX2 = 375;
    this.radioY = 400;
    this.radioY2 = 460;

    //Boundaries for the door
    this.doorX = 555;
    this.doorX2 = 800;
    this.doorY = 0;
    this.doorY2 = 433;
  }

  //Display the bedroom
  display() {
    push();
    imageMode(CENTER);
    image(this.bedRoomImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Mouse Clicked functionality
  mouseClicked() {
    //Box Collision for radio
    if (mouseX > this.radioX && mouseX < this.radioX2) {
      if (mouseY > this.radioY && mouseY < this.radioY2) {
        //Will play sound with responsive voice and static
        responsiveVoice.speak("Secret Code, Rotten");
        //Play the radio SFX
        radioStaticSFX.play();
      }
    }
    //Box Collision for door
    if (mouseX > this.doorX && mouseX < this.doorX2) {
      if (mouseY > this.doorY && mouseY < this.doorY2) {
        //Change state to the entrance
        state = 'Entrance';
        //Play the door SFX
        frontDoorSFX.play();
        //Reset the position of this room so it isn't zoomed in
        entranceHouse.resetPosition();
        //Enable the movement
        entranceHouse.keyPressed();
      }
    }
  }
}
