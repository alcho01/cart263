/**
Project 1 - Get Out
Alex Cho

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//Setting the canvas dimensions
let canvasDimensions = {
  w: 800,
  h: 1000,
};

//Images for the title which will be animated through frameCount
let titleImage1;
let titleImage2;
let titleImage3;

//Preparing a class for the states
let stateShow;
//Preparing classes for states
let titleState;
//Determine what the starting state should be
let state = "Title";

//Preload sounds/images
function preload() {
  //Preloading the title images 1,2,3
  titleImage1 = loadImage("assets/images/title/titlesequence1.png");
  titleImage2 = loadImage("assets/images/title/titlesequence2.png");
  titleImage3 = loadImage("assets/images/title/titlesequence3.png");
}

function setup() {
  //Create the canvas
  createCanvas(canvasDimensions.w, canvasDimensions.h);

  //Create the class to hold the states
  stateShow = new StateShow();
  //Create the class for the title state
  titleState = new TitleState(800, 1000, titleImage1, titleImage2, titleImage3);
}

function draw() {
  //This will contain what is being displayed based on what state it is in
  stateShow.display();
}
