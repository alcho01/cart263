//This is the fourth and final task - detector
//https://editor.p5js.org/Vanawy/sketches/uyjdyJ4hL
class Detector extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

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
    }
  }

  //Display everything
  display() {
    super.display();

    background(0);

    this.radarHUD();
  }

  //Display a radar as part of the heads up display
  radarHUD() {
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
    rotate((-4 * PI) + (4 * PI) * (frameCount % 100) / 100);
    //Define the stroke weight of the line
    strokeWeight(this.lineParams.thickness);
    //Define the width of the line
    line(this.lineParams.x, this.lineParams.y, this.lineParams.width, this.lineParams.height);
    pop();
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
  }
}
