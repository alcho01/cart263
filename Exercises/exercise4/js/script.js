/**
Exercise 4 -
Alex Cho

*/

"use strict";

//Canvas Dimensions
const canvasWidth = 640;
const canvasHeight = 480;

//Webcam
let video;
//Handpose object
let handpose;
//Predictions made from handpose
let predictions = [];

function preload() {

}

function setup() {
  //Setup the canvas
  createCanvas(canvasWidth, canvasHeight);

  //Setup the video //Hide it
  video = createCapture(VIDEO);
  video.hide();

  //Setup the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {

  });

  //Listen for predictions from handpose 
  handpose.on(`predict`, function (results) {
    predictions = results;
  });

}

function draw() {

}
