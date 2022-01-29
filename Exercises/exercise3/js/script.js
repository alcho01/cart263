/**
Exercise 3 - Medical Form
Alex Cho

Simple creation of a medical form. I added more functionality in the sense that the user is able to toggle between different patient profiles by the use of mouse clicked. In addition if the user forgets the username and/or password
they can press the delete key to generate a new profile.

Brief
[DONE] Added a username/Work ID
[DONE] Added more categories
[DONE] Regenerate aspects of profile by using mouse clicked
[DONE] Added a delete key to "Punch Out" and delete currently saved profile
*/

"use strict";

//Background Color
const bgColor = {
  r: 242,
  g: 238,
  b: 203,
};

//JSON DATA
const FIRSTNAMES_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/firstNames.json`;
const LASTNAMES_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json`;
const HOSPITAL_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/medicine/hospitals.json`;
const DRUGS_DATAT_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/medicine/drugs.json`;
const SYMPTOMS_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/medicine/symptoms.json`;
const DIAGNOSES_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/medicine/cancer.json`;
const NOUNS_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/words/nouns.json`;
//Save and load the data
const PROFILE_DATA_KEY = `profile-data`;

//Profile Entities
let profile = {
  date: 'xxxxxx',
  firstName: 'xxxxxx',
  lastName: 'xxxxxx',
  hospital: 'xxxxxx',
  drug: 'xxxxxx',
  symptoms: 'xxxxxx',
  diagnoses: 'xxxxxx',
  username: 'xxxxxx',
  password: 'xxxxxx'
};

//Text settings
let textSettings = {
  x: 10,
  y: 0,
  size: 32,
  fill: 0,
};

//Boundaries of the "New Patient" Button
let button = {
  x: 0,
  x2: 630,
  y: 470,
  y2: 580,
};

//Create a boolean to determine if the user is signed in or not
let signedIn = false;

//Variables for the JSON DATA
let firstNameData;
let lastNameData;
let hospitalData;
let drugData;
let symptomsData;
let diagnosesData;
let nounsData;

//Preload the json information
function preload() {
  firstNameData = loadJSON(FIRSTNAMES_DATA_URL);
  lastNameData = loadJSON(LASTNAMES_DATA_URL);
  hospitalData = loadJSON(HOSPITAL_DATA_URL);
  drugData = loadJSON(DRUGS_DATAT_URL);
  symptomsData = loadJSON(SYMPTOMS_DATA_URL);
  diagnosesData = loadJSON(DIAGNOSES_DATA_URL);
  nounsData = loadJSON(NOUNS_DATA_URL);
}

//Set up the canvas/ Load the data/run an if statement to determine if a new profile neeeds to be generated
function setup() {
  //Create the canvas
  createCanvas(windowWidth, windowHeight);
  //load the data
  let data = JSON.parse(localStorage.getItem(PROFILE_DATA_KEY));
  //Was there data to load?
  if (data) {
    //If there is ask for the username
    let username = prompt(`What is the Worker ID?`);
    //Check if the username is correct
    if (username === data.username) {
      //Ask for the password next
    let password = prompt(`What is the password?`);
      //Check if the password is correct
      if (password === data.password) {
        //If data loaded, setup the profile
        setupProfile(data);
        //The user is signed in
        signedIn = true;
      }
    }
  }
  else {
    //If there is no data generate a brand new profile
    generateProfile();
    //The user is signed in
    signedIn = true;
  }
}

//Assign the data to the profile
function setupProfile(data) {
  profile.date = data.date;
  profile.firstName = data.firstName;
  profile.lastName = data.lastName;
  profile.hospital = data.hospital;
  profile.drug = data.drug;
  profile.symptoms = data.symptoms;
  profile.diagnoses = data.diagnoses;
  profile.username = data.username;
  profile.password = data.password;
}

//Generating the profile from the JSON DATA
function generateProfile() {
  //Prompts for the user to input their name
  profile.date = prompt('Enter the date.');
  //Generates the first name
  profile.firstName = `${random(firstNameData.firstNames)}`;
  //Generates the last name
  profile.lastName = `${random(lastNameData.lastNames)}`;
  //Generates what hospital they are currently constituted in
  profile.hospital = `${random(hospitalData.hospitals)}`;
  //Generates the prescribed drug for the patient
  profile.drug = `${random(drugData.drugs)}`;
  //Generate what symptoms the patient currently has
  profile.symptoms = `${random(symptomsData.symptoms)}`;
  //Generate a random diagnoses
  profile.diagnoses = `${random(diagnosesData.cancers)}`;
  //Generate a username and password from a random noun
  profile.username = `${random(nounsData.nouns)}`;
  profile.password = `${random(nounsData.nouns)}`;
  //Save the profile to local storage to remember
  localStorage.setItem(PROFILE_DATA_KEY, JSON.stringify(profile));
}

//Draw the background/ Set up how the information will look 
function draw() {
  //Set Background
  background(bgColor.r, bgColor.g, bgColor.b);

  //Create the header + Profile info
  let patientInfo = `Patient Information - Press Delete Key To Punch Out

Date: ${profile.date}
Forename: ${profile.firstName}
Surname: ${profile.lastName}
Hospital: ${profile.hospital}
Diagnoses: ${profile.diagnoses}
Prescribed Drug: ${profile.drug}
Symptoms: ${profile.symptoms}
Worker ID: ${profile.username}
Password: ${profile.password}

Click Here for a New Patient`;

  //Display the profile info and header
  push();
  textSize(textSettings.size);
  textAlign(LEFT, TOP);
  textFont(`Courier, monospace`);
  fill(textSettings.fill);
  text(patientInfo, textSettings.x, textSettings.y);
  pop();
}

//Reload the page when delete key is pressed, clear the profile.
function keyPressed() {
  //See if delete key is pressed
  if (keyCode === 8) {
    //Clear the profile
    localStorage.clear(profile);
    //Reload the page
    window.location.reload();
  }
}

//To generate a new medical form
function mouseClicked() {
  //If signed in is true allow to look at different profiles
  if (signedIn === true) {
    //Make sure it is being clicked in the constraints
    if (mouseX > button.x && mouseX < button.x2) {
      if (mouseY > button.y && mouseY < button.y2) {
        //Generates the first name
        profile.firstName = `${random(firstNameData.firstNames)}`;
        //Generates the last name
        profile.lastName = `${random(lastNameData.lastNames)}`;
        //Generates what hospital they are currently constituted in
        profile.hospital = `${random(hospitalData.hospitals)}`;
        //Generates the prescribed drug for the patient
        profile.drug = `${random(drugData.drugs)}`;
        //Generate what symptoms the patient currently has
        profile.symptoms = `${random(symptomsData.symptoms)}`;
        //Generate a random diagnoses
        profile.diagnoses = `${random(diagnosesData.cancers)}`;
        //Generate a username and password from a random noun
        profile.username = `${random(nounsData.nouns)}`;
        profile.password = `${random(nounsData.nouns)}`;
        //Save the profile to local storage to remember
        localStorage.setItem(PROFILE_DATA_KEY, JSON.stringify(profile));
      }
    }
  }
}
