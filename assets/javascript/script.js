/*global PLANTS*/

// Global selectedPlant values
let selectedPlantIndex = (getRandomInt(0, PLANTS.length -1));
let selectedPlant = PLANTS[selectedPlantIndex];

// Where plants will be pushed once they have been found by user:
let basket = [
  ];

// Image base path for 'plants to find' image:
const baseImagePath = 'assets/images/tokens/';

// Where the image will be placed in the DOM:
const img = document.querySelector("#token");

// Variables for Scoreboard in Gamescreen
const scoreboard = document.querySelector("#score");
let score = 0;

// Variables for Display Correct Plant Modal
const correctAnswerDisplay = document.querySelector('#correct-answer-modal');
let newCorrectAnswer = document.createElement('p');

// Plant Map
const plantmap = document.querySelector('#plantmap');

// Number of plants to find
const numberOfPlantsToFind = 10;

 // ---------------------- Atmos Sounds & controls
const music = document.querySelector('#summer-forest');

const buttonOff = document.querySelector('#sound-off').onclick = function(){
    music.pause();
    document.querySelector('#sound-off').style.visibility="hidden";
    document.querySelector('#sound-on').style.visibility="visible";
};

const buttonOn = document.querySelector('#sound-on').onclick = function(){
    music.play();
    document.querySelector('#sound-off').style.visibility="visible";
    document.querySelector('#sound-on').style.visibility="hidden";
};

const correctAnswerSound = document.querySelector('#correct');
    function playCorrectAnswerSound(){
        correctAnswerSound.play();
    }

// ---------------------- Functions for game to run

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPlantFromPlantsArray(){
    selectedPlantIndex = (getRandomInt(0, PLANTS.length));
    selectedPlant = PLANTS[selectedPlantIndex];
}

function displayAPlantImage() {
    document.querySelector('.image-display').style.visibility = "visible";
    document.querySelector('.counter-display').style.visibility = "visible";
    img.src = baseImagePath + selectedPlant.image_name;
}

function drawScore() {
    scoreboard.textContent = (score);
}

function runGame(){
    getRandomPlantFromPlantsArray();
    displayAPlantImage();
}

// ------------ Start the game
window.onload = runGame();

// ------------ Check if plant clicked by user matches the plant being displayed
plantmap.addEventListener('click', (e) => {
    e.preventDefault();
// If it does not match, show try again modal       
        if (e.target.alt !== selectedPlant.name) {
            showTryAgainModal();
// If it does match, show Correct Modal
        } else {
            setTimeout(checkPlantsArrayLength, 1500);
            showCorrectAnswerModal();
            playCorrectAnswerSound();
                
// Push the correct plant to the 'basket' array & remove it from the 'plants' array  
            basket.push(selectedPlant);
            PLANTS.splice(selectedPlantIndex, 1);
// Add 1 point to the scoreboard            
            score ++;
            drawScore();
        }
});

// Check for end of game status
function checkPlantsArrayLength(){
    let basketArrayLength = basket.length;
        if (basketArrayLength == numberOfPlantsToFind) {
                showEndOfGameDisplay();
                } else { 
                    runGame();}
}

//Modals----
function showTryAgainModal() {
    (document.querySelector('#try-again-modal')).style.visibility="visible";
        setTimeout(function() {
            (document.querySelector('#try-again-modal')).style.visibility="hidden";
        }, 1000);
    }

function showCorrectAnswerModal() {
    correctAnswerDisplay.style.visibility="visible";
    newCorrectAnswer.textContent = "You found " + selectedPlant.name + "!";
    correctAnswerDisplay.appendChild(newCorrectAnswer);

setTimeout(function() {
    (document.querySelector('#correct-answer-modal')).style.visibility="hidden";
        }, 1500,);
}

function showEndOfGameDisplay(){
    document.querySelector('#end-game-modal').style.visibility="visible";
}

// the plants 'basket' -------
function displayPlantsFoundEndOfGame() {
  var plantTable="<table border='1|1'>";
  for (var i=0; i< basket.length; i++){
      plantTable+= "<tr>";
      plantTable+= "<td>"+ basket[i].name + "</td>";
      plantTable+= "<td>"+ basket[i].description + "</td>";
      plantTable+= "<td>"+ "<img src=\"" + baseImagePath + basket[i].image_name + "\">" + "</td>";
      plantTable+="</tr>";
  }
    plantTable+="</table>";
    document.querySelector('#container').innerHTML = plantTable;
}

// ------- buttons that lead to the end of game 'basket' (plants found at end of game)
document.querySelector('#basket-button').onclick = function() {
    displayPlantsFoundEndOfGame();
    document.querySelector('#learn-about-plants').style.visibility="visible";
    document.querySelector('.basket-buttons-div').style.visibility = "visible";
    document.querySelector('#end-game-modal').style.visibility = "hidden";
    img.style.visibility = "hidden";
    document.querySelector('#plant-map-image').style.visibility = "hidden";
    document.querySelector('#plant-map').style.visibility = "hidden";
};

document.querySelector('#exit-button').onclick = function() {
    displayPlantsFoundEndOfGame();
    document.querySelector('#learn-about-plants').style.visibility="visible";
    document.querySelector('.basket-buttons-div').style.visibility = "visible";
    document.querySelector('#end-game-modal').style.visibility = "hidden";
    img.style.visibility = "hidden";
    document.querySelector('#plant-map-image').style.visibility = "hidden";
    document.querySelector('#plant-map').style.visibility = "hidden";
};
