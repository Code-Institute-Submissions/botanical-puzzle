
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
const body = document.querySelector('#plant-map');
const correctAnswerDisplay = document.querySelector('#correct-answer-modal');
let newCorrectAnswer = document.createElement('p');

// Plant Map
const plantmap = document.querySelector('#plantmap');


// Number of plants to find
const numberOfPlantsToFind = 20;

 // ---------------------- Atmos Sounds & controls
const music = document.querySelector('#summer-forest');

function playBackgroundMusic(){
    music.loop = true;
    music.play()
}

const buttonOff = document.querySelector('#sound-off').onclick = function(){
    music.pause();
    document.querySelector('#sound-off').style.visibility="hidden";
    document.querySelector('#sound-on').style.visibility="visible";
}

const buttonOn = document.querySelector('#sound-on').onclick = function(){
    music.play();
    document.querySelector('#sound-off').style.visibility="visible";
    document.querySelector('#sound-on').style.visibility="hidden";
}

const correctAnswerSound = document.querySelector('#correct');
    function playCorrectAnswerSound(){
        correctAnswerSound.play();
    }


//Start game instructions---//
const instruction1 = document.querySelector('.instruction-1');
const instruction2 = document.querySelector('.instruction-2');
const instruction3 = document.querySelector('.instruction-3');
const instruction4 = document.querySelector('.instruction-4');

const nextButton2 = document.querySelector('.nav-next-2');
const nextButton3 = document.querySelector('.nav-next-3');
const nextButton4 = document.querySelector('.nav-next-4');

const letsGo = document.querySelector('#lets-go');
const letsGoBack = document.querySelector('.nav-back');

function startGameInstructions() {
    instruction1.style.visibility="visible";
}
nextButton2.onclick = function slideTwo(){
    instruction1.style.visibility="hidden";
    instruction2.style.visibility="visible";
};
nextButton3.onclick = function slideThree(){
    instruction2.style.visibility="hidden";
    instruction3.style.visibility="visible";
};
nextButton4.onclick = function slideFour(){
    instruction3.style.visibility="hidden";
    instruction4.style.visibility="visible";
};
letsGoBack.onclick = function goBack() {
    instruction4.style.visibility="hidden";
    instruction1.style.visibility="visible";
};

window.onload = startGameInstructions();



//Functions for game to run-------------------------------------------------

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
    console.log(selectedPlant);
}

function showPlantForUserToFind(){
    getRandomPlantFromPlantsArray();
    displayAPlantImage();
}


function drawScore() {
    scoreboard.textContent = (score);
}


// ------------ Start the game
letsGo.onclick = function startGame() {
        instruction4.style.visibility="hidden";
        showPlantForUserToFind();
        playBackgroundMusic();
    };

// ------------ Check if plant clicked by user matches the plant being displayed
plantmap.addEventListener('click', (e) => {
    e.preventDefault();
// If it does not match, show try again modal       
        if (e.target.id !== selectedPlant.name) {
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
                    showPlantForUserToFind();}
}
//----


//Modals----
function showTryAgainModal() {
    (document.querySelector('#try-again-modal')).style.visibility="visible";
        setTimeout(function() {
            (document.querySelector('#try-again-modal')).style.visibility="hidden";
        }, 1000);
    }

function clearCorrectAnswerModal() {
        correctAnswerDisplay.removeChild(correctAnswerDisplay.lastElementChild);
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

function displayPlantsFoundEndOfGame() {
  var plantTable="<table border='1|1'>";
  for (var i=0; i< basket.length; i++){
      plantTable+= "<tr>";
      plantTable+= "<td>"+ basket[i].name + "</td>";
      plantTable+= "<td>"+ basket[i].description + "</td>";
      plantTable+= "<td>"+ "<img src=\"" + baseImagePath + basket[i].image_name + "\">" + "</td>";
      plantTable+="</tr>"
  }
    plantTable+="</table>";
    document.querySelector('#container').innerHTML = plantTable;
}



// ------- buttons that lead to the end of game 'basket' (plants found at end of game)
document.querySelector('#basket-button').onclick = function() {
    createTable();
    document.querySelector('#learn-about-plants').style.visibility="visible";
    document.querySelector('.basket-buttons-div').style.visibility = "visible";
    document.querySelector('#end-game-modal').style.visibility = "hidden";
    img.style.visibility = "hidden";
}

document.querySelector('#exit-button').onclick = function() {
    displayPlantsFoundEndOfGame();
    document.querySelector('#learn-about-plants').style.visibility="visible";
    document.querySelector('.basket-buttons-div').style.visibility = "visible";
    document.querySelector('#end-game-modal').style.visibility = "hidden";
    img.style.visibility = "hidden";
}
