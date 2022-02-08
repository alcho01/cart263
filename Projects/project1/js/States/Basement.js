//This class contains the basement info and interaction
//Display the basement as an animation flickering between both images
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
      vx: 3,
      vy: 3,
      width: 20,
      height: 20,
      stroke: 255,
      //Min Constrain
      minX: 299,
      minY: 60,
      //Max Constrain
      maxX: 463,
      maxY: 190,
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
    //Add constrains to the cube so it can't go off the tv
    this.cubeHorizontalConstrain = constrain(this.cube.x, this.cube.minX, this.cube.maxX);
    this.cubeVerticalConstrain = constrain(this.cube.y, this.cube.minY, this.cube.maxY);
    //Display the cube
    push();
    noFill();
    stroke(this.cube.stroke);
    rectMode(CENTER);
    rect(this.cubeHorizontalConstrain, this.cubeVerticalConstrain, this.cube.width, this.cube.height);
    pop();
  }

  //Cube movement
  cubeMovement() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.cube.x = this.cube.x += this.cube.vx;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      this.cube.y = this.cube.y += this.cube.vy;
    }
    else if (keyIsDown(UP_ARROW)) {
      this.cube.y = this.cube.y -= this.cube.vy;
    }
    else if (keyIsDown(LEFT_ARROW)) {
      this.cube.x = this.cube.x -= this.cube.vx;
    }
  }

  //Zoom into the tv
  tvZoomIn() {
    if (mouseX > this.television.x && mouseX < this.television.x2) {
      if (mouseY > this.television.y && mouseY < this.television.y2) {

      }
    }
  }
}
