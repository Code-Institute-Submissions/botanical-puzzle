
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
            'name': 'Balm',
            'description': 'Found near hedges in shady places. Yellow-green pointed leaves, white/yellow flowers July-September. Lemon-scented leaves add lemon flaour to food, make a refreshing tea, and can be added to salads.',
            'image_name': 'balm.jpg',
            'boundary': '260,1260,440,1438',
      },
      {
            'name': 'Bath Asparagus',
            'description': 'Found around Bath and Wiltshire. Greyish leaves and pale yellow and green flower spikes from May-July. The unopened flower spikes can be cooked and eaten like asparagus. Belongs to the lily family and is also called Spiked Star-of-Bethlehem.',
            'image_name': 'bathasparagus.jpg',
            'boundary': '951,1802,823,1539',
      },
      {
            'name': 'Beech',
            'description': 'A tree which particularly likes chalky soil. Smooth grey bark and bright green leaves. Nuts from September-October. The nuts can be eaten or used to make beechnut oil and butter; the young leaves can be used to make liquor or eaten in salads; and the wood can be used for fuel and making furniture.',
            'image_name': 'beech.jpg',
            'boundary': '2078,243,2253,331',
      },
      {
            'name': 'Whorled Mint',
            'description': 'Found in damp places. A cross between water mint and corn mint. Edible.',
            'image_name': 'whorledmint.jpg',
            'boundary': '94,98,230,321',
      },

  ]