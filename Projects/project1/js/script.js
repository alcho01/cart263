/**
Project 1 - Get Out
Alex Cho

Sources
Title Song - https://www.youtube.com/watch?v=FGpT9KDPMtI&ab_channel=AlwaysMusic
*/

"use strict";

//Setting the canvas dimensions
let canvasDimensions = {
  w: 800,
  h: 1000,
};

//Arrays for the floating particles
let particles = [];
let numParticles = 60;

//Preparing a class for the states
let stateShow;
//Preparing classes for states
let preTitleState;
let titleState;
//Determine what the starting state should be
let state = "PreTitle";

//--Title Entities--//

//Images for the title which will be animated through frameCount
let titleImage1;
let titleImage2;
let titleImage3;

//Title Song
let titleTheme;

//Preload sounds/images
function preload() {
  //Preloading the title images 1,2,3
  titleImage1 = loadImage("assets/images/title/titlesequence1.png");
  titleImage2 = loadImage("assets/images/title/titlesequence2.png");
  titleImage3 = loadImage("assets/images/title/titlesequence3.png");

  //Preloading the title theme song
  titleTheme = loadSound("assets/sounds/title/titlesong.mp3");
}

//Setting up
function setup() {
  userStartAudio();

  //Create the canvas
  createCanvas(canvasDimensions.w, canvasDimensions.h);

  //For loop for the particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(0.05, 8));
  }

  //Create the class to hold the states
  stateShow = new StateShow();
  //Create the class for the pretitle state
  preTitleState = new PreTitleState(800, 1000, 400, 500);
  //Create the class for the title state
  titleState = new TitleState(800, 1000, titleImage1, titleImage2, titleImage3);
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
