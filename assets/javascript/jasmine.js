var plants = [
    {   "name": "alexanders",
        "coords": "766,1791,731,1726,683,1741,691,1811,658,1879,701,1906,741,1899",
        "imgFile": "assets/images/gallery/galalexanders.png",
        "card": "", }
]

var cards = [];

//the map is draggable
 $( function() {
    $( "#plant-map" ).draggable();
  } );


    // When the map is clicked, the counter will increse by 1

$("#plant-map").click(function(){  
    $("#numberofplants").html(parseInt($("#numberofplants").html())+1);
});
