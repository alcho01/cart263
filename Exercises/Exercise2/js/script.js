/**
Exercise 2 - JOEYR!PA
Alex Cho

Questions and answers from https://jeopardyquestions.com/

Title and end screen
Scoreboard
mouse click functionality
annyang
responsivevoice
*/

"use strict";

//Make an array for the questions
const category1Questions = [
  //IN THE KITCHEN QUESTIONS
  "A pestle is used to grind spices & other foods; this pestle's partner is the bowl in which the food is ground",
  "Despite its name it's a slicing tool not a guitar-like instrument so don't strum it",
  "This brilliant yellow ultra-spendy spice is sold powdered or as threads (the flower's stigma)",
];

const category2Questions = [
  //B + 2 LETTERS QUESTIONS
  "To clear plates",
  "Cubic kite",
  "Stated goal of taking tricks",
];

const category3Questions = [
  //TRIPLE ALLITERATION QUESTIONS
  "This pencil-&-paper game is also known as Xs & Os",
  "Only around since the early 1990s it takes you practically anywhere you want to go--on the Internet",
  "Relationship of Queen Elizabeth to Queen Victoria",
];

const category4Questions = [
  //A 9-LETTER NOUN QUESTIONS
  "This fruit may sometimes appear on a peach tree",
  "It's a feeling of sentimental yearning for the past",
  "Name shared by the first operational stealth aircraft & a nocturnal bird their prey never sees either one coming",
];

let currentCategory1Questions = 0;
let currentCategory2Questions = 0;
let currentCategory3Questions = 0;
let currentCategory4Questions = 0;

let currentResponse = '';

//variable for the selection board
let boardSelectionImg;

//variables for classes
let stateShow;
let boardScreen;

//What the starting state is
let state = 'BoardSelection';

//Loading assets
function preload() {
  boardSelectionImg = loadImage("assets/images/boardselect.png");
}

function setup() {
  //create the canvas
  createCanvas(1000, 800);

  //Linking to the board screen class
  stateShow = new StateShow();
  boardScreen = new BoardScreen(boardSelectionImg);

  //Set up annyang
  if (annyang) {
    let commands = {
      'what is *answer' : guessAnswer
    };

    annyang.addCommands(commands);
    annyang.start();
  }
}

//Display the states
function draw() {
  stateShow.display();
}

//Functionality to click on a box
function mouseClicked() {
  boardScreen.mouseClicked();
}

//Put the input to lowercase to equal with the answer
function guessAnswer(answer) {
  currentResponse = answer.toLowerCase();
  console.log(currentResponse);
}
