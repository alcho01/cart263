/**
Gem Hunt - Exercise 1
Alex Cho

Pretty much the same type of mechanics from the activity. Just enhanced and updated.
*/

"use strict";

// Constants for images
const NUM_GEM_IMAGES = 10;
const GEM_IMAGE_PREFIX = `assets/images/Gems/gem`;
const DIAMOND_IMAGE = `assets/images/Gems/diamond.png`;

// Number of images to display
const NUM_EASY = 150;

//States

//Title parameters
let title = {
  x: 640,
  y: 360,
  w: 1280,
  h: 720,
  image: undefined,
};

//Help screen parameters
let help = {
  x: 640,
  y: 360,
  w: 1280,
  h: 720,
  image: undefined,
};

//Arrays for gem images
let gemImages = [];

//Arrays for gem objects
let gems = [];

//defining the image of the diamond
let diamondImage;

//defining the diamond
let diamond;

//Background Color
let bgRed = 173;
let bgGreen = 133;
let bgBlue = 130;

//Set the starting state
let state = "title";

//Preload the array of images
function preload() {
  // Loop once for each gem image, starting from 0
  for (let i = 0; i < NUM_GEM_IMAGES; i++) {
    // Load the image with the current number (starting from 0)
    let gemImage = loadImage(`${GEM_IMAGE_PREFIX}${i}.png`);
    // Add the image to the array for use later when randomly selecting
    gemImages.push(gemImage);
  }

  // Load the diamond image
  diamondImage = loadImage(`${DIAMOND_IMAGE}`);

  //load the title screen
  title.image = loadImage("assets/images/Screens/titlescreen.png");

  //Load the help screen
  help.image = loadImage("assets/images/Screens/help.png");
}

function setup() {
  // To be proper, I added this
  userStartAudio();

  // creating the canvas
  createCanvas(1280, 720);

  //Functions for creating the entities
  createGems();
  createDiamond();
}

// Creates all the gems at random positions with random images
function createGems() {
  // Create the number of gems
  for (let i = 0; i < NUM_EASY; i++) {
    // Create a random gem
    let gem = createRandomGem();
    // Add it to the array
    gems.push(gem);
  }
}

// Create a gem object at a random position with a random image
// then return the created gem
function createRandomGem() {
  let x = random(0, 1280);
  let y = random(0, 720);
  let gemImage = random(gemImages);
  let gem = new Gem(x, y, gemImage);
  return gem;
}

// Creates a diamond at a random position
function createDiamond() {
  let x = random(0, 1280);
  let y = random(0, 720);
  diamond = new Diamond(x, y, diamondImage);
}

//Contains the change of states and what is going on in each state
function draw() {
  if (state === "title") {
    titleScreen();
  } else if (state === "help") {
    helpScreen();
  } else if (state === "simulation") {
    //Setting the background color
    background(bgRed, bgGreen, bgBlue);
    simulation();
  }
}

//Title Screen display
function titleScreen() {
  push();
  imageMode(CENTER);
  image(title.image, title.x, title.y, title.w, title.h);
  pop();
}

//Help Screen display
function helpScreen() {
  push();
  imageMode(CENTER);
  image(help.image, help.x, help.y, help.w, help.h);
  pop();
}

//The simulation
function simulation() {
  updateGems();
  updateDiamond();
}

//Update the gems
function updateGems() {
  // Loop through gems
  for (let i = 0; i < gems.length; i++) {
    // Update the gems
    gems[i].update();
  }
}

//Update the diamond
function updateDiamond() {
  diamond.update();
}

//Functionality for mouse pressed
function mousePressed() {
  diamond.mousePressed();
}

//Functionality for mouse clicked
function mouseClicked() {
  //From title to the simulation
  if (state === "title") {
    if (mouseX > 32 && mouseX < 416) {
      if (mouseY > 109 && mouseY < 210) {
        state = "simulation";
      }
    }
  }
  //From help back to the title
  if (state === "help") {
    if (mouseX > 478 && mouseX < 863) {
      if (mouseY > 438 && mouseY < 541) {
        state = "title";
      }
    }
  }
  //From the title to help screen
  if (state === "title") {
    if (mouseX > 32 && mouseX < 416) {
      if (mouseY > 228 && mouseY < 330) {
        state = "help";
      }
    }
  }
}
