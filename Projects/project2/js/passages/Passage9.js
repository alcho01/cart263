//This is to display passage #9
//Display the passage
//Add a timer that counts down from 10 to then display the next state
class Passage9 extends State {
  constructor(w, h, x, y) {
    //Call the super class
    super(w, h, x, y);

    //Image
    this.passageImage9 = passageImage9;

    //Add a timer 10 sec
    this.timer = 8;
    //Add an increment of a second to be deducted
    this.second = -1;
    //Minute
    this.minute = 60;
    //Timer finished
    this.timeDone = 0;
  }

  //Display the passage
  display() {
    //Call the super display
    super.display();

    push();
    imageMode(CENTER);
    image(this.passageImage9, this.x, this.y, this.width, this.height);
    pop();

    //Add the timer to the display to activate it
    this.timerStart();
  }

  //Add a timer to countdown
  timerStart() {
    this.timer += this.second / this.minute;
    //Check for when the time hits 0
    if (this.timer <= this.timeDone) {
      this.timer = this.timeDone;
      //Change states
      console.log('done');
      state = new EndingScene(1280, 720, 640, 360);
    }
  }
}
