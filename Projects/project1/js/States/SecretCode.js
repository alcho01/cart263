//This class contains the secret code.
//Display the secret code.
//Exit out of the secret code screen.
//Unlock the basement door.
class SecretCode extends Universal {
  constructor(w, h, x, y, secretCodeImage) {

    //extended from the universal class
    super(w, h, x, y);

    //image
    this.secretCodeImage = secretCodeImage;
  }

  //Display the secret code image
  display() {
    push();
    imageMode(CENTER);
    image(this.secretCodeImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Key pressed functionality to exit out of the screen
  keyPressed() {
    if (keyCode === 27) {
      state = 'Entrance';
      //Reset the position of this room so it isn't zoomed in
      entranceHouse.width = entranceHouse.resetWidth;
      entranceHouse.height = entranceHouse.resetHeight;
      entranceHouse.x = entranceHouse.origin;
      //Enable the movement
      entranceHouse.keyPressed();
    }
  }
}
