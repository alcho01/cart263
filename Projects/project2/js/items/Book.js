//This class is for the book containing the remaining passages
class Book {
  constructor() {
    //dimensions
    this.bookParameters = {
      x: 648,
      y: 364,
      width: 1200,
      height: 900,
    };

    this.bookConstraints = {
      x: 618,
      x2: 682,
      y: 288,
      y2: 360,
    };

    //images
    this.bookImage = bookImage;
    this.bookImageHov = bookImageHov;

    //Boolean to hide or show the book
    this.showBook = true;
  }

  //Display the book
  display() {
    if (this.showBook === true) {
      push();
      imageMode(CENTER);
      image(this.bookImage, this.bookParameters.x, this.bookParameters.y, this.bookParameters.width, this.bookParameters.height);
      pop();

      //Display this if possible
      this.checkHover();
    }
  }

  //Display the hovered image
  displayHover() {
    push();
    imageMode(CENTER);
    image(this.bookImageHov, this.bookParameters.x, this.bookParameters.y, this.bookParameters.width, this.bookParameters.height);
    pop();
  }

  //Check if the mouse is hovered over the book
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.bookConstraints.x && mouseX < this.bookConstraints.x2) {
      if (mouseY > this.bookConstraints.y && mouseY < this.bookConstraints.y2) {
        //If it is display the hovered image
        this.displayHover();
      }
    }
  }

  //Check to see if the book is clicked on
  mouseClicked() {
    //Check to see if it is within these constraints
    if (mouseX > this.bookConstraints.x && mouseX < this.bookConstraints.x2) {
      if (mouseY > this.bookConstraints.y && mouseY < this.bookConstraints.y2) {
        //Hide the book
        this.showBook = false;
      }
    }
  }
}
