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

    //Starting question for column 1
    this.question = "A pestle is used to grind spices & other foods; this pestle's partner is the bowl in which the food is ground";
    //Starting question for column 2
    this.question2 = "To clear plates";
    //Starting question for column 3
    this.question3 = "This pencil-&-paper game is also known as Xs & Os";
    //Starting question for column 4
    this.question4 = "This fruit may sometimes appear on a peach tree";

    //Column 1
    this.box1 = {
      x: 7,
      x2: 248,
      y: 278,
      y2: 444,
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

  //Display the text
  column1Questions() {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(this.question, 500, 400);
    pop();
  }

  column2Questions() {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(this.question2, 500, 400);
    pop();
  }

  column3Questions() {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(this.question3, 500, 400);
    pop();
  }

  column4Questions() {
    push();
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text(this.question4, 500, 400);
    pop();
  }

//When clicking a clue, display the set question
  mouseClicked() {
    //Column1
    //Set up the click box
    if (mouseX > this.box1.x && mouseX < this.box1.x2) {
      if (mouseY > this.box1.y && mouseY < this.box1.y2) {
        //Change the state
        state = 'Column1';
        //Display the specified question
        this.question = category1Questions[currentCategory1Questions];
        responsiveVoice.speak("A pestle is used to grind spices & other foods; this pestle's partner is the bowl in which the food is ground");
      }
    }
    if (mouseX > this.box2.x && mouseX < this.box2.x2) {
      if (mouseY > this.box2.y && mouseY < this.box2.y2) {
        state = 'Column1';
        this.question = category1Questions[currentCategory1Questions + 1];
        responsiveVoice.speak("Despite its name it's a slicing tool not a guitar-like instrument so don't strum it");
      }
    }
    if (mouseX > this.box3.x && mouseX < this.box3.x2) {
      if (mouseY > this.box3.y && mouseY < this.box3.y2) {
        state = 'Column1';
        this.question = category1Questions[currentCategory1Questions + 2];
        responsiveVoice.speak("This brilliant yellow ultra-spendy spice is sold powdered or as threads, the flower's stigma");
      }
    }

    //Column 2
    if (mouseX > this.box4.x && mouseX < this.box4.x2) {
      if (mouseY > this.box4.y && mouseY < this.box4.y2) {
        state = 'Column2';
        this.question2 = category2Questions[currentCategory2Questions];
        responsiveVoice.speak("To clear plates");
      }
    }
    if (mouseX > this.box5.x && mouseX < this.box5.x2) {
      if (mouseY > this.box5.y && mouseY < this.box5.y2) {
        state = 'Column2';
        this.question2 = category2Questions[currentCategory2Questions + 1];
        responsiveVoice.speak("Cubic kite");
      }
    }
    if (mouseX > this.box6.x && mouseX < this.box6.x2) {
      if (mouseY > this.box6.y && mouseY < this.box6.y2) {
        state = 'Column2';
        this.question2 = category2Questions[currentCategory2Questions + 2];
        responsiveVoice.speak("Stated goal of taking tricks");
      }
    }

    //Column 3
    if (mouseX > this.box7.x && mouseX < this.box7.x2) {
      if (mouseY > this.box7.y && mouseY < this.box7.y2) {
        state = 'Column3';
        this.question3 = category3Questions[currentCategory3Questions];
        responsiveVoice.speak("This pencil-&-paper game is also known as exes & o's");
      }
    }
    if (mouseX > this.box8.x && mouseX < this.box8.x2) {
      if (mouseY > this.box8.y && mouseY < this.box8.y2) {
        state = 'Column3';
        this.question3 = category3Questions[currentCategory3Questions + 1];
        responsiveVoice.speak("Only around since the early 1990s it takes you practically anywhere you want to go--on the Internet");
      }
    }
    if (mouseX > this.box9.x && mouseX < this.box9.x2) {
      if (mouseY > this.box9.y && mouseY < this.box9.y2) {
        state = 'Column3';
        this.question3 = category3Questions[currentCategory3Questions + 2];
        responsiveVoice.speak("Relationship of Queen Elizabeth to Queen Victoria");
      }
    }

    //Column 4
    if (mouseX > this.box10.x && mouseX < this.box10.x2) {
      if (mouseY > this.box10.y && mouseY < this.box10.y2) {
        state = 'Column4';
        this.question4 = category4Questions[currentCategory4Questions];
        responsiveVoice.speak("This fruit may sometimes appear on a peach tree");
      }
    }
    if (mouseX > this.box11.x && mouseX < this.box11.x2) {
      if (mouseY > this.box11.y && mouseY < this.box11.y2) {
        state = 'Column4';
        this.question4 = category4Questions[currentCategory4Questions + 1];
        responsiveVoice.speak("It's a feeling of sentimental yearning for the past");
      }
    }
    if (mouseX > this.box12.x && mouseX < this.box12.x2) {
      if (mouseY > this.box12.y && mouseY < this.box12.y2) {
        state = 'Column4';
        this.question4 = category4Questions[currentCategory4Questions + 2];
        responsiveVoice.speak("Name shared by the first operational stealth aircraft & a nocturnal bird --their prey never sees either one coming");
      }
    }
  }
}
