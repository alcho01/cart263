//This is the task when clicking on the machine - Logic Pad
//
//https://p5js.org/reference/#/p5/radians
//https://p5js.org/reference/#/p5/cos
//https://p5js.org/reference/#/p5/sin
//https://editor.p5js.org/pippinbarr/sketches/vHseqXxOh
//https://p5js.org/examples/math-sine-cosine.html
class LogicPad extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Radius
    this.radius = 50;
    //Starting position for the spec
    this.start = 0;
    //Increase the position of the spec
    this.increment = 1;
    //Starting position for the user spec
    this.userStart = 100;
    //Increase the position of the user spec
    this.userIncrement = 15;

    //Loop parameters
    this.loop = {
      x: 1200,
      y: 80,
      width: 2 * this.radius,
      height: 2 * this.radius,
      strokeFill: 255,
      strokeWeight: 10,
    };

    //Spec parameters
    this.spec = {
      width: 10,
      height: 10,
      r: 252,
      g: 3,
      b: 19,
    };

    //User Spec parameters
    this.userSpec = {
      width: 10,
      height: 10,
      r: 3,
      g: 198,
      b: 252,
    };

    //Images
  }

  //Display the entire task
  display() {
    //Call the super display
    super.display();
    //Set background fill
    background(0);

    //Display the loop
    this.displayLoop();
    //Display the user spec
    this.displayUserSpec();
    //Display the spec
    this.displaySpec();
  }

  //Display a loop
  displayLoop() {
    push();
    //don't fill the circle keep it as a loop
    noFill();
    //Fill the stroke white
    stroke(this.loop.strokeFill);
    //Had weight to the stroke
    strokeWeight(this.loop.strokeWeight);
    //Define the loop
    ellipse(this.loop.x, this.loop.y, this.loop.width, this.loop.height);
    pop();
  }

  //Display a spec that rotates around the loop
  displaySpec() {
    push();
    //Remove the stroke
    noStroke();
    //Fill it red
    fill(this.spec.r, this.spec.g, this.spec.b);
    //Required this for circular motion around the loop
    //Cos is directed for horizontal movement
    //Sin is directed for vertical movement
    this.x = this.loop.x + this.radius * cos(radians(this.start));
    this.y = this.loop.y + this.radius * sin(radians(this.start));
    //Define the spec
    ellipse(this.x, this.y, this.spec.width, this.spec.height);
    //Make the spec move
    this.start += this.increment;
    pop();
  }

  //Display the spec that the user controls
  displayUserSpec() {
    push();
    //Remove the stroke
    noStroke();
    //Fill it blue
    fill(this.userSpec.r, this.userSpec.g, this.userSpec.b);
    //Reuse the same x and y just change the starting position
    this.xUser = this.loop.x + this.radius * cos(radians(this.userStart));
    this.yUser = this.loop.y + this.radius * sin(radians(this.userStart));
    //Define the user spec
    ellipse(this.xUser, this.yUser, this.userSpec.width, this.userSpec.height);
    pop();
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If the A key is pressed move the blue spec location
    if (keyCode === 65) {
      //Increase the user position 
      this.userStart += this.userIncrement;
    }
  }
}
