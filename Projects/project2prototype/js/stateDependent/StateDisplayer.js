//Display the states within this class
class StateDisplayer {
  constructor() {
    //Background Color
    this.bgColor = 0;
  }

  //Activate to display the cutscenes
  activateScenes() {
    if (state === 'forestCutScene') {
      forestScene.display();
      typeWriter.dialogueBox();
      typeWriter.display();
    }
  }

  //Activate to display the locations
  activateLocations() {
    if (state === 'home') {
      home.display();
    }
  }

  //Activate to display the hover overlay
  activateHover() {

  }

  //Activate to display the tasks
  activateTasks() {
    if (state === 'heartbeat') {
      background(this.bgColor);
      heartMonitor.displayLine();
    }
  }
}
