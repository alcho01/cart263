/**
Project 2 - Proposal
Alex Cho

Proposal elements to do
[Done] Showcase a Minigame
[Done] Typewriting effect - Inspired by - hhttps://github.com/pippinbarr/cart253-2020/tree/master/examples/text/typewriter-effect
[Done] Hover Method / Transition to Task (STATE)
*/

"use strict";

//Set the canvas dimensions
let canvas = {
  width: 1280,
  height: 720,
};

//=====Setup Classes=====\\
//Set up the classes
//Tasks/Games
let heartMonitor;
//CutScenes
let forestScene;
//Locations
let home;
//Items
let heartBox;
//Dialogue
let typeWriter;
//Handle state event classes
let stateDisplayer;
let stateKeyPressed;
let stateMouseClicked;

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

//Starting State
let state = 'forestCutScene';

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
}

//What needs to be setup before starting
function setup() {
  //Audio Settings
  userStartAudio();

  //create the canvas
  createCanvas(canvas.width, canvas.height);

  //Classes
  //Tasks/games
  heartMonitor = new HeartMonitor();
  //Cutscenes
  forestScene = new ForestScene(1280, 720, 640, 360);
  //Locations
  home = new Home(1280, 720, 640, 360);
  //Items
  heartBox = new HeartBox();
  //Dialogue effect
  typeWriter = new TypeWriter();
  //Event handler classes
  stateDisplayer = new StateDisplayer();
  stateKeyPressed = new StateKeyPressed();
  stateMouseClicked = new StateMouseClicked();
}

//Displaying the entities
function draw() {
  //Display the entities
  stateDisplayer.activateScenes();
  stateDisplayer.activateLocations();
  stateDisplayer.activateItems();
  stateDisplayer.activateTasks();
}

//Key pressed functionality
function keyPressed() {
  stateKeyPressed.activateScenes();
}

//mouse clicked functionality
function mouseClicked() {
  stateMouseClicked.activateTasks();
}
