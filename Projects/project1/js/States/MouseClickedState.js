//This holds all functionality for mouse clicked events
class MouseClickedState {
  constructor() {
    //Nothing to do here
  }

  //Know what state it is in to enable the mouseclicked
  activate() {
    if (state == 'Title') {
      titleState.mouseClicked();
    }
    else if (state == 'Outside') {
      outsideHouse.mouseClicked();
    }
    else if (state == 'Entrance') {
      entranceHouse.mouseClicked();
    }
    else if (state == 'LivingRoom') {
      livingRoom.mouseClicked();
    }
    else if (state == 'BedRoom') {
      bedRoom.mouseClicked();
    }
  }
}
