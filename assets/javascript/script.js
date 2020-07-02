    
  /* Game flow

1. Show a random image to user x
2. Wait for user to click on an image on the main canvas x
3. Score the user and update the scoreboard x
// Pop the plant from the plants array and put it in the basket x
4. If user clicks on X, then take them to the basket
  4 (i) Show the plants in cards that contain each plant's image and description
5. Game is over when user has found all the plants.

*/
  

// Array of plants to find:
  const plants = [
        {
            'name': 'Alexanders',
            'description': 'Found in hedgebanks and waste places near the sea. Edible stems, leaves and flower buds. Flowers April-June.',
            'image_name': 'alexanders.png',
            'coords': '776,1926,655,1726',
        },
        {
            'name': 'Apple Mint',
            'description': 'Apple-scented mint which is tasty in cold drinks.',
            'image_name': 'applemint.png',
            'coords': '94,98,230,321',
        },
        {
            'name': 'Aurum Lilly',
            'description': 'Found in shady places. Arrow-shaped glossy leaves, with shiny orange berries in late summer. Poisonous. If the root is baked until dry, it is harmless and can be used like arrowroot.',
            'image_name': 'aurumlilly.png',
            'coords': '1071,609,1166,759',
        },
        {
            'name': 'Balm',
            'description': 'Found near hedges in shady places. Yellow-green pointed leaves, white/yellow flowers July-September. Lemon-scented leaves add lemon flaour to food, make a refreshing tea, and can be added to salads.',
            'image_name': 'balm.png',
            'coords': '260,1260,440,1438',
        },
        /*{
            'name': 'Bath Asparagus',
            'description': 'Found around Bath and Wiltshire. Greyish leaves and pale yellow and green flower spikes from May-July. The unopened flower spikes can be cooked and eaten like asparagus. Belongs to the lily family and is also called Spiked Star-of-Bethlehem.',
            'image_name': 'bathasparagus.png',
            'coords': '951,1802,823,1539',
        },*/
        {
            'name': 'Beech',
            'description': 'A tree found all over the British Isles. Smooth grey bark and bright green leaves. Nuts from September-October. The nuts can be eaten or used to make beechnut oil and butter; the young leaves can be used to make liquor or eaten in salads; and the wood can be used for fuel and making furniture.',
            'image_name': 'beech.png',
            'coords': '2078,243,2253,331',
        },
        {
            'name': 'Bilberry',
            'description': '',
            'image_name': 'bilberry.png',
            'coords': '778,41,923,327',
        },
        {
            'name': 'Bistort',
            'description': '',
            'image_name': 'bistort.png',
            'coords': '2316,937,2431,1170',
        },
        /*
        {
            'name': 'Bitter Cress',
            'description': '',
            'image_name': 'bittercress.png',
            'coords': '1779,1196,1906,1423',
        },*/
        {
            'name': 'Bitter Vetch',
            'description': '',
            'image_name': 'bittervetch.png',
            'coords': '2672,335,2782,516',
        },
        {
            'name': 'Blackcurrant',
            'description': '',
            'image_name': 'blackcurrant.png',
            'coords': '483,1168,610,1336',
        },
        {
            'name': 'Bladder Campion',
            'description': '',
            'image_name': 'bladdercampion.png',
            'coords': '1292,1211,1384,1306',
        },
        {
            'name': 'Bog Myrtle',
            'description': '',
            'image_name': 'bogmyrtle.png',
            'coords': '828,997,926,1205',
        },
        {
            'name': 'Borage',
            'description': '',
            'image_name': 'borage.png',
            'coords': '515,1759,583,1864',
        },
        {
            'name': 'Brooklime',
            'description': '',
            'image_name': 'brooklime.png',
            'coords': '335,1087,435,1197',
        },
        {
            'name': 'Burdock',
            'description': '',
            'image_name': 'burdock.png',
            'coords': '115,570,247,740',
        },
        {
            'name': 'Cats-ear',
            'description': '',
            'image_name': 'catsear.png',
            'coords': '1277,831,1362,1061',
        },
        {
            'name': 'Chamomile',
            'description': '',
            'image_name': 'chamomile.png',
            'coords': '1557,269,1657,462',
        },/*
        {
            'name': 'Chickweed',
            'description': '',
            'image_name': 'chickweed.png',
            'coords': '1205,1477,1301,1600',
        },*/
        {
            'name': 'Chicory',
            'description': '',
            'image_name': 'chicory.png',
            'coords': '2346,740,2459,890',
        },
        {
            'name': 'Chives',
            'description': '',
            'image_name': 'chives.png',
            'coords': '2509,358,2631,520',
        },
        {
            'name': 'Cleavers',
            'description': '',
            'image_name': 'cleavers.png',
            'coords': '1918,50,2045,378',
        },
        {
            'name': 'Cloudberry',
            'description': '',
            'image_name': 'cloudberry.png',
            'coords': '2646,1051,2747,1186',
        },
        {
            'name': 'Comfrey',
            'description': '',
            'image_name': 'comfrey.png',
            'coords': '540,24,668,187',
        },/*
        {
            'name': 'Corn Mint',
            'description': '',
            'image_name': 'cornmint.png',
            'coords': '703,708,778,818',
        },
        {
            'name': 'Cow Berry',
            'description': '',
            'image_name': 'cowberry.png',
            'coords': '971,1455,1149,1595',
        },            
        {
            'name': 'Cow Parsley',
            'description': '',
            'image_name': 'cowparsley.png',
            'coords': '798,1324,901,1470',
        },
        {
            'name': 'Cowslip',
            'description': '',
            'image_name': 'cowslip.png',
            'coords': '946,1234,1036,1394',
        },
        {
            'name': 'Cranberry',
            'description': '',
            'image_name': 'cranberry.png',
            'coords': '79,1600,290,1732',
        },
        {
            'name': 'Crowberry',
            'description': '',
            'image_name': 'crowberry.png',
            'coords': '2028,1812,2293,1895',
        },
        {
            'name': 'Cuckooflower',
            'description': '',
            'image_name': 'cuckooflower.png',
            'coords': '2173,375,2256,470',
        },
        {
            'name': 'Curled Doc',
            'description': '',
            'image_name': 'curleddoc.png',
            'coords': '686,210,758,498',
        },
        {
            'name': 'Dandelion',
            'description': '',
            'image_name': 'dandelion.png',
            'coords': '14,370,127,533',
        },
        {
            'name': 'Dogs Mercury',
            'description': '',
            'image_name': 'dogsmercury.png',
            'coords': '1838,450,1938,630',
        },
        {
            'name': 'Dwarf Cornel',
            'description': '',
            'image_name': 'dwarfcornel.png',
            'coords': '2273,1190,2351,1316',
        },
        {
            'name': 'Dwarf Spurge',
            'description': '',
            'image_name': 'dwarfspurge.png',
            'coords': '1697,1691,1752,1828',
        },
        {
            'name': 'Evening Primrose',
            'description': '',
            'image_name': 'eveningprimrose.png',
            'coords': '1990,417,2078,587',
        },
        {
            'name': 'Fat Hen',
            'description': '',
            'image_name': 'fathen.png',
            'coords': '1632,1193,1712,1398',
        },
        {
            'name': 'Fennel',
            'description': '',
            'image_name': 'fennel.png',
            'coords': '936,594,1024,749',
        },
        {
            'name': 'Fieldpenny Cress',
            'description': '',
            'image_name': 'fieldpennycress.png',
            'coords': '1535,829,1592,977',
        },
        {
            'name': 'Garlic Mustard',
            'description': '',
            'image_name': 'garlicmustard.png',
            'coords': '1913,937,2078,1130',
        },
        {
            'name': 'Golden Saxifrage',
            'description': '',
            'image_name': 'goldensaxifrage.png',
            'coords': '2579,35,2662,213',
        },
        {
            'name': 'Good King Henry',
            'description': '',
            'image_name': 'goodkinghenry.png',
            'coords': '1417,1596,1530,1776',
        },
        {
            'name': 'Gooseberry',
            'description': '',
            'image_name': 'gooseberry.png',
            'coords': '1014,1711,1116,1851',
        },
        {
            'name': 'Ground Ivy',
            'description': '',
            'image_name': 'groundivy.png',
            'coords': '568,251,655,381',
        },
        {
            'name': 'Hawthorn',
            'description': '',
            'image_name': '',
            'coords': '2426,1446,2626,1574',
        },
        {
            'name': 'Hazel',
            'description': '',
            'image_name': 'hazel.png',
            'coords': '2085,829,2268,909',
        },
        {
            'name': 'Heather',
            'description': '',
            'image_name': 'heather.png',
            'coords': '1672,40,1737,231',
        },
        {
            'name': 'Hemlock',
            'description': '',
            'image_name': '',
            'coords': '1895,1514,2058,1709',
        },
        {             
            'name': 'Henbit',
            'description': '',
            'image_name': 'henbit.png',
            'coords': '776,588,856,691',
        },
        {
            'name': 'Herb Bennet',
            'description': '',
            'image_name': 'herbbennet.png',
            'coords': '2454,80,2556,311',
        },
        {
            'name': 'Hops',
            'description': '',
            'image_name': 'hops.png',
            'coords': '1091,1121,1252,1226',
        },
        {
            'name': 'Horseradish',
            'description': '',
            'image_name': 'horseradish.png',
            'coords': '1767,95,1890,281',
        },
        {
            'name': 'Juneberry',
            'description': '',
            'image_name': 'juneberry.png',
            'coords': '1404,1049,1575,1187',
        },
        {
            'name': 'Juniper',
            'description': '',
            'image_name': 'juniper.png',
            'coords': '2626,1601,2819,1699',
        },
        {
            'name': 'Kanpweed',
            'description': '',
            'image_name': 'knapweed.png',
            'coords': '503,1393,585,1541',
        },
        {
            'name': 'Lambs Lettuce',
            'description': '',
            'image_name': 'lambslettuce.png',
            'coords': '493,446,580,625',
        },
        {
            'name': 'Lime',
            'description': '',
            'image_name': 'lime.png',
            'coords': '2406,1256,2576,1376',
        },
        {
            'name': 'Lungwort',
            'description': '',
            'image_name': 'lungwort.png',
            'coords': '1146,80,1259,396',
        },
        {
            'name': 'Maidenhair Fern',
            'description': '',
            'image_name': 'maidenhairfern.png',
            'coords': '1324,1361,1467,1503',
        },*/
        {
            'name': 'Mallow',
            'description': '',
            'image_name': 'mallow.png',
            'coords': '2126,1270,2238,1458',
        },/*
        {
            'name': 'Marchthistle',
            'description': '',
            'image_name': 'marchthistle.png',
            'coords': '1710,333,1805,486',
        },
        {
            'name': 'Marsh Mallow',
            'description': '',
            'image_name': 'marshmallow.png',
            'coords': '1715,647,1805,747',
        },
        {
            'name': 'Marsh Samphire',
            'description': '',
            'image_name': 'marshsamphire.png',
            'coords': '2426,1596,2526,1694',
        },
        {
            'name': 'Meadowsweet',
            'description': '',
            'image_name': 'meadowsweet.png',
            'coords': '2233,42,2414,215',
        },
        {
            'name': 'Medlar',
            'description': '',
            'image_name': 'medlar.png',
            'coords': '1657,810,1820,947',
        },
        {
            'name': 'Milk Thistle',
            'description': '',
            'image_name': 'milkthistle.png',
            'coords': '1762,1462,1820,1623',
        },
        {
            'name': 'Monks Rhubarb',
            'description': '',
            'image_name': 'monksrhubarb.png',
            'coords': '1386,270,1504,510',
        },
        {
            'name': 'Mugwort',
            'description': '',
            'image_name': 'mugwort.png',
            'coords': '2494,751,2559,879',
        },
        {
            'name': 'Nipplewort',
            'description': '',
            'image_name': 'nipplewort.png',
            'coords': '853,819,1031,886',
        },
        {
            'name': 'Oak',
            'description': '',
            'image_name': 'oak.png',
            'coords': '1494,1234,1595,1397',
        },*/
        {
            'name': 'Orache',
            'description': '',
            'image_name': 'orache.png',
            'coords': '2697,70,2797,295',
        },/*
        {
            'name': 'Oregon Grape',
            'description': '',
            'image_name': 'oregongrape.png',
            'coords': '285,55,508,175',
        },
        {
            'name': 'Oxeye Daisy',
            'description': '',
            'image_name': 'oxeyedaisy.png',
            'coords': '979,934,1054,1130',
        },
        {
            'name': 'Oyster Plant',
            'description': '',
            'image_name': 'oysterplant.png',
            'coords': '2246,1493,2381,1653',
        },
        {
            'name': 'Parsley',
            'description': '',
            'image_name': 'parsley.png',
            'coords': '255,270,370,468',
        },
        {
            'name': 'Parsley-piert',
            'description': '',
            'image_name': 'parsleypiert.png',
            'coords': '823,370,911,536',
        },
        {
            'name': 'Peppermint',
            'description': '',
            'image_name': 'peppermint.png',
            'coords': '625,846,703,1139',
        },
        {
            'name': 'Petty Spurge',
            'description': '',
            'image_name': 'pettyspurge.png',
            'coords': '1404,1818,1474,1906',
        },
        {
            'name': 'Pignut',
            'description': '',
            'image_name': 'pignut.png',
            'coords': '959,38,1106,281',
        },
        {
            'name': 'Pigweed',
            'description': '',
            'image_name': 'pigweed.png',
            'coords': '2346,1711,2419,1899',
        },
        {
            'name': 'Plantain',
            'description': '',
            'image_name': 'plantain.png',
            'coords': '2078,60,2186,213',
        },*/
        {
            'name': 'Poppy',
            'description': '',
            'image_name': 'poppy.png',
            'coords': '1114,1297,1259,1415',
        },/*
        {
            'name': 'Purple Orchid',
            'description': '',
            'image_name': 'purpleorchid.png',
            'coords': '2108,1598,2203,1763',
        },
        {
            'name': 'Ramsons',
            'description': '',
            'image_name': 'ramsons.png',
            'coords': '2293,306,2419,426',
        },
        {
            'name': 'Raspberry',
            'description': '',
            'image_name': 'raspberry.png',
            'coords': '2657,559,2787,720',
        },
        {
            'name': 'Redcurrant',
            'description': '',
            'image_name': 'redcurrant.png',
            'coords': '1294,50,1437,196',
        },
        {
            'name': 'Red Dead Nettle',
            'description': '',
            'image_name': 'reddeadnettle.png',
            'coords': '448,1024,543,1137',
        },
        {
            'name': 'Redshank',
            'description': '',
            'image_name': 'redshank.png',
            'coords': '2143,519,2291,754',
        },
        {
            'name': 'Red Valerian',
            'description': '',
            'image_name': 'redvalerian.png',
            'coords': '969,321,1084,424',
        },
        {
            'name': 'Restharrow',
            'description': '',
            'image_name': 'restharrow.png',
            'coords': '367,920,428,1028',
        },
        {
            'name': 'Rosebay',
            'description': '',
            'image_name': 'rosebay.png',
            'coords': '1995,660,2101,785',
        },
        {
            'name': 'Rosehips',
            'description': '',
            'image_name': 'rosehips.png',
            'coords': '836,1856,976,1911',
        },
        {
            'name': 'Rowan',
            'description': '',
            'image_name': 'rowan.png',
            'coords': '1364,599,1565,754',
        },
        {
            'name': 'Salsify',
            'description': '',
            'image_name': 'salsify.png',
            'coords': '615,534,671,727',
        },
        {
            'name': 'Samphire',
            'description': '',
            'image_name': 'samphire.png',
            'coords': '1858,719,1958,877',
        },
        {
            'name': 'Sandleek',
            'description': '',
            'image_name': 'sandleek.png',
            'coords': '2689,1762,2807,1950',
        },
        {
            'name': 'Scots Lovage',
            'description': '',
            'image_name': 'scotslovage.png',
            'coords': '297,524,415,780',
        },*/
        {
            'name': 'Scurvygrass',
            'description': '',
            'image_name': 'scurvygrass.png',
            'coords': '1277,1784,1367,1915',
        },/*
        {
            'name': 'Sea Beet',
            'description': '',
            'image_name': 'seabeet.png',
            'coords': '19,996,105,1239',
        },
        {
            'name': 'Sea-Holly',
            'description': '',
            'image_name': 'seaholly.png',
            'coords': '643,1534,788,1667',
        },
        {
            'name': 'Sea-Kale',
            'description': '',
            'image_name': 'seakale.png',
            'coords': '2476,975,2584,1188',
        },
        {
            'name': 'Sea-Purslane',
            'description': '',
            'image_name': 'seapurslane.png',
            'coords': '2662,1256,2814,1529',
        },
        {
            'name': 'Shepherds-Purse',
            'description': '',
            'image_name': 'shepherdspurse.png',
            'coords': '1214,578,1317,765',
        },


                <area id="Sorrel" alt="Sorrel" coords="167,860,305,1136">
                <area id="Sow Thistle" alt="Sow Thistle" coords="1156,1664,1244,1897">
                <area id="Spear-Leaved Orache" alt="Spear-Leaved Orache" coords="362,1494,463,1749">
                <area id="Spear Mint" alt="Spear Mint" coords="1492,55,1627,200">
                <area id="Stinging Nettle" alt="Stinging Nettle" coords="1938,1202,2073,1478">
                <area id="Sun Spurge" alt="Sun Spurge" coords="312,1793,463,1958">
                <area id="Sweet Cicley" alt="Sweet Cicley" coords="2526,1716,2606,1924">
                <area id="Sweet Violet" alt="Sweet Violet" coords="716,1175,801,1285">
                <area id="Tansy" alt="Tansy" coords="2129,1039,2288,1160">

                <area id="Water-cress" alt="Water-cress" coords="2599,809,2772,992">
                <area id="Water Mint" alt="Water Mint" coords="1552,1720,1640,1928">
                <area id="Whitebeam" alt="Whitebeam" coords="74,1815,245,1948">
                <area id="White Mustard" alt="White Mustard" coords="2381,465,2484,698">
                <area id="Whorled Mint" alt="Whorled Mint" coords="94,98,230,321">
                <area id="Wild Cabbage" alt="Wild Cabbage" coords="1802,1708,1878,1913">
                <area id="Wild Celery" alt="Wild Celery" coords="1104,826,1224,1046">
                <area id="Wild Cherry" alt="Wild Cherry" coords="1662,991,1830,1141">
                <area id="Wild Marjoram" alt="Wild Marjoram" coords="1399,818,1492,1000">
                <area id="Wild Parsnip" alt="Wild Parsnip" href="" coords="1610,507,1695,733">
                <area id="Wild Rose" alt="Wild Rose" coords="1001,457,1324,552">
                <area id="Wild Thyme" alt="Wild Thyme" coords="520,1614,610,1727">
                <area id="Winter-cress" alt="Winter-cress" coords="1552,1427,1717,1660">
                <area id="Wood Sorrel" alt="Wood Sorrel" coords="643,1326,748,1482">
                <area id="Wormwood" alt="Wormwood" coords="122,1203,230,1549">
                <area id="Yarrow" alt="Yarrow" coords="403,222,523,415">
                <area id="Yellow Archangel" alt="Yellow Archangel" coords="440,673,588,968">  
                {
            'name': '',
            'description': '',
            'image_name': '.png',
            'coords': '',
        },*/
  ];
// Where plants will be pushed once they have been found by user:
  let basket = [
  ];

// Image base path for 'plants to find' image:
    const baseImagePath = 'assets/images/tokens/';

// Global selectedPlant values
    let selectedPlantIndex = (getRandomInt(0, plants.length -1));
    let selectedPlant = plants[selectedPlantIndex];

// Where the image will be placed in the DOM:
    let img = document.getElementById("token");

    var scoreboard = document.getElementById("score");
    var score = 0;

// Elements for Display Correct Plant Modal
    let body = document.getElementById('plant-map');
    let correctAnswerDisplay = document.getElementById('correct-answer-modal');
    let newCorrectAnswer = document.createElement('p');
    let closeButton = document.getElementById('close');

// Plantmap
    const plantmap = document.querySelector('#plantmap');





// ------------ Generate a random integer between 0 and plants.length
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// ------------ Generate a new plant Global value
function getRandomPlant(){
    selectedPlantIndex = (getRandomInt(0, plants.length));
    selectedPlant = plants[selectedPlantIndex];
    console.log(selectedPlant);
}
// ------------ Get the first random plant object
getRandomPlant();

// ------------ Get the next random plant object
function newRandomPlant(){
            getRandomPlant();
            let timeout = setTimeout(showPlantImage, 1500);
          

}

// ------------ Show an image of the current plant object
function showPlantImage() {
        img.src = baseImagePath + selectedPlant.image_name;
        
        console.log(selectedPlant.name);
}


// Call the showPlantImage Function for the first time when the window is loaded
window.onload = showPlantImage();




// ------------ Check if plant clicked by user matches the plant being displayed

    plantmap.addEventListener('click', (e) => {
        e.preventDefault();
// If it does not match, show try again modal       
            if (e.target.id !== selectedPlant.name) {
            showTryAgainModal();
// If it does match, show Correct Modal
            } else {
                showCorrectModal();
// Push the correct plant to the 'basket' array & remove it from the 'plants' array  
                basket.push(selectedPlant);
                plants.splice(selectedPlantIndex, 1);
// Add 1 point to the scoreboard            
                score ++;
                drawScore();
// Get a new random Plant                
                newRandomPlant();

                console.log(basket);
                console.log(plants);
        }
    });


// ------------ Show 'Try Again Modal' 
function showTryAgainModal() {
    (document.getElementById('try-again-modal')).style.visibility="visible";
        setTimeout(function() {
            (document.getElementById('try-again-modal')).style.visibility="hidden";
        }, 800);
    }


// ------------ Show 'Correct Plant Modal' 
// ---Clear the previous Correct user answer
function clearAnswer() {
        correctAnswerDisplay.removeChild(correctAnswerDisplay.lastElementChild);
    }

// ---Display a modal when the user clicks the correct plant
function showCorrectModal() {
        
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
         (document.getElementById('correct-answer-modal')).style.visibility="hidden";
     }, 1500,);

    }

    
// ------------ Update 'Scoreboard'
function drawScore() {
        scoreboard.textContent = (score);
}

