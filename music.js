// Sounds

 // ---------------------- Atmos Sounds
function soundOfTheForestPlay(){
    const music = document.querySelector('#summer-forest');
    music.loop = true;
    music.play()
}

const buttonOff = document.querySelector('#sound-off');

buttonOff.onclick = soundOfTheForestPause();

function soundOfTheForestPause(){
    music.pause();
}


