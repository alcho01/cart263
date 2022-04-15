//This is the location class for the lab
//Add elements to display in the lab location from other classes
//Enable mouse clicked functionality from other classes
class Lab extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Images
    this.lab1Image = lab1Image;
    this.lab2Image = lab2Image;
  }

  //Display the images
  display() {
    //Call the super state
    super.display();
    //Display the sequence
    push();
    imageMode(CENTER);
    //Use frame count to animate the background
    if (frameCount % 65 < 15 / 2) {
      image(this.lab1Image, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 15 / 2) {
      image(this.lab2Image, this.x, this.y, this.width, this.height);
    }
    pop();
    //Display the toolbar
    toolBar.display();
    //Display the machine task
    machine.display();
    //Display paper 2
    paper.displayPaper2();
  }

  //Mouse clicked functionality
  mouseClicked() {
    //Call the super mouse clicked
    super.mouseClicked();
    //Get the toolbar mouse clicked
    toolBar.mouseClicked();
    //Get the machine mouse clicked
    machine.mouseClicked();
    //Get the paper mouse clicked
    paper.mouseClicked();
  }
}
