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
  username: 'xxxxxx',
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
  //load the data
  let data = JSON.parse(localStorage.getItem(PROFILE_DATA_KEY));
  //Was there data to load?
  if (data) {
    //If there is ask for the username
    let username = prompt(`What is the username?`);
    //Check if the username is correct
    if (username === data.username) {
      //Ask for the password next
      let password = prompt(`What is the password?`);
      //Check if the password is correct
      if (password === data.password) {
        //If data loaded, setup the profile
        setupProfile(data);
      }
    }
  }
  else {
    //If there is no data generate a brand new profile
    generateProfile();
  }
}

//Assign the data to the profile
function setupProfile(data) {
  profile.name = data.name;
  profile.hospital = data.hospital;
  profile.symptoms = data.symptoms;
  profile.username = data.username;
  profile.password = data.password;
}

//Generating the profile from the JSON DATA
function generateProfile() {
  //Prompts for the user to input their name
  profile.name = prompt('Enter the patients name.');
  //Generates what hospital they are currently constituted in
  profile.hospital = `${random(hospitalData.hospitals)}`;
  //Generate what symptoms the patient currently has
  profile.symptoms = `${random(symptomsData.symptoms)}`;
  //Generate a username and password from a random noun
  profile.username = `${random(nounsData.nouns)}`;
  profile.password = `${random(nounsData.nouns)}`;
  //Save the profile to local storage to remember
  localStorage.setItem(PROFILE_DATA_KEY, JSON.stringify(profile));
}

function draw() {
  background(bgColor);

  //Create the header + Profile info
  let patientInfo = `Patient Information

Name: ${profile.name}
Hospital: ${profile.hospital}
Symptoms: ${profile.symptoms}
Username: ${profile.username}
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
