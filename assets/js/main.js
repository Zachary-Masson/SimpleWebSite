/*
    Author : Zachary Masson
    File : assets/js/main.js
    Description : 
        - JS master file for this website, which manages and imports all JS functionality
*/

// import js function in other files
import { seconds } from "./tools.js";
import { TextScramble } from "./textScramble.js";

// Use TextScramble by "soulwire"
// for anime the Hero text

// get text for animate with getElementById method
const sws_automatic_text = document.getElementById("sws-automatic-text");
// set text for animation
const sws_automatic_texts = [
  "Simple Web Site",
  "Simple For Learn",
  "Simple And Free",
  "See the code for learn",
];
// declare state of system
let sws_automatic_text_state = 0;

const fx = new TextScramble(sws_automatic_text);

// use TextScramble function
const next = () => {
  fx.setText(sws_automatic_texts[sws_automatic_text_state]).then(() => {
    setTimeout(next, seconds(8));
  });
  sws_automatic_text_state =
    (sws_automatic_text_state + 1) % sws_automatic_texts.length;
};

next();
