/* A4_Q1_Ng_300176901.js
15-Puzzle */

var divGrid;
var tdCells;
var btnReset;
var btnForceNearWin;
var gridValues;
var gridEnabled = true;

// Initialization
function start() {
    divGrid = document.getElementById("divGrid");
    btnReset = document.getElementById("resetButton");
    btnReset.addEventListener("click", resetBoard, false);
    btnForceNearWin = document.getElementById("forceNearWin")
    btnForceNearWin.addEventListener("click", forceNearWin, false);
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
    if (gridEnabled) {
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
}

// Swaps values of two given cells
function swapCells(cell1, cell2){
    var tempVal = tdCells[cell1].innerHTML;
    tdCells[cell1].innerHTML = tdCells[cell2].innerHTML;
    tdCells[cell2].innerHTML = tempVal;
    checkWinCondition()
}

// Checks if cells are ordered, satisfying the win condition
function checkWinCondition() {
    var prevCellValue = -1;
    var allOrdered = true;
    for (var i = 0; i < tdCells.length; i++) {
        currCellValue = parseInt(tdCells[i].innerHTML)
        // console.log("curr: " + currCellValue + ", prev:" + prevCellValue);
        if (currCellValue == "") { // Skip blank cell
            continue;
        } else if (currCellValue <= prevCellValue) {
            allOrdered = false;
            break;
        }
        prevCellValue = currCellValue;
    }
    if (allOrdered) {
        gridEnabled = false;
        alert("Congrats you won!");
        btnReset.removeAttribute("hidden");
    }
}

// Scrambles the values on the board
function resetBoard() {
    gridValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffleArray(gridValues);
    for (var i = 0; i < tdCells.length; i++) {
        if (gridValues[i] == 0) {
            tdCells[i].innerHTML = "";
        } else {
            tdCells[i].innerHTML = gridValues[i]
        }
    }
    btnReset.setAttribute("hidden", "hidden");
    gridEnabled = true;
}

// Sets board values to situation 1 move away from win condition
function forceNearWin() {
    tdCells[0].innerHTML = "";
    tdCells[1].innerHTML = 2;
    tdCells[2].innerHTML = 3;
    tdCells[3].innerHTML = 4;
    tdCells[4].innerHTML = 1;
    for (var i = 5; i < tdCells.length; i++) {
        tdCells[i].innerHTML = i;
    }
}

window.addEventListener("load", start, false);

