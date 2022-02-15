//This class contains the basement info and interaction
//Display the basement as an animation flickering between both images
class Basement extends Universal {
  constructor(w, h, x, y, basementImage1, basementImage2) {
    //extend from the universal class
    super(w, h, x, y);

    //images
    this.basementImage1 = basementImage1;
    this.basementImage2 = basementImage2;

    //tv Constraints
    this.tv = {
      x: 268,
      x2: 528,
      y: 0,
      y2: 220,
    };
  }

  //Display the basement image as animated
  display() {
    push();
    imageMode(CENTER);
    if (frameCount % 120 < 15 / 2) {
      image(this.basementImage1, this.x, this.y, this.width, this.height);
    } else if (frameCount % 30 < 15 / 2) {
      image(this.basementImage2, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //mouse clicked functionality
  mouseClicked() {
    //Calculate the tv's position
    if (mouseX > this.tv.x && mouseX < this.tv.x2) {
      if (mouseY > this.tv.y && mouseY < this.tv.y2) {
        //console.log('tv');
        //Switch states
        state = "Tv";
        //Stop the music
        houseSoundTrack.stop();
        //Play the Tv SFX
        tvSFX.play();
      }
    }
  }
}
