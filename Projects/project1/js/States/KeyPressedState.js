//This will handle all key pressed events
//Depending on states where a key is needed for interactivity
class KeyPressedState {
  constructor() {
    //Nothing needed
  }
  //Know what state it is on, to handle key pressed events
  titleActivate() {
    //Works only when it is on the pretitle
    if (state === 'PreTitle') {
      preTitleState.keyPressed();
    }
  }

  //Act 1
  act1Activate() {
    //Works only when it is outside
    if (state === 'Outside') {
      outsideHouse.keyPressed();
    }
    //Works only when it is on the entrance
    else if (state === 'Entrance') {
      entranceHouse.keyPressed();
    }
  }

  //Act 2
  act2Activate() {
    //Works only when it is in the living room
    if (state === 'LivingRoom') {
      livingRoom.keyPressed();
    }
    //Works only when it is in the chair
    else if (state === 'InChair') {
      livingRoom.nextScene();
      livingRoom.upFromChair();
    }
    //Works only on hypnosis scene
    else if (state === 'Hypnosis') {
      dialogue.keyPressed();
    }
    //Works only on Dialogue A
    else if (state === 'DialogueA') {
      dialogue.keyPressedB();
    }
    //Works only on Dialogue B
    else if (state === 'DialogueB') {
      dialogue.keyPressedC();
    }
    //Works only on Dialogue C
    else if (state === 'DialogueC') {
      dialogue.keyPressedD();
    }
    //Works only on Dialogue D
    else if (state === 'DialogueD') {
      dialogue.keyPressedEye();
    }
    //Works only on Teary Eyed scene
    else if (state === 'TearyEye') {
      dialogue.keyPressedE();
    }
    //Works only during the simulation
    else if (state === 'SunkenPlace') {
      sunkenPlace.keyPressed();
    }
  }

  //Act 3
  act3Activate() {
    //Works only during the secret code
    if (state === 'Speaker') {
      secretCode.keyPressed();
    }
    //Works only in the hallway
    else if (state === 'Hallway') {
      hallway.keyPressed();
    }
    //Works only when undoing the left arm
    else if (state === 'UntieLeftArm') {
      leftArm.keyPressed();
    }
    //Works only when undoing the right arm
    else if (state === 'UntieRightArm') {
      rightArm.keyPressed();
    }
    //Works only when undoing the boots
    else if (state === 'Boots') {
      boots.keyPressed();
    }
    else if (state === 'Coagula') {
      coagula.keyPressed();
    }
  }
}
