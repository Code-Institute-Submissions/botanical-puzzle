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
            'image_name': 'aurumlilly.png',
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

  ]
// this is where plants will be pushed to once they have been found by user:
  let basket = [
  ]

  const baseImagePath = 'assets/images/tokens/';
  /* Game flow

1. Show a random image to user
2. Wait for user to click on an image on the main canvas
3. Score the user and update the scoreboard
// Pop the plant from the plants array and put it in the basket
4. If user clicks on X, then take them to the basket
  4 (i) Show the plants in cards that contain each plant's image and description
5. Game is over when user has found all the plants.

*/

// Generate a random integer between 0 and plants.length
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Use the random number to select a plant object
selectedPlantIndex = (getRandomInt(0, plants.length));

// Get the selectedPlant




console.log(selectedPlant);

// Show an image ('token') to match to an image on the picture map
let img = document.getElementById("token");


function showPlantImage(){
// Specify the image to be attached
        img.src = baseImagePath + selectedPlant.image_name;
        } 

window.onload = showPlantImage();

console.log(selectedPlant.name);




// function to check if plant clicked is the same plant that was randomly generated... 'name' will be the same as html 'title'.

    const plantmap = document.querySelector('#plantmap');

    plantmap.addEventListener('click', (e) => {
        e.preventDefault();
        // if false, 'try again' message.
       
        if (e.target.title !== selectedPlant.name) {
            alert("Try again!");
         // if true, push item to basket array (remove item from plants array) and generate new image from plant array
        } else {
            basket.push(selectedPlant);
            getRandomInt(0, plants.length);
            newSelectedPlant();
            showPlantImage();
            console.log(basket);
        }
    });

    let selectedPlant = plants[selectedPlantIndex];
    
    console.log(plants);
    console.log(basket);

