//Heart Monitor Setup
class HeartMonitor {
  constructor() {
    //Array
    this.line = [];
    //Control
    this.control = 0;

    //Mouse Position
    this.mouseYBlue = 120;
    this.mouseYRed = 650;

    //Stroke color
    this.strokeFill = {
    r: undefined,
    g: undefined,
    b: undefined,
  };
    //Stroke Color Blue
    this.strokeFillBlue = {
    r: 0,
    g: 213,
    b: 255,
  };
    //Stroke Color Red
    this.strokeFillRed = {
    r: 255,
    g: 64,
    b: 0,
  };
    //Stroke Color White
    this.strokeFillWhite = {
    r: 255,
    g: 255,
    b: 255,
  };
}

//Display the entire functionality of the line
  displayLine() {
    this.createLineShape();
    this.controlLineOutcome();
    this.controlStrokeColor();
  }

//Create the shape of the line
  createLineShape() {
    push();
    stroke(this.strokeFill.r, this.strokeFill.g, this.strokeFill.b);
    noFill();
    //Create a simple line that moves along the x axis
    beginShape();
    //Keep the line growing
    for (let i = 0; i < width; i++) {
      vertex(i, this.line[i]);
    }
    //Close the shape
    endShape();
  }

  //Control how the line looks
  controlLineOutcome() {
    //Control the peaks of the line with the mouse Y
    this.control = mouseY;
    //If the line length is less than the canvas width keep it moving forward
    if (this.line.length < width) this.line.push(this.control);
    //If the line reaches the end of the canvas continue to keep it moving. Don't make it stop.
    else this.line.shift();
  }

  //Control the stroke color
  controlStrokeColor() {
    //Blue
    if (mouseY <= this.mouseYBlue) {
      this.strokeFill.r = this.strokeFillBlue.r;
      this.strokeFill.g = this.strokeFillBlue.g;
      this.strokeFill.b = this.strokeFillBlue.b;
    }
    //Red
    else if (mouseY >= this.mouseYRed) {
      this.strokeFill.r = this.strokeFillRed.r;
      this.strokeFill.g = this.strokeFillRed.g;
      this.strokeFill.b = this.strokeFillRed.b;
    }
    //White
    else if (mouseY <= this.mouseYRed && mouseY >= this.mouseYBlue) {
      this.strokeFill.r = this.strokeFillWhite.r;
      this.strokeFill.g = this.strokeFillWhite.g;
      this.strokeFill.b = this.strokeFillWhite.b;
    }
  }
}
