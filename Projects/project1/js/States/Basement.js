//This class contains the basement info and interaction
//Display the basement as an animation flickering between both images
//Display the cube on the tv screen
class Basement extends Universal {
  constructor (w, h, x, y, basementImage1, basementImage2) {
    //extend from the universal class
    super(w, h, x, y);

    //images
    this.basementImage1 = basementImage1;
    this.basementImage2 = basementImage2;

    //Left Arm Constraints
    this.leftArm = {
      x: 262,
      x2: 363,
      y: 350,
      y2: 530,
    };
  }

  //Display the basement image as animated
  display() {
    push();
    imageMode(CENTER);
    if (frameCount % 120 < 15 / 2) {
      image(this.basementImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 30 < 15 / 2) {
      image(this.basementImage2, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //mouse functionality
  mouseClicked() {
    if (mouseX > this.leftArm.x && mouseX < this.leftArm.x2 ) {
      if (mouseY > this.leftArm.y && mouseY < this.leftArm.y2) {
        state = 'UntieLeftArm';
      }
    }
  }
}
