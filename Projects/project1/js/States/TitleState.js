//This is the class for the title state
//Displays the title screen
//Enable mouse clicked events to press the start button
class TitleState extends Universal {
  constructor(w, h, x, y, titleImage1, titleImage2, titleImage3) {

    //extended from the universal class
    super(w, h, x, y);

    //Images
    this.titleImage1 = titleImage1;
    this.titleImage2 = titleImage2;
    this.titleImage3 = titleImage3;

    //Boundaries for the start button
    this.button = {
      x: 269,
      x2: 534,
      y: 299,
      y2: 453,
    };
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
    pop();
  }

  //Mouse clicked functionality
  mouseClicked() {
    if (mouseX > this.button.x && mouseX < this.button.x2) {
      if (mouseY > this.button.y && mouseY < this.button.y2) {
        state = 'Instructions';
      }
    }
  }
}
