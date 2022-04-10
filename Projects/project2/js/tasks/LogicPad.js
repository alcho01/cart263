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
    this.reset = 0;
    //Increase the position of the spec
    this.increment = 1;
    //Starting position for the user spec
    this.userStart = 90;
    //Increase the position of the user spec
    this.userIncrement = 15;
    //Danger Zone - Triggers lose
    this.dangerZone = 750;
    //Set the timer to 35 seconds
    this.timer = 35;
    //Add a delay //3.5 seconds
    this.timeDelay = 3500;

    //Timer parameters
    this.timeParams = {
      x: 1200,
      y: 90,
      size: 25,
      white: 255,
    };

    //Winning Colour
    this.winColour = {
      r: 0,
      g: 255,
      b: 55,
    };

    //Losing Colour
    this.loseColour = {
      r: 255,
      g: 47,
      b: 0,
    };

    //Loop parameters
    this.loop = {
      x: 1200,
      y: 80,
      width: 2 * this.radius,
      height: 2 * this.radius,
      strokeFillR: 255,
      strokeFillG: 255,
      strokeFillB: 255,
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

    //Sidebar parameters
    this.sideBar = {
      x: 1203,
      y: 426,
      width: 120,
      height: 555,
      radius: 20,
      white: 255,
    };

    //Slider parameters
    this.slider = {
      x: 1203,
      x2: 1203,
      y: 200,
      y2: 650,
      strokeWeight: 10,
      black: 0,
    };

    //Handle parameters
    this.handle = {
      x: 1203,
      y: 400,
      width: 50,
      height: 50,
      black: 0,
      //Reset position of handle
      resetPos: 400,
      //Increase or decrease the position
      increment: 15,
      decrement: -15,
      //Constrain the handle to how far it can go on the slider
      constrainA: 202,
      constrainB: 650,
    };

    //Platform
    this.platform = {
      x: 0,
      y: 560,
      width: 150,
      height: 30,
      white: 255,
      //Constrain the platform
      constrainA: 125,
      constrainB: 975,
    };

    //gravity
    this.gravity = 0.0025;

    //Ball
    this.ball = {
      x: random(125, 1005),
      y: random(-300, -100),
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0,
      r: 232,
      g: 0,
      b: 0,
      maxSpeed: 10,
      size: 60,
    };
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
    //Check for collision between the specs
    this.checkCollison();
    //Display the sidebar
    this.displaySideBar();
    //Display the custom slider
    this.displaySlider();
    //Display the slider handle
    this.displayHandle();
    //Display the platform
    this.displayPlatform();
    //Move the platform
    this.movePlatform();
    //Display the ball
    this.ballSettings();
    //Check the timer
    this.checkTimer();
    //Display the timer
    this.displayTimer();
    //Display the walls
    this.displayWalls();
  }

  //Display a loop
  displayLoop() {
    push();
    //don't fill the circle keep it as a loop
    noFill();
    //Fill the stroke white
    stroke(this.loop.strokeFillR, this.loop.strokeFillG, this.loop.strokeFillB);
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

  //Check if the specs collide
  checkCollison() {
    //Calculate distance of specs
    this.d = dist(this.xUser, this.yUser, this.x, this.y);
    //Check to see if the specs collide
    if (this.d < this.spec.width / 2 + this.userSpec.width / 2) {
      //For testing purpose
      console.log("collide");
      //Trigger bad ending
      this.badEnd();
      //Reset the red spec to the original position
      this.start = this.reset;
    }
  }

  //Display Sidebar
  displaySideBar() {
    push();
    noStroke();
    fill(this.sideBar.white);
    rectMode(CENTER);
    rect(
      this.sideBar.x,
      this.sideBar.y,
      this.sideBar.width,
      this.sideBar.height,
      this.sideBar.radius
    );
    pop();
  }

  //Display Slider
  displaySlider() {
    push();
    strokeWeight(this.slider.strokeWeight);
    stroke(this.slider.black);
    line(this.slider.x, this.slider.y, this.slider.x2, this.slider.y2);
    pop();
  }

  //Display the slider handle
  displayHandle() {
    //Constraints
    this.yConstrain = constrain(
      this.handle.y,
      this.handle.constrainA,
      this.handle.constrainB
    );
    //Display the slider with the added constrain
    push();
    noStroke();
    fill(this.handle.black);
    ellipse(
      this.handle.x,
      this.yConstrain,
      this.handle.width,
      this.handle.height
    );
    pop();
  }

  //Move the slider handle up
  moveHandleUp() {
    this.handle.y = this.yConstrain += this.handle.decrement;
  }
  //Move the slider handle down
  moveHandleDown() {
    this.handle.y = this.yConstrain += this.handle.increment;
  }

  //Create walls
  displayWalls() {
    //Left Wall
    push();
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(60, height / 2, 20, height);
    pop();
    //RightWall Wall
    push();
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(1045, height / 2, 20, height);
    pop();
  }

  //display the platform
  displayPlatform() {
    push();
    noStroke();
    fill(this.platform.white);
    rectMode(CENTER);
    rect(
      this.platform.x,
      this.platform.y,
      this.platform.width,
      this.platform.height
    );
    pop();
  }

  //Move the platform
  movePlatform() {
    this.platform.x = constrain(
      mouseX,
      this.platform.constrainA,
      this.platform.constrainB
    );
  }

  //Ball functions grouped
  ballSettings() {
    this.displayBall();
    this.gravityBall();
    this.moveBall();
    this.bounceBall();
    this.collideBall();
  }

  //Display the ball
  displayBall() {
    push();
    noStroke();
    fill(this.ball.r, this.ball.g, this.ball.b);
    ellipse(this.ball.x, this.ball.y, this.ball.size);
    pop();
  }

  //Apply gravity to the ball
  gravityBall() {
    this.ball.ay = this.ball.ay + this.gravity;
  }

  //Let the ball move/fall
  moveBall() {
    this.ball.vx = this.ball.vx + this.ball.ax;
    this.ball.vy = this.ball.vy + this.ball.ay;

    //Constrain the ball
    this.ball.vx = constrain(
      this.ball.vx,
      -this.ball.maxSpeed,
      this.ball.maxSpeed
    );
    this.ball.vy = constrain(
      this.ball.vy,
      -this.ball.maxSpeed,
      this.ball.maxSpeed
    );

    //Apply the velocity to the ball
    this.ball.x = this.ball.x + this.ball.vx;
    this.ball.y = this.ball.y + this.ball.vy;

    //Make the ball bounce off the boundaries
    if (this.ball.x > 1005 || this.ball.x < 85) {
      this.ball.vx *= -1;
    }
  }

  //let the ball bounce on impact with the platform
  bounceBall() {
    if (
      this.ball.x > this.platform.x - this.platform.width / 2 &&
      this.ball.x < this.platform.x + this.platform.width / 2 &&
      this.ball.y + this.ball.size / 2 >
        this.platform.y - this.platform.height / 2 &&
      this.ball.y + this.ball.size / 2 <
        this.platform.y + this.platform.height / 2
    ) {
      //Bounce
      let dx = this.ball.x - this.platform.x;
      this.ball.vx =
        this.ball.vx +
        map(dx, -this.platform.width / 2, this.platform.width / 2, -8, 8); //MORE BOUNCE

      this.ball.vy = -this.ball.vy;
      this.ball.ay = 0;
    }
  }

  //Check if the ball collides with the platform
  collideBall() {
    let d = dist(this.platform.x, this.platform.y, this.ball.x, this.ball.y);
    if (d < this.ball.size / 2 + this.platform.width / 2) {
      this.handle.y = this.handle.resetPos;
    }
  }

  //Trigger good end
  goodEnd() {
    //If the timer goes off after the 35 seconds you win
    state = new Win(1280, 720, 640, 360);
    //Toggle task 2 to done
    task2Done = true;
  }

  //Trigger bad end - Might not need this
  badEnd() {
    state = new Lose(1280, 720, 640, 360);
  }

  //Display the timer
  displayTimer() {
    push();
    noStroke();
    fill(this.timeParams.white);
    textFont(dialogueFont);
    textSize(this.timeParams.size);
    textAlign(CENTER);
    text(round(this.timer), this.timeParams.x, this.timeParams.y);
    pop();
  }

  //check the time
  checkTimer() {
    //Countdown by 1 second
    this.timer -= 1 /60;
    //Check if the time hits 0
    if (this.timer <= 0) {
      this.timer = 0;
      console.log('Win');
      //Call this function
      this.goodEnd();
    }
  }

  //Return to the lab state
  returnLab() {
    state = new Lab(1280, 720, 640, 360);
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If the escape key is pressed...
    if (keyCode === 27) {
      //Return to the lab state
      state = new Lab(1280, 720, 640, 360);
    }
    //If the W key is pressed the handle goes up
    if (keyCode === 87 && this.handle.y >= this.handle.constrainA) {
      this.moveHandleUp();
      this.userStart += this.userIncrement;
    }
    //If the S key is pressed the handle goes down
    if (keyCode === 83 && this.handle.y <= this.handle.constrainB) {
      this.moveHandleDown();
      this.userStart -= this.userIncrement;
    }
  }
}
