    
  /* Game flow

1. Show a random image to user 
2. Wait for user to click on an image on the main canvas 
3. Score the user and update the scoreboard 
// Pop the plant from the plants array and put it in the basket 
4. If user clicks on X, then take them to the basket
  4 (i) Show the plants in table that contains each plant's image and description
5. Game is over when user has found 20 plants.

*/



/*global PLANTS*/
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

// Plantmap Variable
const plantmap = document.querySelector('#plantmap');

const numberOfPlantsToFind = 20;

// ------------ Instructions Variables

const instruction1 = document.querySelector('.instruction-1');
const instruction2 = document.querySelector('.instruction-2');
const instruction3 = document.querySelector('.instruction-3');
const instruction4 = document.querySelector('.instruction-4');

const nextButton2 = document.querySelector('.nav-next-2');
const nextButton3 = document.querySelector('.nav-next-3');
const nextButton4 = document.querySelector('.nav-next-4');

const letsGo = document.querySelector('#lets-go');
const letsGoBack = document.querySelector('.nav-back');


// Global selectedPlant values
let selectedPlantIndex = (getRandomInt(0, PLANTS.length -1));
let selectedPlant = PLANTS[selectedPlantIndex];



function startInstructions() {
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


// ------------ Window On Load Instructions
window.onload = startInstructions();


// ------------ Generate a random integer between 0 and plants.length
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// ------------ Generate a new plant Global value

function getRandomPlant(){
    selectedPlantIndex = (getRandomInt(0, PLANTS.length));
    selectedPlant = PLANTS[selectedPlantIndex];
}

// ------------ Get the first random plant object
getRandomPlant();

// ------------ Get the next random plant object
function showNextRandomPlant(){
    getRandomPlant();
    showPlantImage();
}

// ------------ Show an image of the current plant object
function showPlantImage() {
    document.querySelector('.image-display').style.visibility = "visible";
    document.querySelector('.counter-display').style.visibility = "visible";
    img.src = baseImagePath + selectedPlant.image_name;
    console.log(selectedPlant);
}


// ------------ Start the game
letsGo.onclick = function startGame() {
        instruction4.style.visibility="hidden";
        showPlantImage();
        soundOfTheForest();
    };

//-------------- Check to see if the Plants Array is empty

// ------------ Check if plant clicked by user matches the plant being displayed

plantmap.addEventListener('click', (e) => {
    e.preventDefault();
// If it does not match, show try again modal       
        if (e.target.id !== selectedPlant.name) {
            showTryAgainModal();
// If it does match, show Correct Modal
        } else {
            setTimeout(checkPlantsArray, 1500);
            showCorrectAnswerModal();
            bling();
                
// Push the correct plant to the 'basket' array & remove it from the 'plants' array  
            basket.push(selectedPlant);
            PLANTS.splice(selectedPlantIndex, 1);
// Add 1 point to the scoreboard            
            score ++;
            drawScore();

            function checkPlantsArray(){
                let basketArrayLength = basket.length;
                if (basketArrayLength == numberOfPlantsToFind) {
                        showEndOfGameDisplay();
                        } else {
                        // Get a new random Plant  
                            showNextRandomPlant();
                        }
            }   
        }
});


// ------------ Show 'Try Again Modal' 
function showTryAgainModal() {
    (document.querySelector('#try-again-modal')).style.visibility="visible";
        setTimeout(function() {
            (document.querySelector('#try-again-modal')).style.visibility="hidden";
        }, 1000);
    }

// ------------ Show 'Correct Plant Modal' 
// ---Clear the previous Correct user answer
function clearCorrectAnswerModal() {
        correctAnswerDisplay.removeChild(correctAnswerDisplay.lastElementChild);
    }

// ---Display a modal when the user clicks the correct plant
function showCorrectAnswerModal() {
    correctAnswerDisplay.style.visibility="visible";
    newCorrectAnswer.textContent = "You found " + selectedPlant.name + "!";
    correctAnswerDisplay.appendChild(newCorrectAnswer);


// ---Close the modal when user clicks anywhere on the screen
window.onclick = function(event) {
    if (event.target == correctAnswerDisplay) {
        correctAnswerDisplay.style.visibility="hidden";
    }
};
// ---Auto Timeout on Modal
setTimeout(function() {
    (document.querySelector('#correct-answer-modal')).style.visibility="hidden";
        }, 1500,);
}

// ------------ Update 'Scoreboard'
function drawScore() {
    scoreboard.textContent = (score);
}

// -------------- Game Complete

function showEndOfGameDisplay(){
    document.querySelector('#end-game-modal').style.visibility="visible";
}

// ------------ Basket
function createTable() {
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




// ------- buttons that lead to the basket
document.querySelector('#basket-button').onclick = function() {
    createTable();
    document.querySelector('#learn-about-plants').style.visibility="visible";
    document.querySelector('.basket-buttons-div').style.visibility = "visible";
    document.querySelector('#end-game-modal').style.visibility = "hidden";
    img.style.visibility = "hidden";
}

document.querySelector('#exit-button').onclick = function() {
    createTable();
    document.querySelector('#learn-about-plants').style.visibility="visible";
    document.querySelector('.basket-buttons-div').style.visibility = "visible";
    document.querySelector('#end-game-modal').style.visibility = "hidden";
    img.style.visibility = "hidden";
}


// Sounds
// ----------- Correct Sound
const blingSound = document.querySelector('#correct');
    function bling(){
        blingSound.play();
    }

 // ---------------------- Atmos Sounds & controls

const music = document.querySelector('#summer-forest');
function soundOfTheForest(){
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