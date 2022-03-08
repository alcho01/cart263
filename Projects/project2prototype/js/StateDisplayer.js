//Display the states within this class
class StateDisplayer {
  constructor() {
    //Background Color
    this.bgColor = 0;
  }

  activate() {
    if (state === 'forestCutScene') {
      forestScene.display();
      typeWriter.dialogueBox();
      typeWriter.display();
    }
    else if (state === 'heartbeat') {
      background(this.bgColor);
      heartMonitor.displayLine();
    }
  }
}
