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

//Returns a random element from the array
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
