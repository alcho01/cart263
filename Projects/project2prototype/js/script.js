/**
Project 2 - Proposal
Alex Cho

Proposal elements to do
[Done] Showcase a Minigame
[Done] Typewriting effect - Inspired by - hhttps://github.com/pippinbarr/cart253-2020/tree/master/examples/text/typewriter-effect

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
//Dialogue
let typeWriter;
//Handle state event classes
let stateDisplayer;
let stateKeyPressed;

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
  //Dialogue effect
  typeWriter = new TypeWriter();
  //Event handler classes
  stateDisplayer = new StateDisplayer();
  stateKeyPressed = new StateKeyPressed();
}

//Displaying the entities
function draw() {
  //Display the entities
  stateDisplayer.activateScenes();
  stateDisplayer.activateLocations();
  stateDisplayer.activateTasks();
}

//Key pressed functionality
function keyPressed() {
  stateKeyPressed.activate();
}
