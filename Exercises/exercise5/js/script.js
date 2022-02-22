/**
Exercise 5 - Sad Sonnet Generator
Alex Cho


*/

"use strict";

//Sonnet Lines
let sonnetLines = {
  //Array of A lines
  aLines: [
    'My body is engulfed with darkness',
    'A soul so empty, considered to be heartless',
    'What is left of my body is my carcass',
    'I will die regardless',
    'Rip through flesh, bones, and cartilage',
    'The void so dark and spotless',
  ],
//Array of B lines
  bLines: [
    'I been trying to change every single day',
    'You do not support my decisions in any way',
    'It hurts so much to say',
    'Not enough time in a day to pray',
    'My thoughts have gone array',
    'I dream to one day feel OK',
  ],
//Array of C lines
  cLines: [
    'I have no shoulder to lean on, when it is needed',
    'I am broken up in pieces, feeling defeated',
    'Get my hopes up to end up feeling depleted',
    'Never have I once felt conceited',
    'Expections are too high, they are never exceeded',
    'Feel a sense of resent the way I am mistreated'
  ],
//Array of D lines
  dLines: [
    'I try to be the person that I am not',
    'Stuck in a box just waiting until I rot',
    'Tears do not shed because they are being fought',
    'Gamble my life away like I am playing a slot',
    'Cover my mouth preventing my thought',
    'Independent, therefore everything is self-taught',
  ],
//Array of E lines
  eLines: [
    'I am stuck in the freezing rain',
    'Reminisce while I wait for the train',
    'Thinking about the past causes enermous amounts of pain',
    'Keep the emotions concealed within the brain',
    'Excess baggage is like a ball and chain',
    'Might go mental and pop a vein',
  ],
//Array of F lines
  fLines: [
    'I keep chasing the sun',
    'Life is tragic, it has never been fun',
    'To ease my stress, I go on a run',
    'Return to reality, the stress has begun',
    'We end our life, but life is not done',
    'Life is all lose, and can never be won',
  ],
//Array of G lines
  gLines: [
    'I am hurt inside out',
    'The worst feeling in the world is having self-doubt',
    'Ususally, soft spoken but in times there is a need to shout',
    'Low self-esteem, do not even know what I am about',
    'The darkness is spread throughout',
    'Hundreds of mental scars that I have lost count',
  ]
};

//Elements of the poem
let line1 = document.getElementById('line-1');
let line2 = document.getElementById('line-2');
let line3 = document.getElementById('line-3');
let line4 = document.getElementById('line-4');
let line5 = document.getElementById('line-5');
let line6 = document.getElementById('line-6');
let line7 = document.getElementById('line-7');
let line8 = document.getElementById('line-8');
let line9 = document.getElementById('line-9');
let line10 = document.getElementById('line-10');
let line11 = document.getElementById('line-11');
let line12 = document.getElementById('line-12');
let line13 = document.getElementById('line-13');
let line14 = document.getElementById('line-14');

//Setting up the lines
setupLines();

//Puts a random line of text in the poem
function setupLines() {
  line1.innerText = random(sonnetLines.aLines);
  line2.innerText = random(sonnetLines.bLines);
  line3.innerText = random(sonnetLines.aLines);
  line4.innerText = random(sonnetLines.bLines);
  line5.innerText = random(sonnetLines.cLines);
  line6.innerText = random(sonnetLines.dLines);
  line7.innerText = random(sonnetLines.cLines);
  line8.innerText = random(sonnetLines.dLines);
  line9.innerText = random(sonnetLines.eLines);
  line10.innerText = random(sonnetLines.fLines);
  line11.innerText = random(sonnetLines.eLines);
  line12.innerText = random(sonnetLines.fLines);
  line13.innerText = random(sonnetLines.gLines);
  line14.innerText = random(sonnetLines.gLines);
}

//Returns a random element from the array
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
