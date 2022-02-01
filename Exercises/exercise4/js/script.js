/**
Exercise 4 -
Alex Cho

*/

"use strict";

//Canvas Dimensions
let canvasWidth = 640;
let canvasHeight = 480;

//Webcam
let video;

function preload() {

}

function setup() {
  //Setup the canvas
  createCanvas(canvasWidth, canvasHeight);

  //Setup the video //Hide it
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {

}
