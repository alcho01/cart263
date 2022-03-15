//Class Holding the dialogue entities.
//Pretty simple dialogue system.
//Create an array of sentences.
//Call them one by one.
//After the last one is triggered transition to the next scene
class Dialogue {
  constructor() {
    //text settings
    this.text = {
      x: 140,
      y: 40,
      size: 15,
      white: 255,
    };
    //Dialogue box settings
    this.box = {
      x: 140,
      y: 55,
      width: 250,
      height: 90,
      radius: 20,
      color: 0,
      strokeColor: 255,
      strokeWeight: 3,
    };
    //Array containing each string
    this.dialogueStrings = [
      "Ya, thanks for calling.",
      "I will make \nsure to do that.",
      "Ok, Linda bye now.",
      "God, is she ever a pain!",
      "How many times do \nI have to tell her \nnot to call?",
      "Why am I \ntalking to myself?",
      "hmmm",
      "Maybe, Linda is right.",
      "Whatever, I'll try \ndistracting myself \nfor tonight at least.",
    ];
    //What is the current string
    this.currentdialogueString = 1;
    //Increment for the currentstring
    this.nextString = 1;
    //Opening string
    this.displayString = "Ya, thanks for calling.";
  }

  //Display the text
  display() {
    push();
    fill(this.text.white);
    textFont(dialogueFont);
    textSize(this.text.size);
    textAlign(CENTER);
    text(this.displayString, this.text.x, this.text.y);
    pop();
  }

  //Display dialogue box with flashing stroke from framecount of the images
  dialogueBox() {
    push();
    strokeWeight(this.box.strokeWeight);
    stroke(this.box.strokeColor);
    fill(this.box.color);
    rectMode(CENTER);
    rect(
      this.box.x,
      this.box.y,
      this.box.width,
      this.box.height,
      this.box.radius
    );
    pop();
  }

  //Check to see if all the strings are done (PlaceHolder State)
  checkStrings() {
    if (this.currentdialogueString > this.dialogueStrings.length) {
      //If the strings go past the limit change the state to the home location
      state = new Home(1280, 720, 640, 360);
    }
  }

  //Handle the strings
  handleStrings() {
    //make the display string equal out to the current string
    this.displayString = this.dialogueStrings[this.currentdialogueString];
    //Change strings
    this.currentdialogueString += this.nextString;
  }

  //Place holder for testing // When a key is pressed show the specified line.
  keyPressed() {
    //If the left arrow key is pressed
    if (keyCode === 37) {
      //Play a sound effect
      //Handle the strings
      this.handleStrings();
      //Call this function
      this.checkStrings();
    }
  }
}
