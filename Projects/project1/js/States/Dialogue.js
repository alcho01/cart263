//Everything related to the dialogue scenes
class Dialogue {
  constructor(w, h) {
    //position
    this.x = 400;
    this.y = 500;

    //dimensions
    this.width = w;
    this.height = h;

    //Images
    this.dialogueAImage = dialogueAImage;
    this.dialogueA2Image = dialogueA2Image;
    this.dialogueBImage = dialogueBImage;
    this.dialogueB2Image = dialogueB2Image;
    this.dialogueCImage = dialogueCImage;
    this.dialogueC2Image = dialogueC2Image;
    this.dialogueDImage = dialogueDImage;
    this.dialogueD2Image = dialogueD2Image;
    this.dialogueEImage = dialogueEImage;
    this.dialogueE2Image = dialogueE2Image;
  }

  //Display the first piece of dialogue
  displayDialogueA() {
    push();
    imageMode(CENTER);
    if (frameCount % 60 < 10 / 2) {
      image(this.dialogueAImage, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.dialogueA2Image, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //Key pressed for dialogue A 
  keyPressedA() {
    if (keyCode === 32) {
      state = 'DialogueA';
    }
  }
}
