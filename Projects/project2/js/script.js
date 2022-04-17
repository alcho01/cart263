/**
Project 2 - DISTRACTIONS
Alex Cho

The script contains mostly assets(image & sound) that are required to be loaded in.
There are a couple boolean systems that are implemented in the script since I thought they were universal, and didn't have to be in their own classes.
I called classes that can't be called anywhere else.
I implemented annyang in the setup.
I added a function to check when all the tasks are complete (again, more of a universal function - therefore, I decided to use it in the script).

GAME DESCRIPTION
The game follows a young adult coping with his mother's addiction and sudden death.
The goal of the game is to complete all the tasks. The tasks are repetitive to reflect the idea of addiction.
They are also abstract in the sense that these tasks are very random and don't make much sense. Ultimately, they serve as a distraction for the protagonist.
There is also more of a story-based element if the user decides to collect the notes scattered throughout each location.
Each note provides a backstory and insight into the protagonist’s life and his mother's life. The storyline takes place over several days.
Going from one location to another is considered a new day.

Checklist
[DONE]Pretitle
[DONE]Interactive Title Screen - Cracked Glass
[DONE]Instruction Page
[DONE]Simple cinematic cutscenes of the environment animated with framecount
[DONE]Opening Dialogue
[DONE]Home Location - 1 Task
[DONE]Lab Location - 1 task
[DONE]Shrine Location - 1 task
[DONE]Tower Location - 1 task
[DONE]Hover methods
[DONE]Heartbeat task
[DONE]LogicPad task
[DONE]Confession task
[DONE]Detector task
[DONE]Toolbar
[DONE]Journal Info
[DONE]Bag
[DONE]Map
[DONE]Passages
[DONE]Ending
[]Add sounds
[]Clean up code

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

//Booleans for determining locations
let locationHome = true;
let locationLab = false;
let locationShrine = false;
let locationTower = false;
let locationDadHome = false;

//=====Setup Classes=====\\
//Paper
let paper;
//Passage book
let book;
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
//Themed songs for location
let homeThemeSong;
let labThemeSong;
let shrineThemeSong;
let towerThemeSong;
let dadHomeThemeSong;
//Cracking Glass
let glassCrackSFX;
//SCENE A, B, C, D SOUND
//Wind
let windSFX;
//SCENE E SOUND
//Ocean
let oceanSFX;
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
//Item clicked on SFX
let heartBoxSFX;
let machineSFX;
let confessSFX;
let detectorSFX;
//IN TASK SOUNDS
//Set the heartbeat sound
let heartbeatSFX;
//Set the detector beep sound
let detectorBeepSFX;
//Set the connected sound
let connectedSFX;

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
//F
let sceneFImage1;
let sceneFImage2;
let sceneFImage3;
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
//Load the house of brian's dad
let dadHomeImage;
//Load passage images
let passageImage1;
let passageImage2;
let passageImage3;
let passageImage4;
let passageImage5;
let passageImage6;
let passageImage7;
let passageImage8;
let passageImage9;
//Load Item Images - Hov = Hovered over
//Book
let bookImage;
let bookImageHov;
//Paper
let paperImage;
let paperImageHov;
let remainingPapersImage;
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

//Load the ending title image
let endingTitleImage;

//State variable
let state;

//Load in the assets
function preload() {
  //====FONTS====\\
  dialogueFont = loadFont("assets/fonts/sketchy.ttf");

  //====SOUNDS====\\
  //title sfx
  glassCrackSFX = loadSound("assets/sounds/glassCrack.wav");
  //Environmental Sounds
  windSFX = loadSound("assets/sounds/wind.wav");
  oceanSFX = loadSound("assets/sounds/ocean.wav");
  //Item clicked on SFX
  heartBoxSFX = loadSound("assets/sounds/heartbox.wav");
  machineSFX = loadSound("assets/sounds/machine.mp3");
  confessSFX = loadSound("assets/sounds/confess.wav");
  detectorSFX = loadSound("assets/sounds/detector.wav");
  //Toolbar and collecting paper SFX
  journalSFX = loadSound("assets/sounds/journal.wav");
  bagSFX = loadSound("assets/sounds/bag.wav");
  mapSFX = loadSound("assets/sounds/map.wav");
  paperSFX = loadSound("assets/sounds/paper.wav");
  //Clicking on a location in the map SFX
  homeSFX = loadSound("assets/sounds/home.wav");
  labSFX = loadSound("assets/sounds/lab.wav");
  shrineSFX = loadSound("assets/sounds/shrine.wav");
  towerSFX = loadSound("assets/sounds/tower.wav");
  //In task sfx
  heartbeatSFX = loadSound("assets/sounds/heartmonitor.wav");
  detectorBeepSFX = loadSound("assets/sounds/detectedBeep.wav");
  connectedSFX = loadSound("assets/sounds/connected.mp3");
  //preload music
  themeSong = loadSound("assets/sounds/guitarloop.wav");
  homeThemeSong = loadSound("assets/sounds/guitarloop2.wav");
  labThemeSong = loadSound("assets/sounds/guitarloop3.wav");
  shrineThemeSong = loadSound("assets/sounds/guitarloop4.wav");
  towerThemeSong = loadSound("assets/sounds/guitarloop5.wav");
  dadHomeThemeSong = loadSound("assets/sounds/guitarloop6.wav");

  //=======PRELOAD IMAGES=======\\
  //title images
  titleImage1 = loadImage("assets/images/scenes/title/crack1.png");
  titleImage2 = loadImage("assets/images/scenes/title/crack2.png");
  titleImage3 = loadImage("assets/images/scenes/title/crack3.png");
  titleImage4 = loadImage("assets/images/scenes/title/crack4.png");
  titleImageHov = loadImage("assets/images/scenes/title/playhovered.png");
  titleTextImage = loadImage("assets/images/scenes/title/titletext.png");
  //Scene A images
  sceneAImage1 = loadImage("assets/images/scenes/scene1.png");
  sceneAImage2 = loadImage("assets/images/scenes/scene2.png");
  sceneAImage3 = loadImage("assets/images/scenes/scene3.png");
  //Scene B images
  sceneBImage1 = loadImage("assets/images/scenes/home1.png");
  sceneBImage2 = loadImage("assets/images/scenes/home2.png");
  sceneBImage3 = loadImage("assets/images/scenes/home3.png");
  //Scene C images
  sceneCImage1 = loadImage("assets/images/scenes/lab1.png");
  sceneCImage2 = loadImage("assets/images/scenes/lab2.png");
  sceneCImage3 = loadImage("assets/images/scenes/lab3.png");
  //Scene D images
  sceneDImage1 = loadImage("assets/images/scenes/shrine1.png");
  sceneDImage2 = loadImage("assets/images/scenes/shrine2.png");
  sceneDImage3 = loadImage("assets/images/scenes/shrine3.png");
  //Scene E images
  sceneEImage1 = loadImage("assets/images/scenes/tower1.png");
  sceneEImage2 = loadImage("assets/images/scenes/tower2.png");
  sceneEImage3 = loadImage("assets/images/scenes/tower3.png");
  //Scene F images
  sceneFImage1 = loadImage("assets/images/scenes/incar.png");
  sceneFImage2 = loadImage("assets/images/scenes/incar2.png");
  sceneFImage3 = loadImage("assets/images/scenes/incar3.png");
  //home animated images
  home1Image = loadImage("assets/images/locations/home.png");
  home2Image = loadImage("assets/images/locations/home2.png");
  //lab animated images
  lab1Image = loadImage("assets/images/locations/lab.png");
  lab2Image = loadImage("assets/images/locations/lab2.png");
  //shrine animated images
  shrine1Image = loadImage("assets/images/locations/shrine.png");
  shrine2Image = loadImage("assets/images/locations/shrine2.png");
  //tower animated images
  tower1Image = loadImage("assets/images/locations/tower.png");
  tower2Image = loadImage("assets/images/locations/tower2.png");
  //Load dad's home
  dadHomeImage = loadImage("assets/images/locations/dadhome.png");
  //Load book images
  bookImage = loadImage("assets/images/items/bookofpassages.png");
  bookImageHov = loadImage("assets/images/items/bookofpassages2.png");
  //paper images
  paperImage = loadImage("assets/images/items/paper.png");
  paperImageHov = loadImage("assets/images/items/paper2.png");
  remainingPapersImage = loadImage("assets/images/items/pagesinbag.png");
  //passage images
  passageImage1 = loadImage("assets/images/passages/passage.png");
  passageImage2 = loadImage("assets/images/passages/passage2.png");
  passageImage3 = loadImage("assets/images/passages/passage3.png");
  passageImage4 = loadImage("assets/images/passages/passage4.png");
  passageImage5 = loadImage("assets/images/passages/passage5.png");
  passageImage6 = loadImage("assets/images/passages/passage6.png");
  passageImage7 = loadImage("assets/images/passages/passage7.png");
  passageImage8 = loadImage("assets/images/passages/passage8.png");
  passageImage9 = loadImage("assets/images/passages/passage9.png");
  //heartbox images
  heartBoxImage = loadImage("assets/images/items/heartbox.png");
  heartBoxImageHov = loadImage("assets/images/items/heartbox2.png");
  //machine images
  machineImage = loadImage("assets/images/items/machine.png");
  machineImageHov = loadImage("assets/images/items/machine2.png");
  //podium images
  podiumImage = loadImage("assets/images/items/podium.png");
  podiumImageHov = loadImage("assets/images/items/podium2.png");
  //nautical images
  nauticalImage = loadImage("assets/images/items/nautical.png");
  nauticalImageHov = loadImage("assets/images/items/nautical2.png");
  //exit button images
  exitButtonImage = loadImage("assets/images/toolbar/exit/exitButton.png");
  exitButtonImage2 = loadImage("assets/images/toolbar/exit/exitButton2.png");
  //toolBar images
  toolBarImage = loadImage("assets/images/toolbar/toolbar.png");
  toolBarImageHov1 = loadImage("assets/images/toolbar/toolbar2.png");
  toolBarImageHov2 = loadImage("assets/images/toolbar/toolbar3.png");
  toolBarImageHov3 = loadImage("assets/images/toolbar/toolbar4.png");
  //map images
  mapImage = loadImage("assets/images/toolbar/map/map0.png");
  mapImageHov1 = loadImage("assets/images/toolbar/map/map1.png");
  mapImageHov2 = loadImage("assets/images/toolbar/map/map2.png");
  mapImageHov3 = loadImage("assets/images/toolbar/map/map3.png");
  mapImageHov4 = loadImage("assets/images/toolbar/map/map4.png");
  //bag image
  bagImage = loadImage("assets/images/toolbar/bag/bag.png");
  //journal images
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
  //selection bar images
  selectionBarImage = loadImage("assets/images/taskItems/selectionbar.png");
  selectionBarImage2 = loadImage("assets/images/taskItems/selectionbar1.png");
  selectionBarImage3 = loadImage("assets/images/taskItems/selectionbar2.png");
  selectionBarImage4 = loadImage("assets/images/taskItems/selectionbar3.png");
  //Ending Title image
  endingTitleImage = loadImage("assets/images/scenes/ending.png");
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
  //state = new CarScene(1280, 720, 640, 360);
  state = new PreTitle(1280, 720, 640, 360);
  //Papers
  paper = new Paper();
  //Book
  book = new Book();
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

//A function that checks when all tasks are complete
function tasksCompleted() {
  //If all tasks completion is true...
  if (task1Done === true && task2Done === true && task3Done === true && task4Done === true) {
    //If all the papers from the four locations are collected also
    if (paper.paper1.hide === true && paper.paper2.hide === true && paper.paper3.hide === true && paper.paper4.hide === true) {
      //Go to car state
      state = new CarScene(1280, 720, 640, 360);
    }
  }
}

//Put the input of the answer into lower case
function guessAnswer(answer) {
  //Convert response to lowercase to avoid errors
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
