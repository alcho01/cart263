//This will handle all key pressed events
class KeyPressedState {
  constructor() {

  }

  //Know what state it is on, to handle key pressed events
  activate() {
    if (state == 'PreTitle') {
      //Works only when it is on the pretitle
      preTitleState.keyPressed();
    }
    else if (state == 'SunkenPlace') {
      //Works only during the simulation
      sunkenPlace.keyPressed();
    }
  }
}
