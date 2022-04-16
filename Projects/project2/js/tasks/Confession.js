//This is the third task - Confession
//Create an orbit built from three ellipses for aesthetic purposes only and to demonstrate a fake 3d kind of effect
//Display 5 nodes - 4 around the orbit - 1 in the center. Show them based on the boolean system attached to them and hide them when the answer via annyang is guessed correctly
//Display the scrambled letters to figure out the sentence. Again a boolean system is attached to the scrambled letters.
//Include a function to check if the answers are correct. If it is correct the node will disappear notifying the user.
//Add an ending function to return to the previous state
//Add a mouse clicked function, so when a node is clicked it will display the scrambled letters and activate the specific answer it is looking for.

/*DESCRIPTION OF THE GAME

Difficulty - Easy (TO ME)
The goal of the game is to unscramble the words to formulate a sentence.
The user should start by clicking on the 4 nodes surrounding the orbit.
Each node will have letters to unscramble to form english words.
To unscramble the word use your voice to guess the answer, when the answer is correct the node will disappear.
Once all surrounding nodes are guessed correctly(Hidden), the user can click the center node to guess the final sentence.
When the final sentence is guessed correctly it will revert to the previous state.

This information can be found in the journal along with a simple diagram.
*/

class Confession extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Set the background colour
    this.bgColour = 0;

    //Timer delay 1 second
    this.timeDelay = 1000;

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

    //Booleans to show or hide nodes
    this.nodeLeft = true;
    this.nodeRight = true;
    this.nodeTop = true;
    this.nodeBottom = true;
    this.nodeMiddle = true;
    //Booleans to check for clicks
    this.west = false;
    this.east = false;
    this.north = false;
    this.south = false;
    this.middle = false;

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

    //Text parameters
    this.textParams = {
      size: 32,
      fill: 255,
    };

    //Final sentence rgb values
    this.finalSentence = {
      r: 0,
      g: 194,
      b: 68,
    };
  }

  //Display all the entities
  display() {
    //Call the super display
    super.display();
    //Background
    background(this.bgColour);
    //Display the orbit
    this.createOrbit();
    //Display the points
    this.createNodes();
    //Display the question from the middle node
    this.displayMiddle();
    //Display the scrambled words
    this.displayWestScrambler();
    this.displayEastScrambler();
    this.displayNorthScrambler();
    this.displaySouthScrambler();
    //Display the final sentence
    this.displayFinalSentence();
    //Check the answers
    this.checkAnswer();
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
    if (this.nodeLeft === true) {
      push();
      noStroke();
      fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
      ellipse(this.pointParams.leftX, height / 2, this.pointParams.width, this.pointParams.height);
      pop();
    }
    //Right Point
    if (this.nodeRight === true) {
      push();
      noStroke();
      fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
      ellipse(this.pointParams.rightX, height / 2, this.pointParams.width, this.pointParams.height);
      pop();
    }
    //Top Point
    if (this.nodeTop === true) {
      push();
      noStroke();
      fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
      ellipse(width / 2, this.pointParams.topY, this.pointParams.width, this.pointParams.height);
      pop();
    }
    //Bottom Point
    if (this.nodeBottom === true) {
      push();
      noStroke();
      fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
      ellipse(width / 2, this.pointParams.bottomY, this.pointParams.width, this.pointParams.height);
      pop();
    }
    //Middle Point
    if (this.nodeMiddle === true) {
      push();
      noStroke();
      fill(this.pointParams.r, this.pointParams.g, this.pointParams.b);
      ellipse(width / 2, height / 2, this.pointParams.width, this.pointParams.height);
      pop();
    }
  }

  //Display the west scrambled letters
  displayWestScrambler() {
    //If the west node is clicked display the scrambled sentence
    if (this.west === true) {
      push();
      textAlign(CENTER);
      textSize(this.textParams.size);
      fill(this.textParams.fill);
      text('i m a', width / 3 , height / 2);
      pop();
    }
  }
  //Display the east scrambled letters
  displayEastScrambler() {
    //If the east node is clicked display the scrambled sentence
    if (this.east === true) {
      push();
      textAlign(CENTER);
      textSize(this.textParams.size);
      fill(this.textParams.fill);
      text('r y o r s', width / 1.5 , height / 2);
      pop();
    }
  }
  //Display the north scrambled letters
  displayNorthScrambler() {
    //If the north node is clicked display the scrambled sentence
    if (this.north === true) {
      push();
      textAlign(CENTER);
      textSize(this.textParams.size);
      fill(this.textParams.fill);
      text('o r f a h w t', width / 2 , height / 3);
      pop();
    }
  }
  //Display the south scrambled letters
  displaySouthScrambler() {
    //If the south node is clicked display the scrambled sentence
    if (this.south === true) {
      push();
      textAlign(CENTER);
      textSize(this.textParams.size);
      fill(this.textParams.fill);
      text('d i d i', width / 2 , height / 1.5);
      pop();
    }
  }
  //Display the middle question
  displayMiddle() {
    //If the middle node is clicked display the scrambled sentence
    if (this.middle === true) {
      push();
      textAlign(CENTER);
      textSize(this.textParams.size);
      fill(this.textParams.fill);
      text('What is the sentence?', width / 2 , height / 4);
      pop();
    }
  }
  //Display final sentence
  displayFinalSentence() {
    //If the middle node is clicked and the answer via annyang is correct display the final sentence
    if (currentResponse === this.answer && this.middle === true) {
      push();
      textAlign(CENTER);
      textSize(this.textParams.size);
      fill(this.finalSentence.r, this.finalSentence.g, this.finalSentence.b);
      text('I am sorry for what I did', width / 2 , height / 3.5);
      pop();
    }
  }

  //Check to see if the answers are correct
  checkAnswer() {
    //Check to see if the response via annyang is the same as the answer
    if (currentResponse === this.answer && this.west === true) {
      //Hide the node to notify the user it is correct
      this.nodeLeft = false;
      //Reset the current response
      currentResponse = '';
    }
    //Check to see if the response via annyang is the same as the answer
    if (currentResponse === this.answer && this.east === true) {
      //Hide the node to notify the user it is correct
      this.nodeRight = false;
      //Reset the current response
      currentResponse = '';
    }
    //Check to see if the response via annyang is the same as the answer
    if (currentResponse === this.answer && this.north === true) {
      //Hide the node to notify the user it is correct
      this.nodeTop = false;
      //Reset the current response
      currentResponse = '';
    }
    //Check to see if the response via annyang is the same as the answer
    if (currentResponse === this.answer && this.south === true) {
      //Hide the node to notify the user it is correct
      this.nodeBottom = false;
      //Reset the current response
      currentResponse = '';
    }
    //Check to see if the response via annyang is the same as the answer
    if (currentResponse === this.answer && this.middle === true) {
      //Add a delay to display the correct answer for a few seconds
      this.returnTimer = setTimeout(this.returnShrine.bind(this), this.timeDelay);
      //Activate the task3 to true
      task3Done = true;
    }
  }

  //Return to the shrine location after the correct answer is inputed
  returnShrine() {
    state = new Shrine(1280, 720, 640, 360);
  }

  //mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Add a click box for the node
    if (mouseX > this.pointLeft.x && mouseX < this.pointLeft.x2) {
      if (mouseY > this.pointLeft.y && mouseY < this.pointLeft.y2) {
        //activate the west boolean to notify it has been clicked
        this.west = true;
        //Toggle all the other coordinates to false
        this.east = false;
        this.north = false;
        this.south = false;
        this.middle = false;
        //Show the answer
        this.answer = 'i am';
      }
    }
    //Add a click box for the node
    if (mouseX > this.pointRight.x && mouseX < this.pointRight.x2) {
      if (mouseY > this.pointRight.y && mouseY < this.pointRight.y2) {
        //activate the east boolean to notify it has been clicked
        this.east = true;
        //Toggle all the other coordinates to false
        this.west = false;
        this.north = false;
        this.south = false;
        this.middle = false;
        //Show the answer
        this.answer = 'sorry';
      }
    }
    //Add a click box for the node
    if (mouseX > this.pointMiddle.x && mouseX < this.pointMiddle.x2) {
      if (mouseY > this.pointMiddle.y && mouseY < this.pointMiddle.y2) {
        //activate the middle boolean to notify it has been clicked
        this.middle = true;
        //Toggle all the other coordinates to false
        this.west = false;
        this.east = false;
        this.north = false;
        this.south = false;
        //Show the answer
        this.answer = 'i am sorry for what i did';
      }
    }
    //Add a click box for the node
    if (mouseX > this.pointTop.x && mouseX < this.pointTop.x2) {
      if (mouseY > this.pointTop.y && mouseY < this.pointTop.y2) {
        //activate the north boolean to notify it has been clicked
        this.north = true;
        //Toggle all the other coordinates to false
        this.west = false;
        this.east = false;
        this.south = false;
        this.middle = false;
        //Show the answer
        this.answer = 'for what';
      }
    }
    //Add a click box for the node
    if (mouseX > this.pointBottom.x && mouseX < this.pointBottom.x2) {
      if (mouseY > this.pointBottom.y && mouseY < this.pointBottom.y2) {
        //activate the south boolean to notify it has been clicked
        this.south = true;
        //Toggle all the other coordinates to false
        this.west = false;
        this.east = false;
        this.north = false;
        this.middle = false;
        //Show the answer
        this.answer = 'i did';
      }
    }
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
