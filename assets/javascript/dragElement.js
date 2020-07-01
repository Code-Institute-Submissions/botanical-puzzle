//Adapted from https://www.w3schools.com/howto/howto_js_draggable.asp

dragElement(document.querySelector('#plant-map'));

function dragElement(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  (document.querySelector("#plant-map-image")); {
    element.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Touch event handler for mobile devices
/*
var el = document.querySelector("#plant-map-image"); 

  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchleave", handleEnd, false);
  el.addEventListener("touchmove", handleMove, false);


  function handleStart(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  (document.querySelector("#plant-map-image")); {
    element.touchstart= dragMouseDown;
  }

  function handleMove(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.touchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.touchmove = elementDrag;
      // Handle the start of the touch
  }
function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function handleEnd() {
    // stop moving when mouse button is released:
    document.touchend = null;
    document.touchmove = null;
  }
}*/

