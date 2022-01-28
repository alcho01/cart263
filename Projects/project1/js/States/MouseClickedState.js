//This holds all functionality for mouse clicked events
//Depending on states where the mouse is needed for interactivity
class MouseClickedState {
  constructor() {
    //Nothing to do here
  }
  //Know what state it is in to enable the mouseclicked
  activate() {
    //Mouse clicked ready for the title
    if (state == 'Title') {
      titleState.mouseClicked();
    }
    //Mouse clicked ready for the Outside
    else if (state == 'Outside') {
      outsideHouse.mouseClicked();
    }
    //Mouse clicked ready for the Entrance
    else if (state == 'Entrance') {
      entranceHouse.mouseClicked();
    }
    //Mouse clicked ready for the Living Room 
    else if (state == 'LivingRoom') {
      livingRoom.mouseClicked();
    }
    //Mouse clicked ready for the Bed Room
    else if (state == 'BedRoom') {
      bedRoom.mouseClicked();
    }
  }
}
