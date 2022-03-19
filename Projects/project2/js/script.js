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

//Booleans for locations
let locationHome = true;
let locationLab = false;
let locationShrine = false;
let locationTower = false;

//=====Setup Classes=====\\
//Items
let heartBox;
//Misc
let dialogue;
let toolBar;

//=====Load Fonts=====\\
//Load text font
let dialogueFont;

//=====Load Sounds=====\\
//Set the heartbeat sound
let heartbeatSFX;

//=====Load Images=====\\
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

//Load Item Images
//Load the heartBox images - Hov = Hovered over
let heartBoxImage;
let heartBoxImageHov;

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
let journalInfoImage;
let journalInfoImage2;
let journalArrowImage;
let journalArrowImageHov;

//State variable
let state;

//Load in the assets
function preload() {
  //preload up fonts
  dialogueFont = loadFont("assets/fonts/sketchy.ttf");
  //preload sounds
  heartbeatSFX = loadSound("assets/sounds/heartmonitor.wav");
  //preload music

  //preload images
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

  heartBoxImage = loadImage("assets/images/items/heartbox.png");
  heartBoxImageHov = loadImage("assets/images/items/heartbox2.png");

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
  journalInfoImage = loadImage("assets/images/toolbar/journal/info1.png");
  journalInfoImage2 = loadImage("assets/images/toolbar/journal/info2.png");
  journalArrowImage = loadImage("assets/images/toolbar/journal/arrow.png");
  journalArrowImageHov = loadImage("assets/images/toolbar/journal/arrow2.png");
}

//What needs to be setup before starting
function setup() {
  //Audio Settings
  userStartAudio();

  //create the canvas
  createCanvas(canvas.width, canvas.height);

  //Classes that must be called in setup
  state = new ForestScene(1280, 720, 640, 360);
  //Items
  heartBox = new HeartBox();
  //Dialogue effect
  dialogue = new Dialogue();
  //Toolbar
  toolBar = new ToolBar();
}

//Displaying the entities
function draw() {
  state.display();
}

//Key pressed functionality
function keyPressed() {
  state.keyPressed();
}

//mouse clicked functionality
function mouseClicked() {
  state.mouseClicked();
}
