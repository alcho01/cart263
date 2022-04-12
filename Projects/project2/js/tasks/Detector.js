//This is the fourth and final task - detector
//https://editor.p5js.org/Vanawy/sketches/uyjdyJ4hL
class Detector extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Starting
    this.start = 0;
    //Increment to move the radar dot
    this.increment = 1;

    //Boolean to determine the toggling of devices
    this.radarOn = false;

    //Parameters for the rotating radar dot
    this.radarDot = {
      x: 640,
      y: 360,
      width: 10,
      height: 10,
      radius: 250,
      r: 0,
      g: 255,
      b: 0,
    };

    //How many circles to start and to add
    this.numStartingCircles = 10;
    this.numAddedCircles = 5;

    //Colour value of the line and circles
    this.colourSet = {
      r: 0,
      g: 255,
      b: 0,
    };

    //Circle parameters
    this.circleParams = {
      x: 0,
      y: 0,
      size: 400,
      maxThickness: 10,
      minThickness: 0.1,
    };

    //Line parameters
    this.lineParams = {
      x: 0,
      y: 0,
      width: 600,
      height: 0,
      thickness: 2,
    };

    //Target (Rectangle) Parameters
    this.targetParams = {
      x: 880,
      y: 270,
      width: 10,
      height: 10,
      fill: 255,
    };

    //Target constraints
    this.targetConstraints = {
      x: 850,
      x2: 911,
      y: 241,
      y2: 302,
    };
  }

  //Display everything
  display() {
    super.display();

    background(0);

    this.target();

    this.radarHUD();

    this.displayRadarDot();

    this.radarChecker();

  }

  //Display a radar as part of the heads up display
  radarHUD() {
    if (this.radarOn === true) {
      push();
      //Don't fill the circles
      noFill();
      //Stroke colour of the circles and line
      stroke(this.colourSet.r, this.colourSet.g , this.colourSet.b);
      //Position
      translate(width / 2, height / 2);
      //How many circles will pulsate
      this.circles = this.numStartingCircles;
      //Keep a flowing and organic animation
      this.offset = frameCount % (400 / this.circles);
      //For the circles create a for loop to constantly produce pulsating circles
      for (let i = 0; i < this.circles + this.numAddedCircles; i++) {
        //Define the stroke weight of each circle
        strokeWeight(max((this.circles - i) / this.circleParams.maxThickness, this.circleParams.minThickness));
        //Apply the x, y, and size of each circle. Size increases slowly
        circle(this.circleParams.x, this.circleParams.y, this.offset + this.circleParams.size / this.circles * i);
      }
      //For the line, constantly rotate it
      rotate((-2 * PI) + (2 * PI) * (frameCount % 200) / 100);
      //Define the stroke weight of the line
      strokeWeight(this.lineParams.thickness);
      //Define the width of the line
      line(this.lineParams.x, this.lineParams.y, this.lineParams.width, this.lineParams.height);
      pop();
    }
  }

  //The hidden target
  target() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.targetParams.fill);
    rect(this.targetParams.x, this.targetParams.y, this.targetParams.width, this.targetParams.height);
    pop();
  }

  //The radar dot helps find the hidden target
  displayRadarDot() {
    if (this.radarOn === true) {
      push();
      //Remove the stroke
      noStroke();
      //Fill
      fill(this.radarDot.r, this.radarDot.g, this.radarDot.b);
      //Reuse the same x and y just change the starting position
      this.xUser = this.radarDot.x + this.radarDot.radius * cos(radians(this.start));
      this.yUser = this.radarDot.y + this.radarDot.radius * sin(radians(this.start));
      //Define the user spec
      ellipse(this.xUser, this.yUser, this.radarDot.width, this.radarDot.height);
      //Make the spec move
      this.start += this.increment;
      pop();
    }
  }

  //This checks when the radar dot comes in contact with the target 
  radarChecker() {
    let d = dist(this.xUser, this.yUser, this.targetParams.x, this.targetParams.y);
      if (d < this.targetParams.width / 2 + this.radarDot.width / 2) {
      detectorBeepSFX.play();
      console.log('hit');
    }
  }

  mouseClicked() {
    super.mouseClicked();
  }

  keyPressed() {
    super.keyPressed();

    //If the escape key is pressed...
    if (keyCode === 27) {
      //Return to the tower state
      state = new Tower(1280, 720, 640, 360);
    }
    //If the 0 key is pressed...
    if (keyCode === 48) {
      //Turn all devices off
      this.radarOn = false;
    }
    //If the 1 key is pressed...
    if (keyCode === 49) {
      //Turn the radar on
      this.radarOn = true;
    }
  }
}
