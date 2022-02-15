//The class containing the coagula or blob shape.
class Coagula extends Universal {
  constructor(w, h, x, y) {
    //Same parameters as the universal class
    super(w, h, x, y);

    //background color
    this.bgColor = 0;
    //Offset
    this.yOffset = 5;
    //Increments
    this.xOffIncrease = 0.1;
    this.yOffIncrease = 0.01;
    //Another part where the y offset needs to be increase. However, by a bit more.
    this.yOffIncrease2 = 0.04;
    this.iIncrease = 0.1;
    //Increase/decrease the coagula size
    this.coagulaIncrease = 5
    this.coagulaDecrease = -5
    //Increase the radius to a flash
    this.flash = 500;
    //Give the shape a radius
    this.radius = 50;
    //Timer in seconds
    this.timer = 107;
  }

  //Display the coagula
  display() {
    //Change the background color to black
    background(this.bgColor);
    //Keep it centered
    translate(width / 2, height / 2);
    //Begin the shape
    push();
    beginShape();
    //X offset
    this.xOffset = 5;
    //Create loop for the angle of the shape// to keep it more rounded
    for (let i = 0; i < TWO_PI; i += this.iIncrease) {
      //Apply noise for more organic looking movement
      this.offset = map(noise(this.xOffset, this.yOffset), 0, 1, -25, 25);
      //Add the offset and radius
      this.r = this.radius + this.offset;
      this.xBlob = this.r * cos(i);
      this.yBlob = this.r * sin(i);
      //Set the vertex
      vertex(this.xBlob, this.yBlob);
      //Define how sharp the edges look based on the xOffset
      this.xOffset += this.xOffIncrease;
    }
    //End the shape
    endShape();
    //Add coagulation. don't even know if that's a word. In other words add a little jiggle to the shape's yOffset
    this.yOffset += this.yOffIncrease;
    pop();
  }

  //Checks if the time is done
  checkTimer() {
    //Decrease the time by a second
    this.timer -= 1/60;
    //When the timer is near the end start ramping up the speed of its motion
    if (this.timer <= 15) {
      this.yOffset += this.yOffIncrease2;
    }
    //When the timer is a second before the end make it grow big to fill the screen and transition to the next state
    if (this.timer <= 1) {
      this.yOffset += this.yOffIncrease2;
      this.radius += this.flash;
    }
    //When the timer hits 0...
    if (this.timer <= 0) {
      this.timer = 0;
      //Change the state to Chris struggling
      state = 'UntieLeftArm';
      houseSoundTrack.play();
    }
  }

  //Play with the size of the coagula
  keyPressed() {
    if (keyCode === 38) {
      //Increase
      this.radius += this.coagulaIncrease;
      //Play the squelch SFX
      squelchSFX.play();
    }
    else if (keyCode === 40) {
      //Decrease
      this.radius += this.coagulaDecrease;
      //Play the squelch SFX
      squelchSFX.play();
    }
  }
}
