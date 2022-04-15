//This is the fourth and final task - detector
//RADAR INSPIRATION: https://editor.p5js.org/Vanawy/sketches/uyjdyJ4hL
//Display a selection bar that functions with the key pressed function
//When a key from 0 to 2 is pressed will activate the required tool
//Display the hidden target
//Create a radar system which is basically an aesthetic only purpose
//Create a radar dot that rotates around the radar system. When it comes in contact with the hidden target it beeps notifying the user of the potential location of the target.
//Display the closers
//With the mouse and closers selected it will create a cross intersection when the mouse is in the perfect location.
//When the intersection forms the mouse clicked function is used to be able to click on the intersected point and complete the task.

/*DESCRIPTION OF THE GAME

Difficulty - Easy to Intermediate

The goal of the task is to find the hidden target.
It is best to start with the radar system to approximate the hidden target's location.
A sound will go off notifying the user of the approximate location.
After the radar system is used, proceed with the closers.
The closers is utilized to locate the location more specifically with the already given intel from the radar system.
Once the closers line up correctly via the mouse position, two intersecting lines will display.
When they display, the user will need to click the intersecting point of the lines to complete the task.
A sound will go off and the user will be brought back to the previous state.

This information can be found in the journal along with a simple diagram.
*/
class Detector extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Set the background colour
    this.bgColour = 0;

    //Selection bar parameters
    this.selectionBarParams = {
      x: 560,
      y: 410,
      width: 1100,
      height: 600,
    };

    //Images
    this.selectionBarImage = selectionBarImage;
    this.selectionBarImage2 = selectionBarImage2;
    this.selectionBarImage3 = selectionBarImage3;
    this.selectionBarImage4 = selectionBarImage4;

    //Starting
    this.start = 0;
    //Increment to move the radar dot
    this.increment = 1;

    //Boolean to determine the toggling of devices
    this.emptyOn = false;
    this.radarOn = false;
    this.closersOn = false;
    this.linedUp = false;

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
      fill: 0,
    };

    //Target constraints
    this.targetConstraints = {
      x: 877,
      x2: 890,
      y: 265,
      y2: 277,
    };

    //Closer parameters
    this.closerParams = {
      //One x is for the right side the other is for the left side
      x: 0,
      x2: 1280,
      //One y is for the top the other is for the bottom
      y: 0,
      y2: 720,
      //One width is for the closers on the x axis while the other width is for the y axis
      width: 10,
      width2: 20,
      //One height is for the closers on the x axis while the other height is for the y axis
      height: 10,
      height2: 20,
      fill: 255,
    };

    //Line intersectors parameters
    this.lineIntersectorParams = {
      //Horizontal Line
      x: 0,
      x2: 1280,
      y: 270,
      y2: 270,
      //Vertical Line
      x3: 880,
      x4: 880,
      y3: 0,
      y4: 720,
      //Colour
      fill: 255,
      //Stroke weight
      thickness: 2,
    };
  }

  //Display everything
  display() {
    //Call the super display
    super.display();
    //Set the background
    background(this.bgColour);
    //Display the hidden target
    this.target();
    //Display the radar system
    this.radar();
    //Display the radar dot
    this.displayRadarDot();
    //activate the radar checker
    this.radarChecker();
    //Display the closers
    this.closers();
    //Activate the closer checker
    this.closerChecker();
    //Display the line intersectors
    this.lineIntersectors();
    //Display the selection bar
    this.selectionBar();
  }

  //Display the selection bar
  selectionBar() {
    push();
    imageMode(CENTER);
    image(this.selectionBarImage, this.selectionBarParams.x, this.selectionBarParams.y, this.selectionBarParams.width, this.selectionBarParams.height);
    pop();
    //Display this image if empty on is true
    if (this.emptyOn === true) {
      push();
      imageMode(CENTER);
      image(this.selectionBarImage2, this.selectionBarParams.x, this.selectionBarParams.y, this.selectionBarParams.width, this.selectionBarParams.height);
      pop();
    }
    //Display this image if radar on is true
    if (this.radarOn === true) {
      push();
      imageMode(CENTER);
      image(this.selectionBarImage3, this.selectionBarParams.x, this.selectionBarParams.y, this.selectionBarParams.width, this.selectionBarParams.height);
      pop();
    }
    //Display this image if closers on is true
    if (this.closersOn === true) {
      push();
      imageMode(CENTER);
      image(this.selectionBarImage4, this.selectionBarParams.x, this.selectionBarParams.y, this.selectionBarParams.width, this.selectionBarParams.height);
      pop();
    }
  }

  //Display a radar as part of the heads up display
  radar() {
    //If the radar on is true...
    if (this.radarOn === true) {
      //Display the radar
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
    //If the radar on is true...
    if (this.radarOn === true) {
      //display the radar dot
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
    //Calculate the distance between the radar dot and the hidden target
    let d = dist(this.xUser, this.yUser, this.targetParams.x, this.targetParams.y);
      //When they come in contact...
      if (d < this.targetParams.width / 2 + this.radarDot.width / 2) {
        //Play the beeping sound to notify the user of the target's suggested location
        detectorBeepSFX.play();
        console.log('hit');
      }
    }

  //Display the closers. Closers will narrow down where the target is. The user will use information acquired from the radar to use this tool.
  closers() {
    //If the closers on is true...
    if (this.closersOn === true) {
      //Display each closer
      //Left Side
      push();
      rectMode(CENTER);
      noStroke();
      fill(this.closerParams.fill);
      rect(this.closerParams.x, mouseY, this.closerParams.width, this.closerParams.height2);
      pop();
      //Right Side
      push();
      rectMode(CENTER);
      noStroke();
      fill(this.closerParams.fill);
      rect(this.closerParams.x2, mouseY, this.closerParams.width, this.closerParams.height2);
      pop();
      //Top
      push();
      rectMode(CENTER);
      noStroke();
      fill(this.closerParams.fill);
      rect(mouseX, this.closerParams.y, this.closerParams.width2, this.closerParams.height);
      pop();
      //Bottom
      push();
      rectMode(CENTER);
      noStroke();
      fill(this.closerParams.fill);
      rect(mouseX, this.closerParams.y2, this.closerParams.width2, this.closerParams.height);
      pop();
    }
  }

  //When the closers are lined up correctly the line intersectors will display
  lineIntersectors() {
    //If the closers are lined up correctly...
    if (this.closersOn === true && this.linedUp === true) {
      //Display the Horizontal Line
      push();
      stroke(this.lineIntersectorParams.fill);
      strokeWeight(this.lineIntersectorParams.thickness);
      line(this.lineIntersectorParams.x, this.lineIntersectorParams.y, this.lineIntersectorParams.x2, this.lineIntersectorParams.y2);
      pop();
      //Display the Vertical Line
      push();
      stroke(this.lineIntersectorParams.fill);
      strokeWeight(this.lineIntersectorParams.thickness);
      line(this.lineIntersectorParams.x3, this.lineIntersectorParams.y3, this.lineIntersectorParams.x4, this.lineIntersectorParams.y4);
      pop();
    }
  }

  //Checks if the mouse is in the correct location
  closerChecker() {
    //If the closer tool is activated...
    if (this.closersOn === true) {
      //And if the mouse is in the desired position...
      if (mouseX > this.targetConstraints.x && mouseX < this.targetConstraints.x2) {
        if (mouseY > this.targetConstraints.y && mouseY < this.targetConstraints.y2) {
          //This boolean activates to display the intersection
          this.linedUp = true;
        }
      }
    }
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Add a click box for the target
    if (mouseX > this.targetConstraints.x && mouseX < this.targetConstraints.x2) {
      if (mouseY > this.targetConstraints.y && mouseY < this.targetConstraints.y2) {
        //Toggle task 4 to complete
        task4Done = true;
        //Play the connected sfx
        connectedSFX.play();
        //Return to the tower
        state = new Tower(1280, 720, 640, 360);
        console.log('found');
      }
    }
  }

  keyPressed() {
    //Call the super key pressed
    super.keyPressed();

    //If the escape key is pressed...
    if (keyCode === 27) {
      //Return to the tower state
      state = new Tower(1280, 720, 640, 360);
    }
    //If the 0 key is pressed...
    if (keyCode === 48) {
      //Turn all devices off
      this.emptyOn = true;
      this.radarOn = false;
      this.closersOn = false;
    }
    //If the 1 key is pressed...
    if (keyCode === 49) {
      //Turn the radar on
      this.radarOn = true;
      this.emptyOn = false;
      this.closersOn = false;
    }
    //If the 2 key is pressed...
    if (keyCode === 50) {
      //Turn the closers on
      this.closersOn = true;
      this.emptyOn = false;
      this.radarOn = false;
    }
  }
}
