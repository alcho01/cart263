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

    //TV Constraints
    this.television = {
      x: 270,
      x2: 530,
      y: 0,
      y2: 210,
    };

    //Cube parameters
    this.cube = {
      x: 383,
      y: 120,
      width: 20,
      height: 20,
      stroke: 255,
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

  //Cube on the TV screen
  cubeDisplay() {
    //Display the cube
    push();
    noFill();
    stroke(this.cube.stroke);
    rectMode(CENTER);
    rect(this.cube.x, this.cube.y, this.cube.width, this.cube.height);
    pop();
  }
}
