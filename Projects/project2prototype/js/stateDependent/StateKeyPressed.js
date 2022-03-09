//Class to handle the key pressed events
class StateKeyPressed {
  constructor() {

  }

  activateScenes() {
    if (state === 'forestCutScene') {
      typeWriter.keyPressed();
    }
  }
}
