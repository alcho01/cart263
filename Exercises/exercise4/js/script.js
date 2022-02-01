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

//The bubble to pop
let bubble;
//The pin
let pin = {
  tip: {
    x: undefined,
    y: undefined,
    stroke: 145,
    strokeWeight: 2,
  },
  head: {
    x: undefined,
    y: undefined,
    size: 20,
  },
  fill: {
    r: 0,
    g: 16,
    b: 189,
  }
};

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

  //Create the bubble
  bubble = {
    settings: {
      x: 80,
      y: 80,
      size: 100,
      vx: 0,
      vy: -2,
    },
    fill: {
      r: 124,
      g: 232,
      b: 242,
      a: 100,
    }
  };
}

function draw() {

}

//Display the bubble
function displayBubble() {
  push();
  noStroke();
  fill(bubble.fill.r, bubble.fill.g, bubble.fill.b, bubble.fill.a);
  ellipse(bubble.settings.x, bubble.settings.y, bubble.settings.size);
  pop();
}

//Display the pin and head
function displayPin() {
  //The pin
  push();
  stroke(pin.tip.stroke);
  strokeWeight(pin.tip.strokeWeight);
  line(pin.tip.x, pin.tip.y, pin.head.x, pin.head.y);
  pop();

  //The Head
  push();
  fill(pin.fill.r, pin.fill.g, pin.fill.b);
  noStroke();
  ellipse(pin.head.x, pin.head.y, pin.head.size);
  pop();
}
