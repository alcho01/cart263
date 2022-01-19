/**
Project 1 - Get Out
Alex Cho

Sources
Title Song - https://www.youtube.com/watch?v=FGpT9KDPMtI&ab_channel=AlwaysMusic
Simulation Song - https://www.youtube.com/watch?v=8775EWbDokw&list=PLuF78wm0RiGbXe4idoJNeDu6EmN60KMeK&index=24&ab_channel=Lumen
Wind SFX - https://freesound.org/people/florianreichelt/sounds/459977/
Door SFX - https://freesound.org/people/InspectorJ/sounds/431117/
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
let keyPressedState;

//Preparing classes for states
let preTitleState;
let titleState;
let outsideHouse;
let entranceHouse;
let sunkenPlace;
//Determine what the starting state should be
let state = "PreTitle";

//--Title Entities--//

//Images for the title which will be animated through frameCount
let titleImage1;
let titleImage2;
let titleImage3;

//Title Song
let titleTheme;

//--Simulation Entities--//

//ACT 1 (Includes Outside Of House, Entrance To House)
//SFX
let windSFX;
let frontDoorSFX;
let houseSoundTrack
//Outside of the house image
let outsideHouseImage;
//Entrance of the house image
let entranceHouseImage;

//SunkenPlace Song
let sunkenPlaceSong;

//The character falling in the sunken place
let fallingImage1;
let fallingImage2;
let fallingImage3;

//Preload sounds/images
function preload() {

  //INTRO

  //Preloading the title theme song
  titleTheme = loadSound("assets/sounds/title/titlesong.mp3");
  //Preloading the title images 1,2,3
  titleImage1 = loadImage("assets/images/Title/titlesequence1.png");
  titleImage2 = loadImage("assets/images/Title/titlesequence2.png");
  titleImage3 = loadImage("assets/images/Title/titlesequence3.png");

  //ACT 1

  //Wind Sound Preload
  windSFX = loadSound("assets/sounds/wind.mp3");
  //Front Door Sound Preload
  frontDoorSFX = loadSound("assets/sounds/frontdoor.wav");
  //House sound track
  houseSoundTrack = loadSound("assets/sounds/housesoundtrack.mp3");

  //Preloading the outside/entrance of the house image
  outsideHouseImage = loadImage("assets/images/Simulation/house.png");
  entranceHouseImage = loadImage("assets/images/Simulation/Entrance.png");

  //Song playing while in the sunken place
  sunkenPlaceSong = loadSound("assets/sounds/song.mp3");
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

  amplitude.setInput(sunkenPlaceSong);

  //For loop for the particles
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }

  //Create the class to hold the p5 functions
  stateShow = new StateShow();
  mouseClickedState = new MouseClickedState();
  keyPressedState = new KeyPressedState();
  //Create the class for the pretitle state
  preTitleState = new PreTitleState(800, 1000, 400, 500);
  //Create the class for the title state
  titleState = new TitleState(800, 1000, titleImage1, titleImage2, titleImage3);
  //Create the class for the outside of the house
  outsideHouse = new OutsideHouse(800, 1000, outsideHouseImage);
  //Create the class for the entrance of the house which extends to multiple rooms
  entranceHouse = new EntranceHouse(800, 1000, entranceHouseImage);
  //Create the class for the simulation
  sunkenPlace = new SunkenPlace(800, 1000, fallingImage1, fallingImage2, fallingImage3);
}

//Displaying the states
function draw() {
  //This will contain what is being displayed based on what state it is in
  stateShow.activate();
}

//Key pressed functionality
function keyPressed() {
  //This will contain what is being done when a key is pressed
  keyPressedState.activate();
}

//Mouse clicked functionality
function mouseClicked() {
  //This will contain what is being displayed for when a state has a mouse clicked function
  mouseClickedState.activate();
}
