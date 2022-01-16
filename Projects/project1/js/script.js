/**
Project 1 - Get Out
Alex Cho

Sources
Title Song - https://www.youtube.com/watch?v=FGpT9KDPMtI&ab_channel=AlwaysMusic
Simulation Song - https://www.youtube.com/watch?v=8775EWbDokw&list=PLuF78wm0RiGbXe4idoJNeDu6EmN60KMeK&index=24&ab_channel=Lumen
*/

"use strict";

//create to add p5 amplitude
let amplitude;

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

//Preparing classes for states
let preTitleState;
let titleState;
let simulation;
//Determine what the starting state should be
let state = "PreTitle";

//--Title Entities--//

//Images for the title which will be animated through frameCount
let titleImage1;
let titleImage2;
let titleImage3;

//Title Song
let titleTheme;
let simulationSong;

//--Simulation Entities--//
//The character falling in the sunken place
let fallingImage1;
let fallingImage2;
let fallingImage3;

//Preload sounds/images
function preload() {
  //Preloading the title images 1,2,3
  titleImage1 = loadImage("assets/images/title/titlesequence1.png");
  titleImage2 = loadImage("assets/images/title/titlesequence2.png");
  titleImage3 = loadImage("assets/images/title/titlesequence3.png");

  //Preloading the title theme song
  titleTheme = loadSound("assets/sounds/title/titlesong.mp3");
  simulationSong = loadSound("assets/sounds/song.mp3");

  //Preloading the character falling during the simulation
  fallingImage1 = loadImage("assets/images/Simulation/falling1.png");
  fallingImage2 = loadImage("assets/images/Simulation/falling2.png");
  fallingImage3 = loadImage("assets/images/Simulation/falling3.png");
}

//Setting up
function setup() {
  userStartAudio();

  //Create the canvas
  createCanvas(canvasDimensions.w, canvasDimensions.h);

  //Add the p5sound library
  amplitude = new p5.Amplitude();

  amplitude.setInput(simulationSong);

  //For loop for the particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  //Create the class to hold the p5 functions
  stateShow = new StateShow();
  mouseClickedState = new MouseClickedState();
  //Create the class for the pretitle state
  preTitleState = new PreTitleState(800, 1000, 400, 500);
  //Create the class for the title state
  titleState = new TitleState(800, 1000, titleImage1, titleImage2, titleImage3);
  //Create the class for the simulation
  simulation = new Simulation(800, 1000, fallingImage1, fallingImage2, fallingImage3);
}

//Displaying the states
function draw() {
  //This will contain what is being displayed based on what state it is in
  stateShow.display();
}

//Key pressed functionality
function keyPressed() {
  //Works only when it is on the pretitle
  preTitleState.keyPressed();
}

//Mouse clicked functionality
function mouseClicked() {
  //This will contain what is being displayed for when a state has a mouse clicked function
  mouseClickedState.activate();
}
