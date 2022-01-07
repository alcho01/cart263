//This is the class for the title state
class TitleState {
  constructor(w, h, titleImage1, titleImage2, titleImage3) {
    //Dimensions
    this.width = w;
    this.height = h;

    //Position
    this.x = 400;
    this.y = 500;
    
    //Images
    this.titleImage1 = titleImage1;
    this.titleImage2 = titleImage2;
    this.titleImage3 = titleImage3;
  }

  display() {
    push();
    imageMode(CENTER);

    if (frameCount % 60 < 10 / 2) {
      image(this.titleImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.titleImage2, this.x, this.y, this.width, this.height);
    } else if (frameCount % 30 < 10 / 2) {
      image(this.titleImage3, this.x, this.y, this.width, this.height);
    }
  }
}
