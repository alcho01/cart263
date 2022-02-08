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
    this.radio = {
      x: 254,
      x2: 375,
      y: 400,
      y2: 460,
    };

    //Boundaries for the door
    this.door = {
      x: 555,
      x2: 800,
      y: 0,
      y2: 433,
    };
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
    if (mouseX > this.radio.x && mouseX < this.radio.x2) {
      if (mouseY > this.radio.y && mouseY < this.radio.y2) {
        //Will play sound with responsive voice and static
        responsiveVoice.speak("Secret Code, Rotten");
        //Play the radio SFX
        radioStaticSFX.play();
      }
    }
    //Box Collision for door
    if (mouseX > this.door.x && mouseX < this.door.x2) {
      if (mouseY > this.door.y && mouseY < this.door.y2) {
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
