//This will handle all key pressed events
class KeyPressedState {
  constructor() {

  }

  //Know what state it is on, to handle key pressed events
  activate() {
    //Works only when it is on the pretitle
    if (state == 'PreTitle') {
      preTitleState.keyPressed();
    }
    //Works only when it is outside
    else if (state == 'Outside') {
      outsideHouse.keyPressed();
    }
    //Works only when it is on the entrance
    else if (state == 'Entrance') {
      entranceHouse.keyPressed();
    }
    //Works only when it is in the living room
    else if (state == 'LivingRoom') {
      livingRoom.keyPressed();
    }
    //Works only when it is in the chair
    else if (state == 'InChair') {
      livingRoom.nextScene();
    }
    //Works only on hypnosis scene
    else if (state == 'Hypnosis') {
      dialogue.keyPressed();
    }
    //Works only on hypnosis scene
    else if (state == 'DialogueA') {
      dialogue.keyPressedB();
    }
    //Works only on hypnosis scene
    else if (state == 'DialogueB') {
      dialogue.keyPressedC();
    }
    //Works only on hypnosis scene
    else if (state == 'DialogueC') {
      dialogue.keyPressedD();
    }
    //Works only on hypnosis scene
    else if (state == 'DialogueD') {
      dialogue.keyPressedE();
    }
    //Works only during the simulation
    else if (state == 'SunkenPlace') {
      sunkenPlace.keyPressed();
    }
  }
}
