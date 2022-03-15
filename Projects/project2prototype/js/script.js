/**
Project 2 - Proposal
Alex Cho

For the proposal I wanted to demonstrate one task that will be implemented in the final version of this project.
I also wanted to test out the typewriter dialogue effect that goes through an array of strings.
Finally, I wanted to include a hover method over items that can be clicked.
*To scroll through dialogue it is the left arrow key.

Proposal elements to do:
[Done] Showcase a Minigame
[Done] Simple Dialogue System
[] Work on the three elements under my stuff (Basic functionality for now)
[Done] Hover Method / Transition to Task (STATE)
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
//parameters holding the sequence of scene A images
let sceneAImage1;
let sceneAImage2;
let sceneAImage3;
//Load the home images
let home1Image;
let home2Image;
//Load the heartBox images - Hov = Hovered over
let heartBoxImage;
let heartBoxImageHov;
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

  home1Image = loadImage("assets/images/locations/home.png");
  home2Image = loadImage("assets/images/locations/home2.png");

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
