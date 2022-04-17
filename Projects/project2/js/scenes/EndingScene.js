//This class contains the ending scene.
class EndingScene extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //background Colour
    this.bgColour = 0;

    //Load the ending title image
    this.endingTitleImage = endingTitleImage;
  }

  //Display everything
  display() {
    //Call the super display
    super.display();
    //Display the background
    background(this.bgColour);
    //Display the end title
    this.displayTitle();
  }

  //Display the end title
  displayTitle() {
    push();
    imageMode(CENTER);
    image(this.endingTitleImage, this.x, this.y, this.width, this.height);
    pop();
  }
}
