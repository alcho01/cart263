//This will include everything related to the living room
//The living room is the room on the left
//Display the cutscene of missyArmitage
//Display the user in the chair
//Key pressed events to toggle the next scene
//Mouse clicked event to enable clicking the chair
class LivingRoom extends Universal {
  constructor(w, h, x, y, livingRoomImage, inChairImage) {

    //extended from the universal class
    super(w, h, x, y);

    //images
    this.livingRoomImage = livingRoomImage;
    //When the chair is clicked
    this.inChairImage = inChairImage;
    //missy armitage sequence images
    this.missyArmitageImage = missyArmitageImage;
    this.missyArmitageImage2 = missyArmitageImage2;
    this.missyArmitageImage3 = missyArmitageImage3;

    //Boundaries for the chair
    this.chair = {
      x: 30,
      x2: 336,
      y: 546,
      y2: 825,
    };

    //text
    this.text = {
      x: 500,
      y: 150,
      size: 20,
      black: 0,
    };
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

  //Display the fact that the spacebar needs to be pressed to scroll through scenes
  displayAlert() {
    push();
    noStroke();
    textAlign(CENTER);
    fill(this.text.black);
    textSize(this.text.size);
    text('Press the spacebar, to scroll through scenes', this.text.x, this.text.y);
    pop();
  }

  //Display the missy Armitage sequence
  displayMissyArmitage() {
    push();
    imageMode(CENTER);
    if (frameCount % 60 < 10 / 2) {
      image(this.missyArmitageImage, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.missyArmitageImage2, this.x, this.y, this.width, this.height);
    } else if (frameCount % 30 < 10 / 2) {
      image(this.missyArmitageImage3, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //If the D key is pressed go back to the entrance
  keyPressed() {
    if (keyCode === 68) {
      state = 'Entrance';
      indoorFootStepSFX.play();
    }
  }

  //Spacebar to go to the next scene
  nextScene() {
    if (keyCode === 32) {
      state = 'Hypnosis';
      houseSoundTrack.stop();
      hypnosisSong.play();
    }
  }

  //Get up from the chair
  upFromChair() {
    //Escape Key
    if (keyCode === 27) {
      state = 'LivingRoom';
    }
  }

  //mouseclicked functionality
  mouseClicked() {
    if (mouseX > this.chair.x && mouseX < this.chair.x2) {
      if (mouseY > this.chair.y && mouseY < this.chair.y2) {
        state = 'InChair';
      }
    }
  }
}
