/**
Project 2 - Proposal
Alex Cho

*/

"use strict";

//Set the canvas dimensions
let canvas = {
  width: 1280,
  height: 720,
};

//Current response - annyang
let currentResponse = '';

//Booleans for task completion
let task1Done = false;
let task2Done = false;
let task3Done = false;
let task4Done = false;

//Booleans for locations
let locationHome = true;
let locationLab = false;
let locationShrine = false;
let locationTower = false;

//=====Setup Classes=====\\
//Papers
let paper;
//Items
let heartBox;
let machine;
let podium;
let nautical;
//Misc
let dialogue;
let toolBar;

//=====Load Fonts=====\\
//Load text font
let dialogueFont;

//=====Load Sounds=====\\
//TITLE AND INSTRUCTIONS SOUNDS
//Title song
let themeSong;
//Cracking Glass
let glassCrackSFX;

//SCENE A & B SOUNDS
//Wind
let windSFX;

//Map Icon SFX
let homeSFX;
let labSFX;
let shrineSFX;
let towerSFX;

//Toolbar and paper collecting sounds
let journalSFX;
let bagSFX;
let mapSFX;
let paperSFX;

//Home Room SFX
let heartBoxSFX;

//Set the heartbeat sound
let heartbeatSFX;
//Set the detector beep sound
let detectorBeepSFX;

//=====Load Images=====\\
//Load title images
let titleImage1;
let titleImage2;
let titleImage3;
let titleImage4;
let titleImageHov;
let titleTextImage;

//Load up scenery images
//A
let sceneAImage1;
let sceneAImage2;
let sceneAImage3;
//B
let sceneBImage1;
let sceneBImage2;
let sceneBImage3;
//C
let sceneCImage1;
let sceneCImage2;
let sceneCImage3;
//D
let sceneDImage1;
let sceneDImage2;
let sceneDImage3;
//E
let sceneEImage1;
let sceneEImage2;
let sceneEImage3;

//Load Location images
//Load the home images
let home1Image;
let home2Image;
//Load the lab images
let lab1Image;
let lab2Image;
//Load the shrine images
let shrine1Image;
let shrine2Image;
//Load the tower images
let tower1Image;
let tower2Image;

//Load Item Images - Hov = Hovered over
//Paper
let paperImage;
let paperImageHov;

//Load passage images
let passageImage1;
let passageImage2;
let passageImage3;
let passageImage4;

//Load the heartBox images
let heartBoxImage;
let heartBoxImageHov;
//Load the machine images
let machineImage;
let machineImageHov;
//Load the podium images
let podiumImage;
let podiumImageHov;
//Load the nautical images
let nauticalImage;
let nauticalImageHov;

//Load Misc Images
//Exit Button
let exitButtonImage;
let exitButtonImage2;
//Load toolbar images
let toolBarImage;
let toolBarImageHov1;
let toolBarImageHov2;
let toolBarImageHov3;
//Map
let mapImage
let mapImageHov1;
let mapImageHov2;
let mapImageHov3;
let mapImageHov4;
//Bag
let bagImage;
//Journal
let journalImage;
let journalMainPage;
let journalHeartHov;
let journalLogicPadHov;
let journalConfessHov;
let journalNauticalHov;
let journalInfoImage;
let journalInfoImage2;
let journalInfoImage3;
let journalInfoImage4;
let journalInfoImage5;
let journalInfoImage6;

//Task Images
let selectionBarImage;
let selectionBarImage2;
let selectionBarImage3;
let selectionBarImage4;

//State variable
let state;

//Load in the assets
function preload() {
  //preload up fonts
  dialogueFont = loadFont("assets/fonts/sketchy.ttf");

  //preload sounds
  glassCrackSFX = loadSound("assets/sounds/glassCrack.wav");

  windSFX = loadSound("assets/sounds/wind.wav");

  heartBoxSFX = loadSound("assets/sounds/heartbox.wav");

  journalSFX = loadSound("assets/sounds/journal.wav");
  bagSFX = loadSound("assets/sounds/bag.wav");
  mapSFX = loadSound("assets/sounds/map.wav");
  paperSFX = loadSound("assets/sounds/paper.wav");

  homeSFX = loadSound("assets/sounds/home.wav");
  labSFX = loadSound("assets/sounds/lab.wav");
  shrineSFX = loadSound("assets/sounds/shrine.wav");
  towerSFX = loadSound("assets/sounds/tower.wav");

  heartbeatSFX = loadSound("assets/sounds/heartmonitor.wav");

  detectorBeepSFX = loadSound("assets/sounds/detectedBeep.wav");

  //preload music
  themeSong = loadSound("assets/sounds/guitarloop.wav");

  //preload images
  titleImage1 = loadImage("assets/images/scenes/title/crack1.png");
  titleImage2 = loadImage("assets/images/scenes/title/crack2.png");
  titleImage3 = loadImage("assets/images/scenes/title/crack3.png");
  titleImage4 = loadImage("assets/images/scenes/title/crack4.png");
  titleImageHov = loadImage("assets/images/scenes/title/playhovered.png");
  titleTextImage = loadImage("assets/images/scenes/title/titletext.png");

  sceneAImage1 = loadImage("assets/images/scenes/scene1.png");
  sceneAImage2 = loadImage("assets/images/scenes/scene2.png");
  sceneAImage3 = loadImage("assets/images/scenes/scene3.png");

  sceneBImage1 = loadImage("assets/images/scenes/home1.png");
  sceneBImage2 = loadImage("assets/images/scenes/home2.png");
  sceneBImage3 = loadImage("assets/images/scenes/home3.png");

  sceneCImage1 = loadImage("assets/images/scenes/lab1.png");
  sceneCImage2 = loadImage("assets/images/scenes/lab2.png");
  sceneCImage3 = loadImage("assets/images/scenes/lab3.png");

  sceneDImage1 = loadImage("assets/images/scenes/shrine1.png");
  sceneDImage2 = loadImage("assets/images/scenes/shrine2.png");
  sceneDImage3 = loadImage("assets/images/scenes/shrine3.png");

  sceneEImage1 = loadImage("assets/images/scenes/tower1.png");
  sceneEImage2 = loadImage("assets/images/scenes/tower2.png");
  sceneEImage3 = loadImage("assets/images/scenes/tower3.png");

  home1Image = loadImage("assets/images/locations/home.png");
  home2Image = loadImage("assets/images/locations/home2.png");

  lab1Image = loadImage("assets/images/locations/lab.png");
  lab2Image = loadImage("assets/images/locations/lab2.png");

  shrine1Image = loadImage("assets/images/locations/shrine.png");
  shrine2Image = loadImage("assets/images/locations/shrine2.png");

  tower1Image = loadImage("assets/images/locations/tower.png");
  tower2Image = loadImage("assets/images/locations/tower2.png");

  paperImage = loadImage("assets/images/items/paper.png");
  paperImageHov = loadImage("assets/images/items/paper2.png");

  passageImage1 = loadImage("assets/images/passages/passage.png");
  passageImage2 = loadImage("assets/images/passages/passage2.png");
  passageImage3 = loadImage("assets/images/passages/passage3.png");
  passageImage4 = loadImage("assets/images/passages/passage4.png");

  heartBoxImage = loadImage("assets/images/items/heartbox.png");
  heartBoxImageHov = loadImage("assets/images/items/heartbox2.png");

  machineImage = loadImage("assets/images/items/machine.png");
  machineImageHov = loadImage("assets/images/items/machine2.png");

  podiumImage = loadImage("assets/images/items/podium.png");
  podiumImageHov = loadImage("assets/images/items/podium2.png");

  nauticalImage = loadImage("assets/images/items/nautical.png");
  nauticalImageHov = loadImage("assets/images/items/nautical2.png");

  exitButtonImage = loadImage("assets/images/toolbar/exit/exitButton.png");
  exitButtonImage2 = loadImage("assets/images/toolbar/exit/exitButton2.png");

  toolBarImage = loadImage("assets/images/toolbar/toolbar.png");
  toolBarImageHov1 = loadImage("assets/images/toolbar/toolbar2.png");
  toolBarImageHov2 = loadImage("assets/images/toolbar/toolbar3.png");
  toolBarImageHov3 = loadImage("assets/images/toolbar/toolbar4.png");

  mapImage = loadImage("assets/images/toolbar/map/map0.png");
  mapImageHov1 = loadImage("assets/images/toolbar/map/map1.png");
  mapImageHov2 = loadImage("assets/images/toolbar/map/map2.png");
  mapImageHov3 = loadImage("assets/images/toolbar/map/map3.png");
  mapImageHov4 = loadImage("assets/images/toolbar/map/map4.png");

  bagImage = loadImage("assets/images/toolbar/bag/bag.png");

  journalImage = loadImage("assets/images/toolbar/journal/journal.png");
  journalMainPage = loadImage("assets/images/toolbar/journal/mainPage.png");
  journalHeartHov = loadImage("assets/images/toolbar/journal/heartTaskIcon.png");
  journalLogicPadHov = loadImage("assets/images/toolbar/journal/logicPadIcon.png");
  journalConfessHov = loadImage("assets/images/toolbar/journal/confessIcon.png");
  journalNauticalHov = loadImage("assets/images/toolbar/journal/nauticalIcon.png");
  journalInfoImage = loadImage("assets/images/toolbar/journal/info1.png");
  journalInfoImage2 = loadImage("assets/images/toolbar/journal/info2.png");
  journalInfoImage3 = loadImage("assets/images/toolbar/journal/info3.png");
  journalInfoImage4 = loadImage("assets/images/toolbar/journal/info4.png");
  journalInfoImage5 = loadImage("assets/images/toolbar/journal/info5.png");
  journalInfoImage6 = loadImage("assets/images/toolbar/journal/info6.png");

  selectionBarImage = loadImage("assets/images/taskItems/selectionbar.png");
  selectionBarImage2 = loadImage("assets/images/taskItems/selectionbar1.png");
  selectionBarImage3 = loadImage("assets/images/taskItems/selectionbar2.png");
  selectionBarImage4 = loadImage("assets/images/taskItems/selectionbar3.png");
}

//What needs to be setup before starting
function setup() {
  //Audio Settings
  userStartAudio();

  //Set up annyang
  if (annyang) {
    let commands = {
      '*answer' : guessAnswer
    };

    annyang.addCommands(commands);
    annyang.start();
  }

  //create the canvas
  createCanvas(canvas.width, canvas.height);

  //Classes that must be called in setup
  //state = new Tower(1280, 720, 640, 360);
  state = new PreTitle(1280, 720, 640, 360);
  //Papers
  paper = new Paper();
  //Items
  heartBox = new HeartBox();
  machine = new Machine();
  podium = new Podium();
  nautical = new Nautical();
  //Dialogue effect
  dialogue = new Dialogue();
  //Toolbar
  toolBar = new ToolBar();
}

//Displaying the entities
function draw() {
  state.display();

  //Notify that the tasks are completed
  tasksCompleted();
}

function tasksCompleted() {
  if (task1Done === true && task2Done === true && task3Done === true && task4Done === true) {
    //state = new
  }
}

//Put the input of the answer into lower case
function guessAnswer(answer) {
  currentResponse = answer.toLowerCase();
  console.log(currentResponse);
}

//Key pressed functionality
function keyPressed() {
  state.keyPressed();
}

//mouse clicked functionality
function mouseClicked() {
  state.mouseClicked();
}
