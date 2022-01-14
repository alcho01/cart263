//Where the state switch occurs
class StateShow {
  constructor() {
    this.bgRed = 44;
    this.bgGreen = 56;
    this.bgBlue = 159;
  }

  display() {
    if (state == 'BoardSelection') {
      boardScreen.display();
    }
    if (state == 'Column1') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column1Questions();
    }
    if (state == 'Column2') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column2Questions();
    }
    if (state == 'Column3') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column3Questions();
    }
    if (state == 'Column4') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.column4Questions();
    }
    if (currentResponse === boardScreen.answer) {
      state = 'BoardSelection';
    }
  }
}
