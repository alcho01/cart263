//This class will determine what state the simulation is in and what will be displayed for each state
class StateShow {
  constructor() {
    //Nothing needed
  }

  //Display the states
  display() {
    //Pre title state
    if (state == "PreTitle") {
      preTitleState.display();
    }
    //The title screen
    if (state == "Title") {
      titleState.display();
    }
    //Main part of the simulation
    if (state == "Simulation") {
      simulation.display();
      simulation.displayCharacter();
      simulation.characterMovement();

      for (let i = 0; i < particles.length; i++) {
        particles[i].display();
        particles[i].move();
      }
    }
  }
}
