//This is the opening title before the intro
class PreTitle extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //Set the background colour
    this.bgColour = 0;

    //Text parameters
    this.textParams = {
      x: width / 2,
      y: height / 2,
      size: 32,
      fill: 255,
    };
  }

  //everything to display
  display() {
    //Call the super display
    super.display();
    //Set the background
    background(this.bgColour);
    //Display the text
    this.displayText();
  }

  //Display the text saying to press any key
  displayText() {
    push();
    fill(this.textParams.fill);
    textFont(dialogueFont);
    textAlign(CENTER);
    textSize(this.textParams.size);
    text('Press Any Key', this.textParams.x, this.textParams.y);
    pop();
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super key pressed
    super.keyPressed();
    //If any key is pressed go to the intro sequence
    state = new Title(1280, 720, 640, 360);
  }
}
