//This holds all functionality for mouse clicked events
//Depending on states where the mouse is needed for interactivity
class MouseClickedState {
  constructor() {
    //Nothing to do here
  }

  //Know what state it is in to enable the mouseclicked
  titleActivate() {
    //Mouse clicked ready for the title
    if (state === 'Title') {
      titleState.mouseClicked();
    }
  }

  //Act 1
  act1Activate() {
    //Mouse clicked ready for the Outside
    if (state === 'Outside') {
      outsideHouse.mouseClicked();
    }
    //Mouse clicked ready for the Entrance
    else if (state === 'Entrance') {
      entranceHouse.mouseClicked();
    }
  }

  //Act 2
  act2Activate() {
    //Mouse clicked ready for the Living Room
    if (state === 'LivingRoom') {
      livingRoom.mouseClicked();
    }
    //Mouse clicked ready for the Bed Room
    else if (state === 'BedRoom') {
      bedRoom.mouseClicked();
    }
  }

  //Act 3
  act3Activate() {
    //Mouse Clicked ready for when the tv is clicked
    if (state === 'Basement') {
      basement.mouseClicked();
    }
    //Mouse Clicked ready for when the tv play button is clicked
    else if (state === 'Tv') {
      tv.mouseClicked();
    }
  }
}
