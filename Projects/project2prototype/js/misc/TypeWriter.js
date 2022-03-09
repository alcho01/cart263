//Class Holding the type writer effect for the dialogue strings
//Display the typewriting effect which is inspired by pippin's example.
//It is different in the sense, that I added multiple strings.
//I use a boolean to check when the next string can be called.
//Included a specific key to be pressed to activate it.
//Added a dialogue box around the text.
//Also check's if the last string is called. If it is, it will change states
class TypeWriter {
  constructor() {
    //The Entire String
    this.string = "";
    //The current string
    this.displayString = "";
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
      "How many times do \nI gotta tell her \nnot to call?",
      "Why am I talking to myself?",
      "Maybe, Linda is right.",
      "Whatever, I'll try \ndistracting myself \nfor tonight at least.",
    ];
    //What is the current string
    this.currentdialogueString = 0;
    //Increment for the currentstring
    this.nextString = 1;
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
    this.string = "";
    this.displayString = "";
    this.nextChar = 0;
    clearInterval(this.interval);
  }

  //Check to see if all the strings are done (PlaceHolder State)
  checkStrings() {
    if (this.currentdialogueString > this.dialogueStrings.length) {
      //If the strings go past the limit change the state to the home location
      state = new Home(1280, 720, 640, 360);
    }
  }

  //Place holder for testing // When a key is pressed show the specified line.
  keyPressed() {
    //If the left arrow key is pressed
    if (keyCode === 37) {
      //Enable the effect
      this.effect(this.string);
      //Play a sound effect
      //If the string is done
      if ((this.complete = true)) {
        //Change strings
        this.currentdialogueString += this.nextString;
      }
      //Call this function
      this.checkStrings();
    }
  }
}
