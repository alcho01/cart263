/**
Exercise 2 - JOEYR!PA
Alex Cho

Questions and answers from https://jeopardyquestions.com/

Familiarizing myself with annyang and responsive voice.
I am aware there remains a flaw or two in the program. However, the main goal was to familiarize myself with the new libraries and I have already spent a lot of time on this exercise. The flaw is the user can repeat a question over and over again.
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
  "Only around since the early 1990s it takes you practically anywhere you want to go on the Internet",
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

//variable for images
let titleImg;
let boardSelectionImg;

//variables for classes
let stateShow;
let titleScreen;
let boardScreen;
let scoreDisplay;
let endScreen;

//Score
let score = 0;

//What the starting state is
let state = 'Title';

//Loading assets
function preload() {
  titleImg = loadImage("assets/images/title.png");
  boardSelectionImg = loadImage("assets/images/boardselect.png");
}

function setup() {
  //create the canvas
  createCanvas(1000, 800);

  //Linking to the board screen class
  stateShow = new StateShow();
  titleScreen = new TitleScreen(titleImg);
  boardScreen = new BoardScreen(boardSelectionImg);
  scoreDisplay = new ScoreDisplay();
  endScreen = new EndScreen();

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

//Functionality for key pressed
function keyPressed() {
  if (state === 'Title') {
    state = 'BoardSelection';
  }
}

//Put the input to lowercase to equal with the answer
function guessAnswer(answer) {
  currentResponse = answer.toLowerCase();
  console.log(currentResponse);
}
