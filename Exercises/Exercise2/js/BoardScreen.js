//Everything related to the board selection screen
class BoardScreen {
  constructor(boardSelectionImg) {
    //Position
    this.x = 500;
    this.y = 400;

    //Dimensions
    this.width = 1000;
    this.height = 800;

    this.boardSelectionImg = boardSelectionImg;
  }

//Display the image
  display() {
    push();
    imageMode(CENTER);
    image(this.boardSelectionImg, this.x, this.y, this.width, this.height);
    pop();
  }
}
