//Class containing the machine object
//This is to display the machine object when hovered and not hovered
//Add a clickbox around the machine 
class Machine {
  constructor() {
    //Dimensions
    this.width = 1240;
    this.height = 660;

    //position
    this.x = 104;
    this.y = 330;

    //images
    this.machineImage = machineImage;
    this.machineImageHov = machineImageHov;

    //constraints
    this.machineConstraints = {
      x: 83,
      x2: 245,
      y: 230,
      y2: 417,
    };
  }

  //Display the machine without the hover
  display() {
    push();
    imageMode(CENTER);
    image(this.machineImage, this.x, this.y, this.width, this.height);
    pop();
    //Display this if possible
    this.checkHover();
  }

  //Display the hovered image
  displayHover() {
    push();
    imageMode(CENTER);
    image(this.machineImageHov, this.x, this.y, this.width, this.height);
    pop();
  }

  //Check if the mouse is hovered over the machine
  checkHover() {
    //Check to see if it is within these constraints
    if (mouseX > this.machineConstraints.x && mouseX < this.machineConstraints.x2){
      if (mouseY > this.machineConstraints.y && mouseY < this.machineConstraints.y2) {
        //If it is display the hovered image
        this.displayHover();
      }
    }
  }

  //Check to see if the machine is clicked on
  mouseClicked() {
    //Check to see if it is within these constraints
    if (mouseX > this.machineConstraints.x && mouseX < this.machineConstraints.x2){
      if (mouseY > this.machineConstraints.y && mouseY < this.machineConstraints.y2) {
        //Change states when clicked
        state = new LogicPad;
      }
    }
  }
}
