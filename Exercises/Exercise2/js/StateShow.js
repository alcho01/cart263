//Where the state switch occurs
class StateShow {
  constructor() {
    //Define background colors
    this.bgRed = 44;
    this.bgGreen = 56;
    this.bgBlue = 159;
  }

  //Display the given state
  display() {
    //Displays what questions to select
    if (state == 'BoardSelection') {
      boardScreen.display();
      scoreDisplay.display();
    }
    //Displays the questions for column 1
    if (state == 'Column1') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column1Questions();
    }
    //Displays the questions for column 2
    if (state == 'Column2') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column2Questions();
    }
    //Displays the questions for column 3
    if (state == 'Column3') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column3Questions();
    }
    //Displays the questions for column 4
    if (state == 'Column4') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column4Questions();
    }
    //If the voice input via annyang is equal to the correct answer...
    if (currentResponse === boardScreen.answer) {
      //Return to the board selection
      state = 'BoardSelection';
      //Add the specified money value
      score = score + boardScreen.scoreValue;
      //Reset the response to blank
      currentResponse = '';
      console.log(score);
    }
  }
}
