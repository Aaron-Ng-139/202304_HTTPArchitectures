/* A3_Q4_Ng_300176901.js
Sieve of Eratosthenes */

var primesTable;

function start() {
    primesTable = document.getElementById("primesTable");
    findPrimes();
}

function findPrimes() {
    // Initialize 1000 length array with all values at 1 (true)
    var lstNum = new Array(1000);
    for (var i = 0; i < lstNum.length; i++) {
        lstNum[i] = 1;
    }
    // Set first two elements to 0 (false)
    lstNum[0] = 0;
    lstNum[1] = 0;

    /* Iterate through array, every time a number with value of 1 is found,
    set all subsequent multiples of that number to 0*/
    for (var i = 2; i < lstNum.length; i++) {
        if (lstNum[i] == 1) {
            for (var j = i * 2; j < lstNum.length; j += i) {
                lstNum[j] = 0;
            }
        }
    }
    
    // Output indices with value 1 to table
    var tableHTML = "<tbody><tr>";
    var MAXCOLUMNS = 15;
    var countColumns = 0;
    for (var i = 0; i < lstNum.length; i++) {
        if (lstNum[i] == 1) {
            if (countColumns >= MAXCOLUMNS) {
                tableHTML += "</tr><tr>";
                countColumns = 0;
            }
            tableHTML += "<td> " + i + "</td>";
            countColumns++;
        }
    }
    tableHTML += "</tr></tbody>";
    primesTable.innerHTML = tableHTML;
}

window.addEventListener("load", start, false);