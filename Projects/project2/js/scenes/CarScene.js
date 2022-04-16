//This class contains the car scene
class CarScene extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Load up the image sequence
    this.sceneFImage1 = sceneFImage1;
    this.sceneFImage2 = sceneFImage2;
    this.sceneFImage3 = sceneFImage3;
  }

  //Display the animated background
  display() {
    //Call the super display
    super.display();
    push();
    imageMode(CENTER);
    //Use frame count to animate the background
    if (frameCount % 65 < 15 / 2) {
      image(this.sceneFImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 15 / 2) {
      image(this.sceneFImage2, this.x, this.y, this.width, this.height);
    } else if (frameCount % 25 < 15 / 2) {
      image(this.sceneFImage3, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super class
    super.keyPressed();
    //If the left arrow key is pressed change states
    if (keyCode === 37) {
      //Go to the dad's house
      //state = new DadHome(1280, 720, 640, 360);
    }
  }
}
