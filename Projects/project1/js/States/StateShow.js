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
    //Main part of the simulation
    else if (state == "SunkenPlace") {
      sunkenPlace.display();
      sunkenPlace.displayCharacter();
      sunkenPlace.characterMovement();

      //Display the Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].display();
        particles[i].move();
      }
    }
  }
}
