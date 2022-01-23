/**
Exercise 3 -
Alex Cho

Required files
https://github.com/dariusk/corpora/blob/master/data/humans/firstNames.json
https://github.com/dariusk/corpora/blob/master/data/humans/lastNames.json

*/

"use strict";

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


function preload() {

}


function setup() {
  //Create the canvas
  createCanvas(windowWidth, windowHeight);

}


function draw() {

}
