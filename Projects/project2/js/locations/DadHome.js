//The class holding the location of Brian's father's Home
//Display the image of dad's home
//Add mouse clicked function for interaction
class DadHome extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Load in the image
    this.dadHomeImage = dadHomeImage;
  }

  //Display the images and everything else needed
  display() {
    //Call the super state
    super.display();
    //Display the image
    push();
    imageMode(CENTER);
    image(this.dadHomeImage, this.x, this.y, this.width, this.height);
    pop();

    //Display the book
    book.display();
    //Display the toolbar
    toolBar.display();
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Get the book mouse clicked
    book.mouseClicked();
    //Get the toolbar mouse clicked
    toolBar.mouseClicked();
  }
}
