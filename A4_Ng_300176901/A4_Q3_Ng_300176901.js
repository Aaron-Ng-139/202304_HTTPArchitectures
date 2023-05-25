/** A4_Q2_Ng_300176901.js
 *  Responds to clicks on any element to display more details
 */

// Initialization
function start() {
    document.getElementById("body").addEventListener("click", revealDetails, false);
}

// Displays alert on click regarding event or element name if shift or ctrl key are held respectively
function revealDetails(e) {
    if (e.shiftKey) {
        alert(e.type);
    } else if (e.ctrlKey) {
        alert(e.target.id);
    }
}

window.addEventListener("load", start, false);