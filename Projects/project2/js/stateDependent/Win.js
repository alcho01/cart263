//This class triggers depending on if a task requires a Win state to notify the user
//Display the win text for the task
//Add a key pressed function to return to the lab state
class Win extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //background colour
    this.bgColour = 0;

    //Text parameters
    this.textParams = {
      x: 640,
      y: 360,
      size: 32,
      white: 255,
    };
  }

  //Display it all
  display() {
    //Call the super display
    super.display();
    //Background
    background(this.bgColour);
    //Display the text
    this.displayText();
  }

  //Display the text
  displayText() {
    push();
    noStroke();
    textAlign(CENTER);
    textFont(dialogueFont);
    fill(this.textParams.white);
    textSize(this.textParams.size);
    text('Completed! \nPress The Escape Key', this.textParams.x, this.textParams.y);
    pop();
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
  }
}
