//This is the main simulation which occurs right after the title screen
class Simulation {
  constructor(w, h, fallingImage1, fallingImage2, fallingImage3) {
    //Position
    this.x = 400;
    this.y = 500;

    //Dimensions
    this.width = w;
    this.height = h;

    //Fill black
    this.black = 0;

    //Image parameters

    //Image position
    this.imageX = 400;
    this.imageY = -100;

    //Image velocity for the y
    this.imageVY = 0;

    //Image speed
    this.imageSpeed = 0.45;

    //Image dimensions
    this.imageWidth = 500;
    this.imageHeight = 500;

    //Images
    this.fallingImage1 = fallingImage1;
    this.fallingImage2 = fallingImage2;
    this.fallingImage3 = fallingImage3;


  }

  //Display the black rectangle
  display() {
    push();
    rectMode(CENTER);
    fill(this.black);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the character falling
  displayCharacter() {
    push();
    imageMode(CENTER);
    //Depending on frame count will alter the image making it look animated // Also gives off a bit of a flicker
    if (frameCount % 80 < 35 / 2) {
      image(this.fallingImage1, this.imageX, this.imageY, this.imageWidth, this.imageHeight);
    } else if (frameCount % 40 < 35 / 2) {
      image(this.fallingImage2, this.imageX, this.imageY, this.imageWidth, this.imageHeight);
    } else if (frameCount % 20 < 35 / 2) {
      image(this.fallingImage3, this.imageX, this.imageY, this.imageWidth, this.imageHeight);
    }
    pop();
  }

  //The movement of the character (not interactive)
  characterMovement() {
    //Give the velocity a random speed
    this.imageVY = this.imageSpeed;

    //Add them to the y position for movement
    this.imageY = this.imageY + this.imageVY;
  }

  //If the key is pressed change the tempo of the soundtrack, change the speed at which the character falls.
  keyPressed() {
    //Give a specified key to be pressed (1)
    if (keyCode === 49 && state === 'Simulation') {
      //Determine the playback speed (SLOW)
      simulationSong.rate(0.5);
      //Determine the speed at which the character falls (SLOW)
      this.imageSpeed = 0.15;
    }
    //Give a specified key to be pressed (2)
    else if (keyCode === 50 && state === 'Simulation') {
      //Determine the playback speed (NORMAL)
      simulationSong.rate(1);
      //Determine the speed at which the character falls (NORMAL)
      this.imageSpeed = 0.45;
    }
    //Give a specified key to be pressed (3)
    else if (keyCode === 51 && state === 'Simulation') {
      //Determine the playback speed (FAST)
      simulationSong.rate(1.5);
      //Determine the speed at which the character falls (FAST)
      this.imageSpeed = 0.85;
    }
  }
}
