
// Make the plant map draggable
 $( function() {
             $( "#plant-map" ).draggable();
                } );

  let plants = [
        {
            'name': 'Alexanders',
            'description': 'Found in hedgebanks and waste places near the sea. Edible stems, leaves and flower buds. Flowers April-June.',
            'image_name': 'alexanders.png',
            'boundary': '776,1926,655,1726',
        },
        {
            'name': 'Apple Mint',
            'description': 'Apple-scented mint which is tasty in cold drinks.',
            'image_name': 'applemint.png',
            'boundary': '94,98,230,321',
      },
      {
            'name': 'Aurum Lilly',
            'description': 'Found in shady places. Arrow-shaped glossy leaves, with shiny orange berries in late summer. Poisonous. If the root is baked until dry, it is harmless and can be used like arrowroot.',
            'image_name': 'aurumlilly.jpg',
            'boundary': '1071,609,1166,759',
            'id': 'aurumlilly'
      },
      {
            'name': 'Balm',
            'description': 'Found near hedges in shady places. Yellow-green pointed leaves, white/yellow flowers July-September. Lemon-scented leaves add lemon flaour to food, make a refreshing tea, and can be added to salads.',
            'image_name': 'balm.png',
            'boundary': '260,1260,440,1438',
            'id': 'balm'
      },
      {
            'name': 'Bath Asparagus',
            'description': 'Found around Bath and Wiltshire. Greyish leaves and pale yellow and green flower spikes from May-July. The unopened flower spikes can be cooked and eaten like asparagus. Belongs to the lily family and is also called Spiked Star-of-Bethlehem.',
            'image_name': 'bathasparagus.png',
            'boundary': '951,1802,823,1539',
            'id': 'bathasparagus'
      },
      {
            'name': 'Beech',
            'description': 'A tree found all over the British Isles. Smooth grey bark and bright green leaves. Nuts from September-October. The nuts can be eaten or used to make beechnut oil and butter; the young leaves can be used to make liquor or eaten in salads; and the wood can be used for fuel and making furniture.',
            'image_name': 'beech.png',
            'boundary': '2078,243,2253,331',
            'id': 'beech'
      },
      {
            'name': 'Whorled Mint',
            'description': 'Found in damp places. A cross between water mint and corn mint. Edible.',
            'image_name': 'whorledmint.png',
            'boundary': '94,98,230,321',
            'id': 'whorledmint'
      },

  ]

  let basket = [

  ]

  const baseImagePath = 'assets/images/tokens/';
  /* Game flow

1. Show a random image to user
2. Wait for user to click on an image on the main canvas
3. Score the user and update the scoreboard
// Pop the plant from the plants array and put it in the basket
4. (Not necessarily in the flow if in freestyle mode)
  If user clicks on X, then take them to the basket
  4 (i) Show the plants in cards that contain each plant's image and description
5. Game is over when user has found all the plants.

*/

// Generate a random integer between 0 and plants.length
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Show an image ('token') to match to image on the picture map


function showImage(){
// Use the random number to select a plant object
    let selectedPlantIndex = (getRandomInt(0, plants.length));
// Get the image src from selectedPlant
    let selectedPlant = plants[selectedPlantIndex];

// Put image into DOM...
// Create image element to attach to div
    var img = document.createElement("img");
// Specify the image to be attached
    img.src = baseImagePath + selectedPlant.image_name;
// Get the div and attach image
    var src = document.getElementById("token");
    src.appendChild(img);
}


// function to check if plant clicked is the same plant that was randomly generated... 'name' will be the same as html 'title'.
// return true or false
// if true, increment counter by 1, move plant object to 'basket' array & getRandomInt again
// if false, 'try again' message.

//Example Event Handler for the user clicking on any plant on the plant image map - not to be kept
function plantClick() {

    var plantmap = document.getElementById('plantmap');

    plantmap.addEventListener('click', anyPlantClick, false);

    function anyPlantClick(selectedPlant) {
        if (selectedPlant.target !== selectedPlant.currentTarget) {
            var clickedBtn = selectedPlant.target.title;
            alert("You found " + clickedBtn + " !");
    }
        selectedPlant.stopPropagation();
    }

}

function Score(){

}

function completeGame(){

}




plantClick();
showImage();