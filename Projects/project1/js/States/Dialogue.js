//Everything related to the dialogue scenes
class Dialogue {
  constructor(w, h) {
    //position
    this.x = 400;
    this.y = 500;

    //dimensions
    this.width = w;
    this.height = h;

    //Timer
    this.timer = 18;

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

    //teary eye
    this.tearyEyeImage = tearyEyeImage;
    this.tearyEyeImage2 = tearyEyeImage2;
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
  //Display the second piece of dialogue
  displayDialogueB() {
    push();
    imageMode(CENTER);
    if (frameCount % 60 < 10 / 2) {
      image(this.dialogueBImage, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.dialogueB2Image, this.x, this.y, this.width, this.height);
    }
    pop();
  }
  //Display the third piece of dialogue
  displayDialogueC() {
    push();
    imageMode(CENTER);
    if (frameCount % 60 < 10 / 2) {
      image(this.dialogueCImage, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.dialogueC2Image, this.x, this.y, this.width, this.height);
    }
    pop();
  }
  //Display the fourth piece of dialogue
  displayDialogueD() {
    push();
    imageMode(CENTER);
    if (frameCount % 60 < 10 / 2) {
      image(this.dialogueDImage, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.dialogueD2Image, this.x, this.y, this.width, this.height);
    }
    pop();
  }
  //Display the fifth piece of dialogue
  displayDialogueE() {
    push();
    imageMode(CENTER);
    if (frameCount % 60 < 10 / 2) {
      image(this.dialogueEImage, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.dialogueE2Image, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //Display the teary eye sequence
  displayTearyEye() {
    push();
    imageMode(CENTER);
    if (frameCount % 60 < 10 / 2) {
      image(this.tearyEyeImage, this.x, this.y, this.width, this.height);
    } else if (frameCount % 40 < 10 / 2) {
      image(this.tearyEyeImage2, this.x, this.y, this.width, this.height);
    }
    pop();
  }

  //If the timer hits 0
  checkTime() {
    this.timer -= 1 / 60;
    if (this.timer <= 0) {
      this.timer = 0;
      state = 'SunkenPlace';
      dialogueASFX.stop();
      dialogueBSFX.stop();
      dialogueCSFX.stop();
      dialogueDSFX.stop();
      dialogueESFX.stop();
      hypnosisSong.stop();
      sunkenPlaceSong.play();
    }
  }

  //Key pressed for dialogue A
  keyPressed() {
    if (keyCode === 32) {
      state = 'DialogueA';
      //hypnosisSong.stop();
      dialogueASFX.play();
    }
  }
  //Key pressed for dialogue B
  keyPressedB() {
    if (keyCode === 32) {
      state = 'DialogueB';
      //hypnosisSong.stop();
      dialogueBSFX.play();
      dialogueASFX.stop();
    }
  }
  //Key pressed for dialogue C
  keyPressedC() {
    if (keyCode === 32) {
      state = 'DialogueC';
      //hypnosisSong.stop();
      dialogueCSFX.play();
      dialogueASFX.stop();
      dialogueBSFX.stop();
    }
  }
  //Key pressed for dialogue D
  keyPressedD() {
    if (keyCode === 32) {
      state = 'DialogueD';
      //hypnosisSong.stop();
      dialogueDSFX.play();
      dialogueASFX.stop();
      dialogueBSFX.stop();
      dialogueCSFX.stop();
    }
  }
  //Key pressed on close up of eye
  keyPressedEye() {
    if (keyCode === 32) {
      state = 'TearyEye';
    }
  }
  //Key pressed for dialogue E
  keyPressedE() {
    if (keyCode === 32) {
      state = 'DialogueE';
      //hypnosisSong.stop();
      dialogueESFX.play();
      dialogueASFX.stop();
      dialogueBSFX.stop();
      dialogueCSFX.stop();
      dialogueDSFX.stop();
    }
  }
}
