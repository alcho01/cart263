/**
Exercise 4 - Bubble Popper ++
Alex Cho

Brief
[DONE]Add Score Counter
[DONE]Add Sound
[DONE]Add Ending
[DONE]Increase Difficulty
[DONE]ADD Health System

Bubble pop sound - https://freesound.org/people/DuffyBro/sounds/319107/
Lives Lost Cue - https://freesound.org/people/JustInvoke/sounds/446118/
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

//The Score to win
let scoreGoal = 15;
//The Score Initial Value
let scoreStart = 0;
//The value to increase the score by
let scoreIncrease = 1;

//Score Settings
let score = {
  text: {
    x: 20,
    y: 35,
    size: 30,
    white: 255,
  }
};

//Lose a life SFX
let loseLifeCue;
//Amount of lives
let lives = 3;
//Decrease life
let decreaseLife = -1;
//lost the game
let lost = 0;

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

//text size
let textDimensions = 30;

//Starting state
let state = 'load';

//Load sound
function preload() {
bubblePop = loadSound("assets/sounds/pop.wav");
loseLifeCue = loadSound("assets/sounds/loselifecue.wav");
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
  else if (state === 'end') {
    endScreen();
  }
  else if (state === 'badEnd') {
    badEndScreen();
  }
}

//Display a loadscreen while the entities generate
function loadScreen() {
  push();
  textSize(textDimensions);
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

  //Check the difficulty
  toggleDifficulty();

  //Check the score
  checkScore();
  //Display the score
  displayScore();

  //Check the user's health
  checkHealth();
}

//Good end state
function endScreen() {
  //set a new background
  background(255);

  //Text
  push();
  textSize(textDimensions);
  textAlign(CENTER);
  text(`You Win!`, width / 2, height / 2);
  pop();
}

//Bad end state
function badEndScreen() {
  //set a new background
  background(255);

  //Text
  push();
  textSize(textDimensions);
  textAlign(CENTER);
  text(`You Lost!`, width / 2, height / 2);
  pop();
}

//Change difficulty of game when an amount of bubbles is popped
function toggleDifficulty() {
  //Check if score is greater or equal to 5
  if (scoreStart >= 5) {
    //If it is change the speed of the bubble to be a bit faster
    bubble.settings.y = bubble.settings.y + bubble.settings.vy * 1.5;
  }
  //Check if score is greater or equal to 10
  if (scoreStart >= 10) {
    //If it is change the speed of the bubble to be even faster
    bubble.settings.y = bubble.settings.y + bubble.settings.vy * 2.3;
  }
}

//remove lives
function decreaseHealth() {
  lives = lives + decreaseLife;
}

//Checks how many lives remain
function checkHealth() {
  if (lives === lost) {
    state = 'badEnd';
  }
}

//Increase the score by 1
function increaseScore() {
  scoreStart = scoreStart + scoreIncrease;
}

//Check the score to see if it can end
function checkScore() {
  if (scoreStart === scoreGoal) {
    state = 'end';
  }
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
    //Lose a life
    decreaseHealth();
    //SFX
    loseLifeCue.play();
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
  text(scoreStart, score.text.x, score.text.y  );
  pop();
}
