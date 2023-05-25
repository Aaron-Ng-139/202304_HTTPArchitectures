/** A4_Q4_Ng_300176901.js
 *  Moves image position to mouse position on mouse clicks
 */

var image;
var move = false;

// Initialization
function start() {
    image = document.getElementById("image");
    image.addEventListener("mousedown", enableMove, false);
    image.addEventListener("mouseup", disableMove, false);
    document.addEventListener("mousemove", moveImage, false);
}

// Enables image to follow mouse
function enableMove() {
    move = true;
}

// Stops image from following mouse
function disableMove() {
    move = false;
}

// Moves image to follow mouse 
function moveImage (e) {
    if (move) {
        image.setAttribute("style",
        "left:" + (e.clientX - (image.naturalWidth / 2)) + "px;" + 
        "top:" + (e.clientY - image.naturalHeight / 2) + "px;")
    }
}

window.addEventListener("load", start, false);
