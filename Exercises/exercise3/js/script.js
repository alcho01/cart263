/**
Exercise 3 -
Alex Cho



*/

"use strict";

//Background Color
const bgColor = 255;

//JSON DATA
const HOSPITAL_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/medicine/hospitals.json`;
const SYMPTOMS_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/medicine/symptoms.json`;
const NOUNS_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/words/nouns.json`;
//Save and load the data
const PROFILE_DATA_KEY = `profile-data`;

//Profile Entities
let profile = {
  name: 'xxxxxx',
  hospital: 'xxxxxx',
  symptoms: 'xxxxxx',
  password: 'xxxxxx'
};

//Text settings
let textSettings = {
  x: 0,
  y: 0,
  size: 32,
  fill: 0,
};

//Variables for the JSON DATA
let hospitalData;
let symptomsData;
let nounsData;


function preload() {
  hospitalData = loadJSON(HOSPITAL_DATA_URL);
  symptomsData = loadJSON(SYMPTOMS_DATA_URL);
  nounsData = loadJSON(NOUNS_DATA_URL);
}

function setup() {
  //Create the canvas
  createCanvas(windowWidth, windowHeight);

  profile.name = prompt('Enter the patients name.');
}


function draw() {
  background(bgColor);

  //Create the header + Profile info
  let patientInfo = `Patient Information

Name: ${profile.name}
Hospital: ${profile.hospital}
Symptoms: ${profile.symptoms}
Password: ${profile.password}`;

  //Display the profile info and header
  push();
  textSize(textSettings.size);
  textAlign(LEFT, TOP);
  textFont(`Courier, monospace`);
  fill(textSettings.fill);
  text(patientInfo, textSettings.x, textSettings.y);
  pop();
}
