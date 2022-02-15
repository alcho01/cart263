/**
Project 1 - Get Out
Alex Cho

Brief
Place in a film [DONE]
Interactive Scenes [DONE]
Film Experience [DONE]
Tell a part of the film [DONE]
Interactive[DONE]
Uses p5.js [DONE]
Uses other libraries (P5.sound, responsiveVoice, and Annyang) [DONE]
Include Artist Statement in readme [DONE]
*/

"use strict";

//Audio Settings
//create to add p5 amplitude
let amplitude;
//Setting the volume of sounds
let maxVolume = 0.1;
let maxMusicVolume = 0.3;
let radioVolume = 2;
let struggleVolume = 2.5;

//Setting the canvas dimensions
let canvasDimensions = {
  w: 800,
  h: 1000,
};

//Arrays for the floating particles
let particles = [];
let numParticles = 20;

//Preparing a class for p5 functions
let stateShow;
let mouseClickedState;
let keyPressedState;

//Preparing classes for states
let preTitleState;
let titleState;
let instructions
let outsideHouse;
let entranceHouse;
let livingRoom;
let dialogue;
let sunkenPlace;
let bedRoom;
let secretCode;
let hallway;
let basement;
let leftArm;
let rightArm;
let boots;
let tv;
let coagula;
let credits;

//Determine what the starting state should be
let state = "PreTitle"; //pretitle

//Every variable is organized by the order of the story from the title to each act to the end.

//--Title Entities--//

//Images for the title which will be animated through frameCount
let titleImage1;
let titleImage2;
let titleImage3;

//Title Song
let titleTheme;

//Instructions
let instructionsImage;

//--Simulation Entities--//

//ACT 1 (Includes Outside Of House, Entrance To House)
//SFX
let windSFX;
let footStepSFX;
let frontDoorSFX;
let indoorFootStepSFX;
let houseSoundTrack;
//Outside of the house image
let outsideHouseImage;
//Entrance of the house image
let entranceHouseImage;

//ACT 2 (Includes The living room, sunken place)

//The living room image
let livingRoomImage;
let inChairImage;
//Sequence of missy armitage stirring the cup
let missyArmitageImage;
let missyArmitageImage2;
let missyArmitageImage3;
//Sequence of dialogue images
let dialogueAImage;
let dialogueA2Image;
let dialogueBImage;
let dialogueB2Image;
let dialogueCImage;
let dialogueC2Image;
let dialogueDImage;
let dialogueD2Image;
let dialogueEImage;
let dialogueE2Image;
//Close up of teary eye
let tearyEyeImage;
let tearyEyeImage2;

//Dialogue Audio
let dialogueASFX;
let dialogueBSFX;
let dialogueCSFX;
let dialogueDSFX;
let dialogueESFX;

//Hypnosis song
let hypnosisSong;
//SunkenPlace Song
let sunkenPlaceSong;

//The character falling in the sunken place
let fallingImage1;
let fallingImage2;
let fallingImage3;

//The bedroom image
let bedRoomImage;
//Radio Static sfx
let radioStaticSFX;
//Locked Door sfx
let lockedDoorSFX;

//Act 3

//Secret Code Image
let secretCodeImage;
//Current Response of voice input
let currentResponse = '';
//Door unlocked SFX
let doorUnlockedSFX;

//Hallway Image
let hallwayImage;
//Whitenoise SFX
let whiteNoiseSFX;

//basement Images
let basementImage1;
let basementImage2;

//Untying SFX
let struggleSFX;
let breathSFX;

//Unshackling left arm images
let leftArmImage1;
let leftArmImage2;
let leftArmImage3;
//Unshackling right arm images
let rightArmImage1;
let rightArmImage2;
let rightArmImage3;
//Unshackling boots images
let bootsImage1;
let bootsImage2;
let bootsImage3;

//Tv image
let tvImage;
//Tv noise
let tvSFX;

//Squelch noise
let squelchSFX;
//Narration voice
let narrationSFX;

//Ending

//Credits image
let creditsImage;

//Preload sounds/images
function preload() {

  //INTRO

  //Preloading the title theme song
  titleTheme = loadSound("assets/sounds/title/titlesong.mp3");
  //Preloading the title images 1,2,3
  titleImage1 = loadImage("assets/images/Title/titlesequence1.png");
  titleImage2 = loadImage("assets/images/Title/titlesequence2.png");
  titleImage3 = loadImage("assets/images/Title/titlesequence3.png");
  //Preload the instructions image
  instructionsImage = loadImage("assets/images/Title/instructions.png");

  //ACT 1

  //Wind Sound Preload
  windSFX = loadSound("assets/sounds/wind.mp3");
  //Footstep Sound Preload
  footStepSFX = loadSound("assets/sounds/footstep.wav");
  //Front Door Sound Preload
  frontDoorSFX = loadSound("assets/sounds/frontdoor.wav");
  //Indoor foot step sound Preload
  indoorFootStepSFX = loadSound("assets/sounds/footstep2.wav");
  //House sound track
  houseSoundTrack = loadSound("assets/sounds/housesoundtrack.mp3");

  //Preloading the outside/entrance of the house image
  outsideHouseImage = loadImage("assets/images/Simulation/house.png");
  entranceHouseImage = loadImage("assets/images/Simulation/Entrance.png");

  //ACT 2
  //Preload the living room image
  livingRoomImage = loadImage("assets/images/Simulation/livingroom.png");
  //Preload the protagonist in the chair
  inChairImage = loadImage("assets/images/Simulation/inchair.png");
  //Preload the sequence of missy armitage
  missyArmitageImage = loadImage("assets/images/Simulation/hypnosis.png");
  missyArmitageImage2 = loadImage("assets/images/Simulation/hypnosis2.png");
  missyArmitageImage3 = loadImage("assets/images/Simulation/hypnosis3.png");

  //Song playing during the hypnosis scene
  hypnosisSong = loadSound("assets/sounds/hypnosis.mp3");

  //Preload the sequence of dialogue
  dialogueAImage = loadImage("assets/images/Dialogue/DialogueA.png");
  dialogueA2Image = loadImage("assets/images/Dialogue/DialogueA2.png");
  dialogueBImage = loadImage("assets/images/Dialogue/DialogueB.png");
  dialogueB2Image = loadImage("assets/images/Dialogue/DialogueB2.png");
  dialogueCImage = loadImage("assets/images/Dialogue/DialogueC.png");
  dialogueC2Image = loadImage("assets/images/Dialogue/DialogueC2.png");
  dialogueDImage = loadImage("assets/images/Dialogue/DialogueD.png");
  dialogueD2Image = loadImage("assets/images/Dialogue/DialogueD2.png");
  dialogueEImage = loadImage("assets/images/Dialogue/DialogueE.png");
  dialogueE2Image = loadImage("assets/images/Dialogue/DialogueE2.png");

  //Dialogue Audio
  dialogueASFX = loadSound("assets/sounds/line1.wav");
  dialogueBSFX = loadSound("assets/sounds/line2.wav");
  dialogueCSFX = loadSound("assets/sounds/line3.wav");
  dialogueDSFX = loadSound("assets/sounds/line4.wav");
  dialogueESFX = loadSound("assets/sounds/line5.wav");

  //Teary Eye Image Sequence
  tearyEyeImage = loadImage("assets/images/Simulation/eye1.png");
  tearyEyeImage2 = loadImage("assets/images/Simulation/eye2.png");

  //Song playing while in the sunken place
  sunkenPlaceSong = loadSound("assets/sounds/song.mp3");
  //Preloading the character falling during the simulation
  fallingImage1 = loadImage("assets/images/Simulation/falling1.png");
  fallingImage2 = loadImage("assets/images/Simulation/falling2.png");
  fallingImage3 = loadImage("assets/images/Simulation/falling3.png");

  //Preloading the bedroom image
  bedRoomImage = loadImage("assets/images/Simulation/bedroom.png");
  //radioStaticSFX
  radioStaticSFX = loadSound("assets/sounds/radiostatic.wav");
  //Locked Door SFX
  lockedDoorSFX = loadSound("assets/sounds/lockeddoor.wav");

  //Act 3
  //Load the secret code image
  secretCodeImage = loadImage("assets/images/Simulation/secretcode.png");
  //Load the door unlocked SFX
  doorUnlockedSFX = loadSound("assets/sounds/doorunlocked.wav");

  //Load the hallway image
  hallwayImage = loadImage("assets/images/Simulation/hallway.png");
  //Load the whiteNoiseSFX
  whiteNoiseSFX = loadSound("assets/sounds/whitenoise.wav");

  //Load the basement images
  basementImage1 = loadImage("assets/images/Simulation/stucktochair.png");
  basementImage2 = loadImage("assets/images/Simulation/stucktochair2.png");

  //Load the untying SFX
  struggleSFX = loadSound("assets/sounds/struggle.wav");
  breathSFX = loadSound("assets/sounds/breath.wav");

  //Load the left arm Images
  leftArmImage1 = loadImage("assets/images/Simulation/untie.png");
  leftArmImage2 = loadImage("assets/images/Simulation/untie2.png");
  leftArmImage3 = loadImage("assets/images/Simulation/untie3.png");
  //Load the right arm Images
  rightArmImage1 = loadImage("assets/images/Simulation/rightarm.png");
  rightArmImage2 = loadImage("assets/images/Simulation/rightarm2.png");
  rightArmImage3 = loadImage("assets/images/Simulation/rightarm3.png");
  //Load the boots Images
  bootsImage1 = loadImage("assets/images/Simulation/boots.png");
  bootsImage2 = loadImage("assets/images/Simulation/boots2.png");
  bootsImage3 = loadImage("assets/images/Simulation/boots3.png");

  //Load the TV screen image
  tvImage = loadImage("assets/images/Simulation/tv.png");
  //Load the TV noise SFX
  tvSFX = loadSound("assets/sounds/tvnoise.wav");

  //Load the squelching SFX
  squelchSFX = loadSound("assets/sounds/squelch.wav");
  //Load the narration SFX
  narrationSFX = loadSound("assets/sounds/narrationOnTv.wav");

  //Ending
  //Load the credits
  creditsImage = loadImage("assets/images/Simulation/credits.png");
}

//Setting up audio settings/preparing the canvas/adding different libraries/setting up classes
function setup() {
  //Audio Settings
  userStartAudio();
  houseSoundTrack.setVolume(maxMusicVolume);
  indoorFootStepSFX.setVolume(maxVolume);
  radioStaticSFX.setVolume(radioVolume);
  struggleSFX.setVolume(struggleVolume);

  //Create the canvas
  createCanvas(canvasDimensions.w, canvasDimensions.h);

  //Add the p5sound library
  amplitude = new p5.Amplitude();
  amplitude.setInput(sunkenPlaceSong);

  //Setup Annyang
  if (annyang) {
    let commands = {
      '*answer' : guessAnswer
    };

    annyang.addCommands(commands);
    annyang.start();
  }

  //For loop for the particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  //Create the class to hold the p5 functions
  stateShow = new StateShow();
  mouseClickedState = new MouseClickedState();
  keyPressedState = new KeyPressedState();

  //Create the class for the pretitle state
  preTitleState = new PreTitleState(800, 1000, 400, 500);
  //Create the class for the title state
  titleState = new TitleState(800, 1000, 400, 500, titleImage1, titleImage2, titleImage3);
  //Create the class for the instructions
  instructions = new Instructions(800, 1000, 400, 500, instructionsImage);
  //Create the class for the outside of the house
  outsideHouse = new OutsideHouse(800, 1000, 400, 500, outsideHouseImage);
  //Create the class for the entrance of the house which extends to multiple rooms
  entranceHouse = new EntranceHouse(800, 1000, 400, 500, entranceHouseImage);

  //Create the class for the living room
  livingRoom = new LivingRoom(800, 1000, 400, 500, livingRoomImage, inChairImage);
  //Create the class for the dialogue scenes
  dialogue = new Dialogue(800, 1000, 400, 500);
  //Create the class for the simulation
  sunkenPlace = new SunkenPlace(800, 1000, 400, 500, fallingImage1, fallingImage2, fallingImage3);
  //Create the class for the bedroom
  bedRoom = new BedRoom(800, 1000, 400, 500, bedRoomImage);

  //Create the class for the secret code
  secretCode = new SecretCode(800, 1000, 400, 500, secretCodeImage);
  //Create the class for the hallway
  hallway = new Hallway(800, 1000, 400, 500, hallwayImage);
  //Create the class for the basement
  basement = new Basement(800, 1000, 400, 500, basementImage1, basementImage2);
  //Create the class for the left arm
  leftArm = new LeftArm(800, 1000, 400, 500, leftArmImage1, leftArmImage2, leftArmImage3);
  //Create the class for the right arm
  rightArm = new RightArm(800, 1000, 400, 500, rightArmImage1, rightArmImage2, rightArmImage3);
  //Create the class for the boots
  boots = new Boots(800, 1000, 400, 500, bootsImage1, bootsImage2, bootsImage3);
  //Create the class for the tv
  tv = new Tv(800, 1000, 400, 500, tvImage);
  //Create the coagula(blob) that is seen in the tv
  coagula = new Coagula(800, 1000, 400, 500);

  //Create the class for the credis
  credits = new Credits(800, 1000, 400, 2500, creditsImage);
}

//Displaying the states
function draw() {
  //This will contain what is being displayed based on what state it is in
  stateShow.titleActivate();
  stateShow.act1Activate();
  stateShow.act2Activate();
  stateShow.act3Activate();
  stateShow.endingActivate();
}

//Key pressed functionality
function keyPressed() {
  //This will contain what is being done when a key is pressed
  keyPressedState.titleActivate();
  keyPressedState.act1Activate();
  keyPressedState.act2Activate();
  keyPressedState.act3Activate();
}

//Mouse clicked functionality
function mouseClicked() {
  //This will contain what is being displayed for when a state has a mouse clicked function
  mouseClickedState.titleActivate();
  mouseClickedState.act1Activate();
  mouseClickedState.act2Activate();
  mouseClickedState.act3Activate();
}

//Put the voice input to lower case to avoid errors
function guessAnswer(answer) {
  currentResponse = answer.toLowerCase();
  //console.log(currentResponse);
}
