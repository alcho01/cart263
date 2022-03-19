//Contains the cinematic shot for the tower scene
class TowerScene extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //images
    this.sceneEImage1 = sceneEImage1;
    this.sceneEImage2 = sceneEImage2;
    this.sceneEImage3 = sceneEImage3;
  }

  //Display the animated background
  display() {
    //Call the super display
    super.display();
    push();
    imageMode(CENTER);
    //Use frame count to animate the background
    if (frameCount % 65 < 15 / 2) {
      image(this.sceneEImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 15 / 2) {
      image(this.sceneEImage2, this.x, this.y, this.width, this.height);
    } else if (frameCount % 25 < 15 / 2) {
      image(this.sceneEImage3, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super class
    super.keyPressed();
    //If the left arrow key is pressed go to the next state
    if (keyCode === 37) {
      //Go to the Tower state
    //  state = new Tower(1280, 720, 640, 360);
    }
    //If the escape key is pressed
    if (keyCode === 27) {
      //Return to the map
      state = new Map(1280, 720, 640, 360);
    }
  }
}
