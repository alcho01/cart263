//Class Holding the type writer effect for the dialogue strings
class TypeWriter {
  constructor() {
    //The Entire String
    this.string = '';
    //The current string
    this.displayString = '';
    //When to display the next character
    this.nextChar = 0;
    //The speed of when the next character displays
    this.charSpeed = 100;
    //The interval
    this.interval = undefined;
    //Is the sentence done
    this.complete = false;
    //text settings
    this.text = {
      x: 140,
      y: 40,
      size: 15,
      white: 255,
    }
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
      "How many times do \nI gotta tell her \nnot to call?",
      "Why am I talking to myself?",
      "Maybe, Linda is right.",
      "Whatever, I'll try \ndistracting myself \nfor tonight at least."
    ];
    //What is the current string
    this.currentdialogueString = 0;
  }

  //Typewrite effect
  effect() {
    //Reset the configuration
    this.reset();
    //Setup the text
    this.string = this.dialogueStrings[this.currentdialogueString];
    //Display characters over time
    this.interval = setInterval(this.nextCharacter.bind(this), this.charSpeed);
  }

  //Display the next character
  nextCharacter() {
    //Check if it has reached the character limit
    if (this.nextChar >= this.string.length) {
      //Check if the sentence is done and if it is turn this bool to true
      this.complete = true;
      return;
    }
    //Add the next character
    this.displayString += this.string.charAt(this.nextChar);
    //Increase the character by one for future times
    this.nextChar = this.nextChar + 1;
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
    rect(this.box.x, this.box.y, this.box.width, this.box.height, this.box.radius);
    pop();
  }

  //reset the configuration
  reset() {
    this.string = '';
    this.displayString = '';
    this.nextChar = 0;
    clearInterval(this.interval);
  }

  //Check to see if all the strings are done
  checkStrings() {
  if (this.currentdialogueString > this.dialogueStrings.length) {
    state = 'heartbeat';
  }
}

  //Place holder for testing // When a key is pressed show the specified line.
  keyPressed() {
    //Enable the effect
    if (keyCode === 37) {
      this.effect(this.string);
      //If the string is done
      if (this.complete = true) {
        //Change strings
        this.currentdialogueString += 1;
      }
      //Call this function
      this.checkStrings();
    }
  }
}
