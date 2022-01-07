/**
Gem Hunt - Exercise 1
Alex Cho

Pretty much the same type of mechanics from the activity. Just enhanced and updated.
*/

"use strict";

// Constants for images
const NUM_GEM_IMAGES = 10;
const GEM_IMAGE_PREFIX = `assets/images/Gems/gem/`;
const DIAMOND_IMAGE = `assets/images/Gems/diamond.png`;

// Number of images to display
const NUM_EASY = 50;

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
let state = 'title';

function preload() {

}


function setup() {
  // To be proper, I added this
  userStartAudio();

  // creating the canvas
  createCanvas(1280, 720);



}


function draw() {
  //Setting the background color
  background(bgRed, bgGreen, bgBlue);

}
