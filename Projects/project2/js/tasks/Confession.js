//This is the third task - Confession
class Confession extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Orbit Parameters
    this.orbParams = {
      radius: 75,
      distX: 0,
      distY: 0,
      width: width / 2,
      height: height / 2,
      white: 255,
    };

    //Universal Point/Node Parameters
    this.pointParams = {
      r: 0,
      g: 255,
      b: 247,
      width: 10,
      height: 10,
      //Positioning of the points
      leftX: 566,
      rightX: 716,
      topY: 285,
      bottomY: 435,
    };

    //Point Constraints
    //Left Point
    this.pointLeft = {
      x: 563,
      x2: 573,
      y: 356,
      y2: 366,
    };
    //Right Point
    this.pointRight = {
      x: 712,
      x2: 722,
      y: 356,
      y2: 366,
    };
    //Middle Point
    this.pointMiddle = {
      x: 636,
      x2: 646,
      y: 356,
      y2: 366,
    };
    //Top Point
    this.pointTop = {
      x: 636,
      x2: 646,
      y: 282,
      y2: 292,
    };
    //Bottom Point
    this.pointBottom = {
      x: 636,
      x2: 646,
      y: 432,
      y2: 442,
    };
  }

  //Display all the entities
  display() {
    //Call the super display
    super.display();
    //Background
    background(0);
    //Display the orbit
    this.createOrbit();
    //Display the points
    this.createNodes();
    //activate the confessions
    this.activateConfession();
  };


  //Create a simple sphere type shape with spheres
  createOrbit() {
    //Center Circle
    push();
    noFill();
    stroke(this.orbParams.white);
    ellipse(this.orbParams.width, this.orbParams.height, this.orbParams.radius * 2, this.orbParams.radius * 2);
    //Calculate the distance of the mouse and the width and heights of the orbit
    //Check to see if the mouse is in the radius range to perform orbital movement
    if (dist(mouseX, mouseY, this.orbParams.width, this.orbParams.height) < this.orbParams.radius) {
      this.orbParams.distX = dist(mouseX, this.orbParams.height, this.orbParams.width, this.orbParams.height);
      this.orbParams.distY = dist(this.orbParams.width, mouseY, this.orbParams.width, this.orbParams.height);
    }
    //Draw the two orbiting ellipses based on the distance parameters set above
    ellipse(this.orbParams.width, this.orbParams.height, this.orbParams.radius * 2, this.orbParams.distY * 2);
    ellipse(this.orbParams.width, this.orbParams.height, this.orbParams.distX * 2, this.orbParams.radius * 2);
    pop();
  }

  //Create distinct points around the orbit
  createNodes() {
    //Left Point
    push();
    noStroke();
    fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
    ellipse(this.pointParams.leftX, height / 2, this.pointParams.width, this.pointParams.height);
    pop();
    //Right Point
    push();
    noStroke();
    fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
    ellipse(this.pointParams.rightX, height / 2, this.pointParams.width, this.pointParams.height);
    pop();
    //Top Point
    push();
    noStroke();
    fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
    ellipse(width / 2, this.pointParams.topY, this.pointParams.width, this.pointParams.height);
    pop();
    //Bottom Point
    push();
    noStroke();
    fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
    ellipse(width / 2, this.pointParams.bottomY, this.pointParams.width, this.pointParams.height);
    pop();
    //Middle Point
    push();
    noStroke();
    fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
    ellipse(width / 2, height / 2, this.pointParams.width, this.pointParams.height);
    pop();
  }

  //Activate the confessions
  activateConfession() {
    if (mouseX > this.pointLeft.x && mouseX < this.pointLeft.x2) {
      if (mouseY > this.pointLeft.y && mouseY < this.pointLeft.y2) {
        console.log('west');
      }
    }
    if (mouseX > this.pointRight.x && mouseX < this.pointRight.x2) {
      if (mouseY > this.pointRight.y && mouseY < this.pointRight.y2) {

      }
    }
    if (mouseX > this.pointMiddle.x && mouseX < this.pointMiddle.x2) {
      if (mouseY > this.pointMiddle.y && mouseY < this.pointMiddle.y2) {

      }
    }
    if (mouseX > this.pointTop.x && mouseX < this.pointTop.x2) {
      if (mouseY > this.pointTop.y && mouseY < this.pointTop.y2) {

      }
    }
    if (mouseX > this.pointBottom.x && mouseX < this.pointBottom.x2) {
      if (mouseY > this.pointBottom.y && mouseY < this.pointBottom.y2) {

      }
    }
  }

  //mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();

  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If the escape key is pressed...
    if (keyCode === 27) {
      //Return to the shrine state
      state = new Shrine(1280, 720, 640, 360);
    }
  }
}
