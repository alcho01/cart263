//This is the title class after the pretitle
class Title extends State {
  constructor(w, h, x, y) {
    //call the super class
    super(w, h, x, y);

    //background colour
    this.bgColour = 0;

    //Boolean system for the icons
    this.icon1On = true;

    //Boolean system for displaying cracks
    this.crack1On = false;

    //Icon 1 parameters
    this.icon1Params = {
      x: 950,
      y: 180,
      width: 40,
      height: 40,
      fill: 255,
    };
    //Icon 1 constraints
    this.icon1Constraints = {
      x: 932,
      x2: 971,
      y: 162,
      y2: 202,
    };

    //Images
    this.titleImage1 = titleImage1;
    this.titleImage2 = titleImage2;
    this.titleImage3 = titleImage3;
    this.titleImage4 = titleImage4;
    this.titleImageHov = titleImageHov;
    this.titleTextImage = titleTextImage;
  }

  //Display everything
  display() {
    //call the super display
    super.display();
    //Apply the background colour
    background(this.bgColour);
    //Display the title Header
    this.titleHeader();
    //Display the cracks
    this.crack1();
    //Display the icon clickers
    this.iconClickers();
  }

  //Display the title header
  titleHeader() {
    push();
    imageMode(CENTER);
    image(this.titleTextImage, this.x, this.y, this.width, this.height);
    pop();
  }

  //Icons where the user clicks
  iconClickers() {
    if (this.icon1On === true) {
      push();
      noStroke();
      fill(this.icon1Params.fill);
      ellipse(this.icon1Params.x, this.icon1Params.y, this.icon1Params.width, this.icon1Params.height);
      pop();
    }
  }

  //Display the first crack
  crack1() {
    if (this.crack1On === true) {
      push();
      imageMode(CENTER);
      image(this.titleImage1, this.x, this.y, this.width, this.height);
      pop();
    }
  }

  //mouse clicked functionality
  mouseClicked() {
    //call the super mouse clicked
    super.mouseClicked();
    //Create a click box
    if (mouseX > this.icon1Constraints.x && mouseX < this.icon1Constraints.x2) {
      if (mouseY > this.icon1Constraints.y && mouseY < this.icon1Constraints.y2) {
        //Play cracked glass sfx
        glassCrackSFX.play();
        //Display the crack
        this.crack1On = true;
        //Hide icon 1
        this.icon1On = false;
      }
    }
  }
}
