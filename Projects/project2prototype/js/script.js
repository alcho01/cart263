/**
Project 2 - Proposal
Alex Cho

Proposal elements to do
[Done] Showcase a Minigame



*/

"use strict";

//Set the canvas dimensions
let canvas = {
  width: 1280,
  height: 720,
};

//set the background color to black
let bgColor = 0;

let heartMonitor;
let stateDisplayer;

//Set the heartbeat sound
let heartbeatSFX;

let state = 'heartbeat';

function preload() {
  heartbeatSFX = loadSound("assets/sounds/heartmonitor.wav");
}

function setup() {
  //Audio Settings
  userStartAudio();

  //create the canvas
  createCanvas(canvas.width, canvas.height);
  //Classes
  stateDisplayer = new StateDisplayer();
  heartMonitor = new HeartMonitor();
}

function draw() {
  //set the background
  background(bgColor);
  //Display the entities
  stateDisplayer.activate();
}
