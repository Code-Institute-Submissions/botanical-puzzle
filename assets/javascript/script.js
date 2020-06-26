
// Make the plant map draggable
  $( function() {
    $( "#plant-map" ).draggable();
  } );

  let plants = [
        {
            'name': 'Alexanders',
            'description': 'Found in hedgebanks and waste places near the sea. Edible stems, leaves and flower buds. Flowers April-June.',
            'image_name': 'alexanders.jpg',
            'boundary': '776,1926,655,1726',
        },
        {
            'name': 'Apple Mint',
            'description': 'Apple-scented mint which is tasty in cold drinks.',
            'image_name': 'whorledmint.jpg',
            'boundary': '94,98,230,321',
      },
      {
            'name': 'Aurum Lilly',
            'description': 'Found in shady places. Arrow-shaped glossy leaves, with shiny orange berries in late summer. Poisonous. If the root is baked until dry, it is harmless and can be used like arrowroot.',
            'image_name': 'aurumlilly.jpg',
            'boundary': '1071,609,1166,759',
      },
      {
            'name': 'Whorled Mint',
            'description': 'Found in damp places. A cross between water mint and corn mint. Edible.',
            'image_name': 'whorledmint.jpg',
            'boundary': '94,98,230,321',
      },

  ]