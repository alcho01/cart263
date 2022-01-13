//Everything related to the board selection screen
class BoardScreen {
  constructor(boardSelectionImg) {
    //Position
    this.x = 500;
    this.y = 400;

    //Dimensions
    this.width = 1000;
    this.height = 800;

    //Image
    this.boardSelectionImg = boardSelectionImg;

    //position of the selection boxes

    //Column 1
    this.box1 = {
      x: 7,
      x2: 248,
      y: 278,
      y2: 444,
      question: "A pestle is used to grind spices & other foods; this pestle's partner is the bowl in which the food is ground",
    };

    this.box2 = {
      x: 7,
      x2: 248,
      y: 452,
      y2: 619,
    };

    this.box3 = {
      x: 7,
      x2: 248,
      y: 627,
      y2: 793,
    };

    //Column 2
    this.box4 = {
      x: 260,
      x2: 500,
      y: 278,
      y2: 444,
    };

    this.box5 = {
      x: 260,
      x2: 500,
      y: 452,
      y2: 619,
    };

    this.box6 = {
      x: 260,
      x2: 500,
      y: 627,
      y2: 793,
    };

    //Column 3
    this.box7 = {
      x: 505,
      x2: 744,
      y: 278,
      y2: 444,
    };

    this.box8 = {
      x: 505,
      x2: 744,
      y: 452,
      y2: 619,
    };

    this.box9 = {
      x: 505,
      x2: 744,
      y: 627,
      y2: 793,
    };

    //Column 4
    this.box10 = {
      x: 753,
      x2: 994,
      y: 278,
      y2: 444,
    };

    this.box11 = {
      x: 753,
      x2: 994,
      y: 452,
      y2: 619,
    };

    this.box12 = {
      x: 753,
      x2: 994,
      y: 627,
      y2: 793,
    };
  }

//Display the image
  display() {
    push();
    imageMode(CENTER);
    image(this.boardSelectionImg, this.x, this.y, this.width, this.height);
    pop();
  }

  displayQ1() {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(25);
    text(this.box1.question, 500, 400);
    pop();
  }

//When clicking a clue, prompt the set question
  mouseClicked() {
    if (mouseX > this.box1.x && mouseX < this.box1.x2) {
      if (mouseY > this.box1.y && mouseY < this.box1.y2) {
        state = 'Questions';
        this.box1.question = category1Questions[currentCategory1Questions + 1];
      }
    }
  }
}
