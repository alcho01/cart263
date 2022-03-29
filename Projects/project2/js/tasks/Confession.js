//This is the third task - Confession
class Confession extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Array of thoughts
    this.thoughts = ['apologize', 'ignore', 'god', 'love', 'shattered'];
    //What word to start on
    this.index = 0;

    //Text parameters
    this.textParams = {
      x: 90,
      y: 70,
      size: 32,
      white: 255,
    };
  }

  //Display all the entities
  display() {
    //Call the super display
    super.display();
    //Background
    background(0);
    //Display the thought
    this.displayThoughts();

  };

  //Display the thoughts
  displayThoughts() {
    push();
    noStroke();
    textAlign(CENTER);
    textFont(dialogueFont);
    textSize(this.textParams.size);
    fill(this.textParams.white);
    text(this.thoughts[this.index], this.textParams.x, this.textParams.y)
  }

  //mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();

    

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
