//Class to handle the key pressed events
class StateKeyPressed {
  constructor() {

  }

  activate() {
    if (state === 'forestCutScene') {
      typeWriter.keyPressed();
    }
  }
}
