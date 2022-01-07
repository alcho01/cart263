/**
Gem Hunt - Exercise 1
Alex Cho

Pretty much the same type of mechanics from the activity. Just enhanced and updated.
To refamiliarize myself with the concepts

Brief - Add 3 new Features

- Changed image set
- It grows as well as rotates when found
- States
- Reset Function
- Audio

Credit
Sound FX FROM https://freesound.org/
Soundtrack FROM https://davidoreilly.itch.io/external-world-ost?download

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

//level select screen parameters
let levelSelect = {
  x: 640,
  y: 360,
  w: 1280,
  h: 720,
  image: undefined,
};

//End screen parameters
let end = {
  x: 640,
  y: 360,
  w: 1280,
  h: 720,
  image: undefined,
};

//Sound when diamond is found
let foundSound;

//Soundtrack
let soundtrack;

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

  //Load the Level select screen
  levelSelect.image = loadImage("assets/images/Screens/levelselect.png");

  //Load the end screen
  end.image = loadImage("assets/images/Screens/end.png");

  //Load the found sound
  foundSound = loadSound("assets/sounds/right.wav");

  //Load the soundtrack
  soundtrack = loadSound("assets/sounds/soundtrack.mp3");
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
    reset();
    titleScreen();
  } else if (state === "levelSelector") {
    levelSelectScreen();
  } else if (state === "help") {
    helpScreen();
  } else if (state === "easySimulation") {
    //Setting the background color
    background(bgRed, bgGreen, bgBlue);
    easySimulation();
  } else if (state === "end") {
    endScreen();
  }
}

//Resets the game
function reset() {
  //Reset the position randomly
  diamond.x = random(0, 1280);
  diamond.y = random(0, 720);
  //Reset the boolean
  diamond.found = false;
  //Reset the angle
  diamond.angle = 0;
  //Reset the dimensions
  diamond.width = 150;
  diamond.height = 150;
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

//Level Select Screen display
function levelSelectScreen() {
  push();
  imageMode(CENTER);
  image(
    levelSelect.image,
    levelSelect.x,
    levelSelect.y,
    levelSelect.w,
    levelSelect.h
  );
  pop();
}

//The simulation
function easySimulation() {
  updateGems();
  updateDiamond();
}

//Ending screen
function endScreen() {
  push();
  imageMode(CENTER);
  image(end.image, end.x, end.y, end.w, end.h);
  pop();
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
  if (state === "easySimulation") {
    diamond.mousePressed();
  }
}

//Functionality for mouse clicked
function mouseClicked() {
  //From title to the simulation
  if (state === "title") {
    if (mouseX > 32 && mouseX < 416) {
      if (mouseY > 109 && mouseY < 210) {
        state = "levelSelector";
      }
    }
  }
  if (state === "levelSelector") {
    if (mouseX > 7 && mouseX < 215) {
      if (mouseY > 483 && mouseY < 719) {
        state = "easySimulation";
        //play the soundtrack
        soundtrack.play();
        soundtrack.loop();
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
  //From the end screen to title screen
  if (state === "end") {
    if (mouseX > 429 && mouseX < 813) {
      if (mouseY > 279 && mouseY < 382) {
        state = "title";
        //stop the soundtrack
        soundtrack.stop();
      }
    }
  }
}
