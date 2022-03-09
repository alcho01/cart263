//Class to handle the key pressed events
class StateKeyPressed {
  constructor() {

  }

  //Key pressed works for the cutscenes 
  activateScenes() {
    if (state === 'forestCutScene') {
      typeWriter.keyPressed();
    }
  }
}
