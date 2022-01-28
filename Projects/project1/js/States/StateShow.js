//This class will determine what state the simulation is in and what will be displayed for each state
class StateShow {
  constructor() {
    //Nothing needed
  }

  //Display the states
  activate() {
    //Pre title state
    if (state == "PreTitle") {
      preTitleState.display();
    }
    //The title screen
    else if (state == "Title") {
      titleState.display();
    }
    //Outside of the house
    else if (state == "Outside") {
      outsideHouse.display();
    }
    //Entrance of the house
    else if (state == "Entrance") {
      entranceHouse.display();
    }
    //The living room
    else if (state == "LivingRoom") {
      livingRoom.display();
    }
    //In the Chair
    else if (state == "InChair") {
      livingRoom.displayInChair();
    }
    //Missy Armitage performing hypnosis
    else if (state == "Hypnosis") {
      livingRoom.displayMissyArmitage();
    }
    //Dialogue A
    else if (state == "DialogueA") {
      dialogue.displayDialogueA();
    }
    //Dialogue B
    else if (state == "DialogueB") {
      dialogue.displayDialogueB();
    }
    //Dialogue C
    else if (state == "DialogueC") {
      dialogue.displayDialogueC();
    }
    //Dialogue D
    else if (state == "DialogueD") {
      dialogue.displayDialogueD();
    }
    //Close up on eye
    else if (state == "TearyEye") {
      dialogue.displayTearyEye();
    }
    //Dialogue E
    else if (state == "DialogueE") {
      dialogue.displayDialogueE();
      dialogue.checkTime();
    }
    //Main part of the simulation
    else if (state == "SunkenPlace") {
      sunkenPlace.display();
      sunkenPlace.displayCharacter();
      sunkenPlace.characterMovement();
      sunkenPlace.characterPosition();

      //Display the Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].display();
        particles[i].move();
      }
    }
    //Bedroom
    else if (state == "BedRoom") {
      bedRoom.display();
    }
    //Speaker
    else if (state == "Speaker") {
      secretCode.display();
    }
  }
}
