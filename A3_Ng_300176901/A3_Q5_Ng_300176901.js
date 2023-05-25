/* A3_Q5_Ng_300176901.js
The Tortoise and the Hare Race */

var posTortoise = 0;
var posHare = 0;
var btnStart;
var divEventLog;
var divRacecourse;
var loopingTimer;

// Initialization
function start() {
    // console.log("started");
    btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", startRace, false);
    divEventLog = document.getElementById("divEventLog");
    divRacecourse = document.getElementById("divRacecourse");
}

// Begining Race
function startRace() {
    btnStart.disabled = true;
    btnStart.value = "Race in Progress";
    divEventLog.innerHTML = "ON YOUR MARK";
    setTimeout(function() {divEventLog.innerHTML += "<br>GET SET"}, 1000);
    setTimeout(function() {divEventLog.innerHTML += "<br>BANG!!! AND THEY'RE OFF!!!"}, 2000);
    setTimeout(function() {loopingTimer = setInterval(updatePositions, 1000)}, 1000)
}

// Update position of Tortoise and Hare
function updatePositions() {
    var tortoiseRoll = Math.floor( (Math.random() * 10) + 1 );
    if (tortoiseRoll <= 5) {
        posTortoise += 3; // Fast plod
    } else if (tortoiseRoll <= 7) {
        posTortoise -= 6; // Slip
    } else {
        posTortoise += 1; // Slow plod
    }

    var hareRoll = Math.floor( (Math.random() * 10) + 1 );
    if (hareRoll >= 9) {
        posHare -= 2; // Small slip
    } else if (hareRoll >= 6) {
        posHare += 1; // Small hop
    } else if (hareRoll >= 5) {
        posHare -= 12; // Big slip
    } else if (hareRoll >= 3) {
        posHare += 9; // Big hop
    } // Do nothing on hare sleep

    // If either animal has negative position, reset to zero
    if (posTortoise < 0) {
        posTortoise = 0;
    }
    if (posHare < 0) {
        posHare = 0;
    }

    // Draw positions of Tortoise and Hare on the Racecourse
    var racecourse = "<table><tbody><tr>";
    for (var i = 0; i < 70; i++) {
        if (i == posTortoise && i == posHare) {
            racecourse += "<td>OUCH!!!</td>";
        } else if (i == posTortoise) {
            racecourse += "<td>T</td>";
        } else if (i == posHare) {
            racecourse += "<td>H</td>";
        } else {
            racecourse += "<td>_</td>"
        }
    }
    racecourse += "</tr></tbody></table>";
    divRacecourse.innerHTML = racecourse;

    // Check for win condition, determine winner and end the race
    if (posTortoise >= 70 || posHare >= 70) {
        if (posTortoise >= 70 && posHare >= 70) {
            divEventLog.innerHTML += "<br>IT'S A TIE.";
        } else if (posTortoise >= 70) {
            divEventLog.innerHTML += "<br>TORTOISE WINS!!! YAY!!!";
        } else {
            divEventLog.innerHTML += "<br>HARE WINS. YUCK!";
        }
        btnStart.disabled = false;
        btnStart.value = "Restart Race";
        clearInterval(loopingTimer);
        posHare = 0;
        posTortoise = 0;
    }
}

window.addEventListener("load", start, false);