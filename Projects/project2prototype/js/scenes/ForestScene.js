//Contain the cutscene for the forest.
class ForestScene extends State {
  constructor(w, h, x, y) {
    //Extend from the super class
    super(w, h, x, y);

    //images
    this.sceneAImage1 = sceneAImage1;
    this.sceneAImage2 = sceneAImage2;
    this.sceneAImage3 = sceneAImage3;
  }

  //Display the animated background
  display() {
    //Call the super display
    super.display();
    push();
    imageMode(CENTER);
    //Use frame count to animate the background
    if (frameCount % 65 < 15 / 2) {
      image(this.sceneAImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 15 / 2) {
      image(this.sceneAImage2, this.x, this.y, this.width, this.height);
    } else if (frameCount % 25 < 15 / 2) {
      image(this.sceneAImage3, this.x, this.y, this.width, this.height);
    }
    pop();

    //Call these functions from the typeWriter class to display them in the opening scene
    dialogue.dialogueBox();
    dialogue.display();
  }

  //Key pressed functionality
  keyPressed() {
    //Call the super class
    super.keyPressed();
    //Get the key pressed from the typeWriter
    dialogue.keyPressed();
  }
}
