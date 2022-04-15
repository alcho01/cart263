//This class is to display the instructions
class Instructions extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //Set the background to black
    this.bgColour = 0;

    //text parameters
    this.textParams = {
      x: width / 2,
      y: height / 2,
      size: 18,
      fill: 255,
    };
  }

  //Display everything
  display() {
    //Call the super display
    super.display();
    //set the background
    background(this.bgColour);
    //Display the instructions
    this.displayInstructions();
  }

  //Which will display the instructions
  displayInstructions() {
    push();
    textAlign(CENTER);
    noStroke();
    textSize(this.textParams.size);
    fill(this.textParams.fill);
    text('INSTRUCTIONS \nLeft Arrow Key - Scroll through cutscenes/dialogue, Flip through the journal. \nEscape Key - Exit out of a cutscene, Exit out of a task, Close the journal. \nMouse - To hover/click over objects. \nAll other instructions are found in the journal. \nPRESS ANY KEY TO CONTINUE', this.textParams.x, this.textParams.y);
    pop();
  }

  //key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //Go to the opening scene
    state = new ForestScene(1280, 720, 640, 360);
    //Stop the theme song
    themeSong.stop();
    //Add  a wind sound for the forest scene
    //Loop it
    windSFX.play();
    windSFX.loop();
  }
}
