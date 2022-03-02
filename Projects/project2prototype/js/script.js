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

//set the background color to black
let bgColor = 0;

//Set up the classes
let heartMonitor;
let typeWriter;
//Handle state events
let stateDisplayer;
let stateKeyPressed;

//Load text font
let dialogueFont;

//Set the heartbeat sound
let heartbeatSFX;

//Starting State
let state = 'heartbeat';

//Load in the assets
function preload() {
  dialogueFont = loadFont("assets/fonts/sketchy.ttf");
  heartbeatSFX = loadSound("assets/sounds/heartmonitor.wav");
}

//What needs to be setup before starting
function setup() {
  //Audio Settings
  userStartAudio();

  //create the canvas
  createCanvas(canvas.width, canvas.height);

  //Classes
  typeWriter = new TypeWriter();
  stateDisplayer = new StateDisplayer();
  stateKeyPressed = new StateKeyPressed();
  heartMonitor = new HeartMonitor();
}

//Displaying the entities
function draw() {
  //set the background
  background(bgColor);
  //Display the entities
  stateDisplayer.activate();
}

//Key pressed functionality
function keyPressed() {
  stateKeyPressed.activate();
}
