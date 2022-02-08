//This class contains the basement info and interaction
//Display the basement as an animation flickering between both images
class Basement extends Universal {
  constructor (w, h, x, y, basementImage1, basementImage2) {
    //extend from the universal class
    super(w, h, x, y);

    //images
    this.basementImage1 = basementImage1;
    this.basementImage2 = basementImage2;

    //TV Constraints
    this.television = {
      x: 270,
      x2: 530,
      y: 0,
      y2: 210,
    };
  }

  //Display the basement image as animated
  display() {
    push();
    imageMode(CENTER);
    if (frameCount % 120 < 15 / 2) {
      image(this.basementImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 30 < 15 / 2) {
      image(this.basementImage2, this.x, this.y, this.width, this.height);
    }
  }

  //Zoom into the tv
  tvZoomIn() {
    if (mouseX > this.television.x && mouseX < this.television.x2) {
      if (mouseY > this.television.y && mouseY < this.television.y2) {
        //console.log('hello');
      }
    }
  }
}
