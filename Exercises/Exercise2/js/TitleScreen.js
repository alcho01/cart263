//To display the title screen
class TitleScreen {
  constructor(titleImg) {
    //Position
    this.x = 500;
    this.y = 400;
    //Dimensions
    this.width = 1000;
    this.height = 800;
    //Image
    this.titleImg = titleImg;
  }

  //Display the title image
  display() {
    push();
    imageMode(CENTER);
    image(this.titleImg, this.x, this.y, this.width, this.height);
    pop();
  }
}
