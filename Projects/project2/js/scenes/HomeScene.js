//Contains the cinematic shot for the home scene
//Display the images in an animated way due to framecount
//Add a key pressed event to change the current state
//The key pressed will also impact the sound fx system
class HomeScene extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //images
    this.sceneBImage1 = sceneBImage1;
    this.sceneBImage2 = sceneBImage2;
    this.sceneBImage3 = sceneBImage3;
  }

  //Display the animated background
  display() {
    //Call the super display
    super.display();
    push();
    imageMode(CENTER);
    //Use frame count to animate the background
    if (frameCount % 70 < 15 / 2) {
      image(this.sceneBImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 45 < 15 / 2) {
      image(this.sceneBImage2, this.x, this.y, this.width, this.height);
    } else if (frameCount % 25 < 15 / 2) {
      image(this.sceneBImage3, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super class
    super.keyPressed();
    //If the left arrow key is pressed go to the next state
    if (keyCode === 37) {
      //Go to the home state
      state = new Home(1280, 720, 640, 360);
      //stop the wind sound
      windSFX.stop();
    }
  }
}
