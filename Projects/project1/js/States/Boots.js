//Class containing the image and functionality of the boots
class Boots extends Universal {
  constructor(w, h, x, y, bootsImage1, bootsImage2, bootsImage3) {
    //Same parameters as the universal class
    super(w, h, x, y);

    //Progress of Unshackling
    this.progress = 0;
    //Increment the progress
    this.addProgress = 1;
    //Progress goal
    this.progressGoal = 8;
    //Is the goal met
    this.goalMet = false;

    //Images
    this.bootsImage1 = bootsImage1;
    this.bootsImage2 = bootsImage2;
    this.bootsImage3 = bootsImage3;
    this.currentImage = bootsImage1;
  }

  //Display the boots
  display() {
    push();
    imageMode(CENTER);
    image(this.currentImage, this.x, this.y, this.width, this.height);
    pop();

    //Check the progress
    this.trackProgress();
  }

  //Keep track of the progress to determine if the goal is met
  trackProgress() {
    //Check if the progress is equal to the goal
    if (this.progress === this.progressGoal) {
      this.progress = 0;
      //If it is display this image
      this.currentImage = this.bootsImage3;
      //Check if the goal is met
      this.goalMet = true;
      //Play the breathing SFX
      breathSFX.play();
    }
  }

  //Key pressed functionality
  keyPressed() {
    //W key
    if (keyCode === 87 && this.goalMet === false) {
      //Check if the W key is pressed to display this image
      this.currentImage = this.bootsImage2;
      //Add a progress point when this key is pressed
      this.progress = this.progress + this.addProgress;
      //Play the struggleSFX
      struggleSFX.play();
    }
    //S key
    else if (keyCode === 83 && this.goalMet === false) {
      //Check if the S key is pressed to display the image
      this.currentImage = this.bootsImage1;
      //Add a progress point when this key is pressed
      this.progress = this.progress + this.addProgress;
      //Play the struggleSFX
      struggleSFX.play();
    }
    //Up Arrow Key
    else if (keyCode === 38) {
      //Roll the Credits
      state = "Credits";
      //Play the intro/outro music
      titleTheme.play();
    }
  }
}
