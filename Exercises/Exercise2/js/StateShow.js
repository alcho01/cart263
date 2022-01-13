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
    if (state == 'Questions') {
      background(this.bgRed, this.bgGreen, this.bgBlue);
      boardScreen.displayQ1();
    }
  }
}
