//Contain the cutscene for the forest
class ForestScene extends Universal {
  constructor(w, h, x, y) {
    super(w, h, x, y);

    //images
    this.sceneAImage1 = sceneAImage1;
    this.sceneAImage2 = sceneAImage2;
    this.sceneAImage3 = sceneAImage3;
  }

  //Display the animated background
  display() {
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
  }
}
