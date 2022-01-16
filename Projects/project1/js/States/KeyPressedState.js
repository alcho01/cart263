//This will handle all key pressed events
class KeyPressedState {
  constructor() {

  }

  activate() {
    if (state == 'PreTitle') {
      //Works only when it is on the pretitle
      preTitleState.keyPressed();
    }
    else if (state == 'Simulation') {
      //Works only during the simulation
      simulation.keyPressed();
    }
  }
}
