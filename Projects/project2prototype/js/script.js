/**
Project 2 - Proposal
Alex Cho

Proposal elements to do:
[Done] Showcase a Minigame
[Done] Typewriting effect / Goes through multiple strings - Inspired by - hhttps://github.com/pippinbarr/cart253-2020/tree/master/examples/text/typewriter-effect
[Done] Hover Method / Transition to Task (STATE)
*/

"use strict";

//Set the canvas dimensions
let canvas = {
  width: 1280,
  height: 720,
};

//=====Setup Classes=====\\
//Items
let heartBox;
//Dialogue
let typeWriter;

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
  typeWriter = new TypeWriter();
}

//Displaying the entities
function draw() {
  //Display the entities
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
