//Where the state switch occurs
//Organize what entities display in the given state 
class StateShow {
  constructor() {
    //Define background colors
    this.bgRed = 44;
    this.bgGreen = 56;
    this.bgBlue = 159;

    //Score of all points combined
    this.winningValue = 7200;
  }

  //Display the given state
  display() {
    if (state == 'Title') {
      titleScreen.display();
    }
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
      //console.log(score);
    }
    //Change the state when the score is equal to the winning value
    if (score === this.winningValue) {
      state = 'End';
    }
    //Display the endscreen when it is the end state
    if (state == 'End') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      endScreen.display();
    }
  }
}
