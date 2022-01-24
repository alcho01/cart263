//Everything related to the board selection screen
//Display the board
//Create the mouse functionality for clicking a category
//Apply responsive voice
//Add points to the score 
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

    //Text info
    //fill white
    this.white = 255;
    //Size
    this.size = 20;
    //x position
    this.textX = 500;
    //y position
    this.textY = 400;
  }

//Display the image
  display() {
    push();
    imageMode(CENTER);
    image(this.boardSelectionImg, this.x, this.y, this.width, this.height);
    pop();
  }

  //Display the text for each question and column
  column1Questions() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.size);
    text(this.question, this.textX, this.textY);
    pop();
  }

  //Column 2
  column2Questions() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.size);
    text(this.question2, this.textX, this.textY);
    pop();
  }

  //Column 3
  column3Questions() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.size);
    text(this.question3, this.textX, this.textY);
    pop();
  }

  //Column 4
  column4Questions() {
    push();
    fill(this.white);
    textAlign(CENTER);
    textSize(this.size);
    text(this.question4, this.textX, this.textY);
    pop();
  }

//When clicking a clue, display the set question
  mouseClicked() {
    //Column1
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box1.x && mouseX < this.box1.x2) {
      if (mouseY > this.box1.y && mouseY < this.box1.y2) {
        //Say the category aloud
        responsiveVoice.speak("In the kitchen for 200", "French Male");
        //Change the state
        state = 'Column1';
        //Display the specified question
        this.question = category1Questions[currentCategory1Questions];
        //Narrate the question
        responsiveVoice.speak("A pestle is used to grind spices & other foods; this pestle's partner is the bowl in which the food is ground");
        //The answer
        this.answer = 'mortar';
        //What is the score worth
        this.scoreValue = 200;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box2.x && mouseX < this.box2.x2) {
      if (mouseY > this.box2.y && mouseY < this.box2.y2) {
        //Say the category aloud
        responsiveVoice.speak("In the kitchen for 600", "French Male");
        //Change the state
        state = 'Column1';
        //Display the specified question
        this.question = category1Questions[currentCategory1Questions + 1];
        //Narrate the question
        responsiveVoice.speak("Despite its name it's a slicing tool not a guitar-like instrument so don't strum it");
        this.answer = 'mandolin';
        //What is the score worth
        this.scoreValue = 600;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box3.x && mouseX < this.box3.x2) {
      if (mouseY > this.box3.y && mouseY < this.box3.y2) {
        //Say the category aloud
        responsiveVoice.speak("In the kitchen for 1000", "French Male");
        //Change the state
        state = 'Column1';
        //Display the specified question
        this.question = category1Questions[currentCategory1Questions + 2];
        //Narrate the question
        responsiveVoice.speak("This brilliant yellow ultra-spendy spice is sold powdered or as threads, the flower's stigma");
        //The answer
        this.answer = 'saffron';
        //What is the score worth
        this.scoreValue = 1000;
      }
    }
  }

    //Column 2
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box4.x && mouseX < this.box4.x2) {
      if (mouseY > this.box4.y && mouseY < this.box4.y2) {
        //Say the category aloud
        responsiveVoice.speak("B plus 2 letters for 200", "French Male");
        //Change the state
        state = 'Column2';
        //Display the specified question
        this.question2 = category2Questions[currentCategory2Questions];
        //Narrate the question
        responsiveVoice.speak("To clear plates");
        //The answer
        this.answer = 'bus';
        //What is the score worth
        this.scoreValue = 200;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box5.x && mouseX < this.box5.x2) {
      if (mouseY > this.box5.y && mouseY < this.box5.y2) {
        //Say the category aloud
        responsiveVoice.speak("B plus 2 letters for 600", "French Male");
        //Change the state
        state = 'Column2';
        //Display the specified question
        this.question2 = category2Questions[currentCategory2Questions + 1];
        //Narrate the question
        responsiveVoice.speak("Cubic kite");
        //The answer
        this.answer = 'box';
        //What is the score worth
        this.scoreValue = 600;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box6.x && mouseX < this.box6.x2) {
      if (mouseY > this.box6.y && mouseY < this.box6.y2) {
        //Say the category aloud
        responsiveVoice.speak("B plus 2 letters for 1000", "French Male");
        //Change the state
        state = 'Column2';
        //Display the specified question
        this.question2 = category2Questions[currentCategory2Questions + 2];
        //Narrate the question
        responsiveVoice.speak("Stated goal of taking tricks");
        //The answer
        this.answer = 'bid';
        //What is the score worth
        this.scoreValue = 1000;
      }
    }
  }

    //Column 3
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box7.x && mouseX < this.box7.x2) {
      if (mouseY > this.box7.y && mouseY < this.box7.y2) {
        //Say the category aloud
        responsiveVoice.speak("triple alliteration for 200", "French Male");
        //Change the state
        state = 'Column3';
        //Display the specified question
        this.question3 = category3Questions[currentCategory3Questions];
        //Narrate the question
        responsiveVoice.speak("This pencil-&-paper game is also known as exes & o's");
        //The answer
        this.answer = 'tic-tac-toe';
        //What is the score worth
        this.scoreValue = 200;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box8.x && mouseX < this.box8.x2) {
      if (mouseY > this.box8.y && mouseY < this.box8.y2) {
        //Say the category aloud
        responsiveVoice.speak("triple alliteration for 600", "French Male");
        //Change the state
        state = 'Column3';
        //Display the specified question
        this.question3 = category3Questions[currentCategory3Questions + 1];
        //Narrate the question
        responsiveVoice.speak("Only around since the early 1990s it takes you practically anywhere you want to go--on the Internet");
        //The answer
        this.answer = 'world wide web';
        //What is the score worth
        this.scoreValue = 600;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box9.x && mouseX < this.box9.x2) {
      if (mouseY > this.box9.y && mouseY < this.box9.y2) {
        //Say the category aloud
        responsiveVoice.speak("triple alliteration for 1000", "French Male");
        //Change the state
        state = 'Column3';
        //Display the specified question
        this.question3 = category3Questions[currentCategory3Questions + 2];
        //Narrate the question
        responsiveVoice.speak("Relationship of Queen Elizabeth to Queen Victoria");
        //The answer
        this.answer = 'great-great-granddaughter';
        //What is the score worth
        this.scoreValue = 1000;
      }
    }
  }
    //Column 4
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box10.x && mouseX < this.box10.x2) {
      if (mouseY > this.box10.y && mouseY < this.box10.y2) {
        //Say the category aloud
        responsiveVoice.speak("A nine letter noun for 200", "French Male");
        //Change the state
        state = 'Column4';
        //Display the specified question
        this.question4 = category4Questions[currentCategory4Questions];
        //Narrate the question
        responsiveVoice.speak("This fruit may sometimes appear on a peach tree");
        //The answer
        this.answer = 'nectarine';
        //What is the score worth
        this.scoreValue = 200;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box11.x && mouseX < this.box11.x2) {
      if (mouseY > this.box11.y && mouseY < this.box11.y2) {
        //Say the category aloud
        responsiveVoice.speak("A nine letter noun for 600", "French Male");
        //Change the state
        state = 'Column4';
        //Display the specified question
        this.question4 = category4Questions[currentCategory4Questions + 1];
        //Narrate the question
        responsiveVoice.speak("It's a feeling of sentimental yearning for the past");
        //The answer
        this.answer = 'nostalgia';
        //What is the score worth
        this.scoreValue = 600;
      }
    }
  }
    //Set up the click box
    if (state === 'BoardSelection'){
    if (mouseX > this.box12.x && mouseX < this.box12.x2) {
      if (mouseY > this.box12.y && mouseY < this.box12.y2) {
        //Say the category aloud
        responsiveVoice.speak("A nine letter noun for 1000", "French Male");
        //Change the state
        state = 'Column4';
        //Display the specified question
        this.question4 = category4Questions[currentCategory4Questions + 2];
        //Narrate the question
        responsiveVoice.speak("Name shared by the first operational stealth aircraft & a nocturnal bird --their prey never sees either one coming");
        //The answer
        this.answer = 'nighthawk';
        //What is the score worth
        this.scoreValue = 1000;
        }
      }
    }
  }
}
