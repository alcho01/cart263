/**
Project 2 - Proposal
Alex Cho


*/

"use strict";

//Set the canvas dimensions
let canvas = {
  width: 1280,
  height: 720,
};

//set the background color to black
let bgColor = 0;

//load in an image to test around the prototype
let sketch = {
  x: 640,
  y: 360,
  width: 1280,
  height: 720,
  image: undefined,
};

function preload() {
  //Load up the image
  sketch.image = loadImage("assets/images/lookingout.png");
}

function setup() {
  //create the canvas
  createCanvas(canvas.width, canvas.height);
}

function draw() {
  //set the background
  background(bgColor);

  //display the image
  push();
  imageMode(CENTER);
  image(sketch.image, sketch.x, sketch.y, sketch.width, sketch.height);
  pop();
}
