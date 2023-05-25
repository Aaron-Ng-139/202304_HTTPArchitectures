/* A3_Q6_Ng_300176901.js
Pig Latin Translator */

var textInput;
var btnTranslate;
var textareaPhrases;

// Initialization
function start() {
    textInput = document.getElementById("textInput");
    btnTranslate = document.getElementById("btnTranslate");
    btnTranslate.addEventListener("click", translate, false);
    textareaPhrases = document.getElementById("textareaPhrases");
}

// Grab text from text field, split into tokens
function translate() {
    if (textInput.value == ""){

    } else {
        var lstWords = textInput.value.split(" ");
        for (var i = 0; i < lstWords.length; i++) {
            printLatinWord(lstWords[i]);
        }
        textareaPhrases.innerHTML += "\n";
        textInput.value = "";
    }
}

// Translate to pig latin, output result into textarea
function printLatinWord(word) {
    var pigLatinWord = word.substring(1) + word.substring(0, 1) + "ay";
    textareaPhrases.innerHTML += pigLatinWord + " ";
}

window.addEventListener("load", start, false);