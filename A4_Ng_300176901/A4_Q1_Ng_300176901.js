/* A4_Q1_Ng_300176901.js
15-Puzzle */

var divGrid;
var tdCells;
var gridValues;

// Initialization
function start() {
    divGrid = document.getElementById("divGrid");
    gridValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffleArray(gridValues);
    console.log("Randomized values: " + gridValues);
    divGrid.innerHTML = drawGrid(gridValues);
    addMouseListenersToCells()
}

// Shuffles array based on Fisher-Yates algorithm
function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Converts array into 4x4 HTML table, zero used as blank
function drawGrid(arr) {
    var table = "<table><tbody>";
    for (var i = 0; i < 4; i++) {
        table += "<tr>";
        for (var j = 0; j < 4; j++){
            var index = (4 * i) + j;
            if (arr[index] == 0) {
                table += "<td id='" + index + "'></td>";
            } else {
                table += "<td id='" + index + "'>" + arr[index] + "</td>";
            }
        }
        table += "</tr>";
    }
    table += "</tbody></table>";
    return table;
}

// Adds onClick event listeners to each cell
function addMouseListenersToCells() {
    tdCells = new Array(16);
    for (var i = 0; i < 16; i++) {
        tdCells[i] = document.getElementById(i);
        tdCells[i].addEventListener("click", moveSelectedCell, false);
    }
}

// Attempts to move selected cell to adjacent empty cell; alerts user of illegal move
function moveSelectedCell() {
    if (this.innerHTML != "") { // Blank cell check
        // Find adjacent blank cell and swap their contents
        var cellNum = parseInt(this.id);
        if ((cellNum - 4)  >= 0 && (tdCells[cellNum - 4]).innerHTML == ""){ // Check for blank above
            console.log("Swapping cell " + this.id + " with cell " + (cellNum - 4));
            swapCells(cellNum, cellNum - 4);
        } else if ((cellNum + 4)  < 16  && (tdCells[cellNum + 4]).innerHTML == ""){ // Check for blank below
            console.log("Swapping cell " + this.id + " with cell " + (cellNum + 4));
            swapCells(cellNum, cellNum + 4);
        } else if ((cellNum % 4)  != 0  && cellNum != 0 && (tdCells[cellNum - 1]).innerHTML == ""){ // Check for blank to the left
            console.log("Swapping cell " + this.id + " with cell " + (cellNum - 1));
            swapCells(cellNum, cellNum - 1);
        } else if (((cellNum + 1) % 4)  != 0  && cellNum != 15 && (tdCells[cellNum + 1]).innerHTML == ""){ // Check for blank to the right
            console.log("Swapping cell " + this.id + " with cell " + (cellNum + 1));
            swapCells(cellNum, cellNum + 1);
        } else {
            alert("No adjacent blank square to move to.");
            console.log("Clicked square with no adjacent blank square.");
        }
    } else {
        alert("Cannot move the blank square.");
        console.log("Clicked blank square.");
    }
}

// Swaps values of two given cells
function swapCells(cell1, cell2){
    var tempVal = tdCells[cell1].innerHTML;
    tdCells[cell1].innerHTML = tdCells[cell2].innerHTML;
    tdCells[cell2].innerHTML = tempVal;
}

window.addEventListener("load", start, false);

