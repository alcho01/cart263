//This class will determine what state the simulation is in and what will be displayed for each state
//Created in its own class for organization purposes
class StateShow {
  constructor() {
    //Nothing needed
  }
  //Display the states for the titles sequences
  titleActivate() {
    //Pre title state
    if (state === "PreTitle") {
      preTitleState.display();
    }
    //The title screen
    else if (state === "Title") {
      titleState.display();
    }
  }

  //Display Act 1 states
  act1Activate() {
    //Outside of the house
    if (state === "Outside") {
      outsideHouse.display();
    }
    //Entrance of the house
    else if (state === "Entrance") {
      entranceHouse.display();
      entranceHouse.displayAlert();
      hallway.resetPosition();
    }
  }

  //Display Act 2 states
  act2Activate() {
    //The living room
    if (state === "LivingRoom") {
      livingRoom.display();
    }
    //In the Chair
    else if (state === "InChair") {
      livingRoom.displayInChair();
      livingRoom.displayAlert();
    }
    //Missy Armitage performing hypnosis
    else if (state === "Hypnosis") {
      livingRoom.displayMissyArmitage();
    }
    //Dialogue A
    else if (state === "DialogueA") {
      dialogue.displayDialogueA();
    }
    //Dialogue B
    else if (state === "DialogueB") {
      dialogue.displayDialogueB();
    }
    //Dialogue C
    else if (state === "DialogueC") {
      dialogue.displayDialogueC();
    }
    //Dialogue D
    else if (state === "DialogueD") {
      dialogue.displayDialogueD();
    }
    //Close up on eye
    else if (state === "TearyEye") {
      dialogue.displayTearyEye();
    }
    //Dialogue E
    else if (state === "DialogueE") {
      dialogue.displayDialogueE();
      dialogue.checkTime();
    }
    //Main part of the simulation
    else if (state === "SunkenPlace") {
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
    else if (state === "BedRoom") {
      bedRoom.display();
    }
  }

    //Display Act 3 States
    act3Activate() {
    //Speaker
    if (state === "Speaker") {
      secretCode.display();
      //If the current response from annyang is equal to annyang output "rotten"
      if (currentResponse === entranceHouse.answer) {
        //Revert to the entrance state
        state = "Entrance";
        //Reset the current response so it does not interfer with anything like the doorUnlockedSFX
        currentResponse = '';
        //play this sound cue that identifies that the basement door is now able to be clicked
        doorUnlockedSFX.play();
        //Change the boolean of doorLocked to false
        doorLocked = false;
      }
    }
    //Display the hallway
    else if (state === "Hallway") {
      //Display the hallway
      hallway.display();
      //Check if walked through entrance
      hallway.checkPosition();
    }
    //Display chris in the chair
    else if (state === "Basement") {
      //Stop the whiteNoise
      whiteNoiseSFX.stop();
      //Display the basement
      basement.display();
      //Display the cube //And movement
      basement.cubeDisplay();
    }
  }
}
