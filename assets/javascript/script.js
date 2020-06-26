
// Make the plant map draggable
  $( function() {
    $( "#plant-map" ).draggable();
  } );

  // When the map is clicked, the counter will increse by 1
$(function(){
  var numberofplants=0;
$( "#plant-map" ).click(function(){
    numberofplants++;    
    $("#numberOfPlants").text(numberofplants);
});
})
