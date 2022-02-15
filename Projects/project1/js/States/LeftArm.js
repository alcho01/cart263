//This Class contains information related to the left arm
class LeftArm extends Universal {
  constructor(w, h, x, y, leftArmImage1, leftArmImage2, leftArmImage3) {
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
    this.leftArmImage1 = leftArmImage1;
    this.leftArmImage2 = leftArmImage2;
    this.leftArmImage3 = leftArmImage3;
    this.currentImage = leftArmImage1;
  }

  //Display the left arm tied
  display() {
    push();
    imageMode(CENTER);
    image(this.currentImage, this.x, this.y, this.width, this.height);
    pop();

    //Check the progress
    this.trackProgress();
  }

  //Track the progress to check if the goal is met
  trackProgress() {
    //Check if the progress is equal to the goal
    if (this.progress === this.progressGoal) {
      this.progress = 0;
      //If it is display this image
      this.currentImage = this.leftArmImage3;
      //Check if the goal is met
      this.goalMet = true;
      //Play the breathing SFX
      breathSFX.play();
    }
  }

  //Key pressed functionality
  keyPressed() {
    //D key
    if (keyCode === 68 && this.goalMet === false) {
      //Check if the D key is pressed to display this image
      this.currentImage = this.leftArmImage1;
      //Add a progress point when this key is pressed
      this.progress = this.progress + this.addProgress;
      //Play the struggleSFX
      struggleSFX.play();
    }
    //A key
    else if (keyCode === 65 && this.goalMet === false) {
      //Check if the A key is pressed to display the image
      this.currentImage = this.leftArmImage2;
      //Add a progress point when this key is pressed
      this.progress = this.progress + this.addProgress;
      //Play the struggleSFX
      struggleSFX.play();
    }
    //Left Arrow Key
    else if (keyCode === 39) {
      //Go to the right arm
      state = 'UntieRightArm';
    }
  }
}
