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

    //Boundaries for the start button
    this.buttonX = 269;
    this.buttonX2 = 534;
    this.buttonY = 299;
    this.buttonY2 = 403;
  }

  //Display the title sequence
  display() {
    push();
    imageMode(CENTER);

    //Depending on frame count will alter the image making it look animated
    if (frameCount % 60 < 10 / 2) {
      image(this.titleImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.titleImage2, this.x, this.y, this.width, this.height);
    } else if (frameCount % 30 < 10 / 2) {
      image(this.titleImage3, this.x, this.y, this.width, this.height);
    }
  }

  mouseClicked() {
    if (mouseX > this.buttonX && mouseX < this.buttonX2) {
      if (mouseY > this.buttonY && mouseY < this.buttonY2) {
        state = 'Simulation';
        titleTheme.stop();
      }
    }
  }
}
