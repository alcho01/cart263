//This is the pre title state class
//Display the pretitle
//Enable key pressed events 
class PreTitleState {
  constructor(w, h, x, y) {
    //Dimensions
    this.width = w;
    this.height = h;
    //Position
    this.x = x;
    this.y = y;
    //black color
    this.black = 0;

    //Text entities
    //text size
    this.size = 32;
    //position
    this.textX = 400;
    this.textY = 500;
    //white color
    this.white = 255;
  }

  //Display the pretitle
  display() {
    //Create a black square
    push();
    rectMode(CENTER);
    noStroke();
    fill(this.black);
    rect(this.x, this.y, this.width, this.height);
    pop();

    //Create text
    push();
    textAlign(CENTER);
    textSize(this.size);
    fill(this.white);
    text('Press Any Key', this.textX, this.textY);
    pop();
  }

  keyPressed() {
      titleTheme.play();
      state = "Title";
    }
  }
