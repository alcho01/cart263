//Display the states within this class
class StateDisplayer {
  constructor() {

  }

  activate() {
    if (state === 'forestCutScene') {
      forestScene.display();
      typeWriter.dialogueBox();
      typeWriter.display();
    }
    else if (state === 'heartbeat') {
      background(bgColor);
      heartMonitor.displayLine();
    }
  }
}
