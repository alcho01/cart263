/**
Exercise 4 - Bubble Popper ++
Alex Cho

Brief
[]Add Score Counter
[DONE]Add Sound
[]Add Ending
[]Increase Difficulty

Bubble pop sound - https://freesound.org/people/DuffyBro/sounds/319107/
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

//Score Settings
let score = {
  text: {
    x: 20,
    y: 35,
    size: 30,
    white: 255,
  },
  value: 0,
};

//Bubble pop SFX
let bubblePop;
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

//loading text size
let loadingTextSize = 30;

//Starting state
let state = 'load';

//Load sound
function preload() {
bubblePop = loadSound("assets/sounds/pop.wav");
}

//Setup the canvas/ Setup the handpose model/ bubble parameters
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
    //switch to the simulation
    state = 'simulation';
  });

  //Listen for predictions from handpose
  handpose.on(`predict`, function (results) {
    predictions = results;
  });

  //Create the bubble
  bubble = {
    settings: {
      x: random(width),
      y: height,
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

//Handle the states
function draw() {
  if (state === 'load') {
    loadScreen();
  }
  else if (state === 'simulation') {
    simulation();
  }
}

//Display a loadscreen while the entities generate
function loadScreen() {
  push();
  textSize(loadingTextSize);
  textAlign(CENTER);
  text(`Loading`, width / 2, height / 2);
  pop();
}

//Runs the simulation
function simulation() {
  background(0);

  //Is there a prediction to display
  if (predictions.length > 0) {
    //If there is - get the position of the index finger
    updatePin(predictions[0]);

    //Check if the tip of the pin intersects with the bubble
    let d = dist(pin.tip.x, pin.tip.y, bubble.settings.x, bubble.settings.y);
    if (d < bubble.settings.size / 2) {
      //Play the popping sound
      bubblePop.play();
      //Call the function increase score to increase the score by 1
      increaseScore();
      //If it does reset the bubble
      resetBubble();
    }
    //Display the pin
    displayPin();
  }

  //Handle the bubble movement and position
  moveBubble();
  offCanvas();
  displayBubble();

  //Display the score
  displayScore();
}

//Increase the score by 1
function increaseScore() {
  score.value = score.value += 1;
}

//Update the position of the pin based on the previous prediction
function updatePin(prediction) {
  pin.tip.x = prediction.annotations.indexFinger[3][0];
  pin.tip.y = prediction.annotations.indexFinger[3][1];
  pin.head.x = prediction.annotations.indexFinger[0][0];
  pin.head.y = prediction.annotations.indexFinger[0][1];
}

//Movement for the bubble
function moveBubble() {
  bubble.settings.x += bubble.settings.vx;
  bubble.settings.y += bubble.settings.vy;
}

//Resets the bubble position at the bottom of the canvas with a random x position
function resetBubble() {
  bubble.settings.x = random(width);
  bubble.settings.y = height;
}

//Check if the bubble is off the screen
function offCanvas() {
  if (bubble.settings.y < 0) {
    //Calls function to reset position
    resetBubble();
  }
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

//Display the score
function displayScore() {
  push();
  textAlign(CENTER);
  fill(score.text.white);
  textSize(score.text.size);
  text(score.value, score.text.x, score.text.y  );
  pop();
}
