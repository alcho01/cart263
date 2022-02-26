//Display the states within this class
class StateDisplayer {
  constructor() {

  }

  activate() {
    if (state === 'heartbeat') {
      heartMonitor.displayLine();
    }
  }
}
