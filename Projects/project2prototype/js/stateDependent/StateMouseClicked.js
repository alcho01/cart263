//Class that holds all mouse clicked functionality
class StateMouseClicked {
  constructor() {

  }

  //Mouse clicked activates on task
  activateTasks() {
    if (state === 'home') {
      heartBox.onClicked();
    }
  }
}
