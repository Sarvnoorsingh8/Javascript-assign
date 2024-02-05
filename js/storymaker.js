// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
*/
// button query selectors

const btnNoun1 = document.getElementById("noun1");
const btnverb = document.getElementById("verb");
const btnAdjective = document.getElementById("adjective");
const btnNoun2 = document.getElementById("noun2");
const btnSetting = document.getElementById("setting");

// Constants for p tag  
const paraChoosenNoun1 = document.getElementById("choosenNoun1");
const paraChoosenVerb = document.getElementById("choosenVerb");
const paraChoosenAdjective = document.getElementById("choosenAdjective");
const paraChoosenNoun2 = document.getElementById("choosenNoun2");
const paraChoosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags

const btnPlayback = document.getElementById("playback");
const btnRandom = document.getElementById("random");

// Variables of arrays 
// Array- nouns 1
const nouns1 = [
  "The Turkey",
  "Mom",
  "Dad",
  "The Dog",
  "My Teacher",
  "The Elephant",
  "The Cat",
];
// Array for verbs
const verbs = ["sat on", "ate", "danced with", "saw", "dosen't like", "kissed"]; 
// Array of adjectives
const adjectives = [
  "a funny",
  "a scary",
  "a goofy",
  "a slimy",
  "a barking",
  "a fat",
]; 
// Array of nouns2
const nouns2 = ["goat", "monkey", "fish", "cowfrog", "bug", "worm"]; 
// Array of settings
const settings = [
  "on the moon",
  "on the chair",
  "in my spaghetti",
  "in my soup",
  "on the grass",
  "in my shoes",
]; 

// Variables for count to grab array elements
let count = 0;

// variables for the story ,studentid and student name
const story = document.getElementById("story");
const studentId="name:Sarvnoor ID:200552807";
/* Functions
*/ 
function noun1_on_click() {
  // variable to get array element and displaying it
  paraChoosenNoun1.textContent = nouns1[count % nouns1.length];
  count++;
}

function verb_on_click() {
  paraChoosenVerb.textContent = verbs[count % verbs.length];
  count++;
}

function adjective_on_click() {
  paraChoosenAdjective.textContent = adjectives[count % adjectives.length];
  count++;
}

function noun2_on_click() {
  paraChoosenNoun2.textContent = nouns2[count % nouns2.length];
  count++;
}

function setting_on_click() {
  paraChoosenSetting.textContent = settings[count % settings.length];
  count++;
}

// concatenate the user story and display
function playback_on_click() {
  // Concatenate the user story and display
  const userStory = `${paraChoosenNoun1.textContent} ${paraChoosenVerb.textContent} ${paraChoosenAdjective.textContent} ${paraChoosenNoun2.textContent} ${paraChoosenSetting.textContent}`;
  story.textContent = userStory;
}


function random_on_click() {
  // Generate random indices for each array
  const randomIndexNoun1 = Math.floor(Math.random() * nouns1.length);
  const randomIndexVerb = Math.floor(Math.random() * verbs.length);
  const randomIndexAdjective = Math.floor(Math.random() * adjectives.length);
  const randomIndexNoun2 = Math.floor(Math.random() * nouns2.length);
  const randomIndexSetting = Math.floor(Math.random() * settings.length);

  // Display randomly chosen elements
  paraChoosenNoun1.textContent = nouns1[randomIndexNoun1];
  paraChoosenVerb.textContent = verbs[randomIndexVerb];
  paraChoosenAdjective.textContent = adjectives[randomIndexAdjective];
  paraChoosenNoun2.textContent = nouns2[randomIndexNoun2];
  paraChoosenSetting.textContent = settings[randomIndexSetting];
  playback_on_click()
}


/* Event Listeners
 */

btnNoun1.addEventListener("click", noun1_on_click);
btnverb.addEventListener("click", verb_on_click);
btnAdjective.addEventListener("click", adjective_on_click);
btnNoun2.addEventListener("click", noun2_on_click);
btnSetting.addEventListener("click", setting_on_click);

btnPlayback.addEventListener("click", playback_on_click);
btnRandom.addEventListener("click", random_on_click);

// Function to dynamically add student ID to the paragraph
function addStudentId() {
  document.getElementById("studentId").innerHTML = `${studentId}`;
}

// Event listener for the h1 element
document.getElementById("createName").addEventListener("click", addStudentId);

