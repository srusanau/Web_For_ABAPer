document.getElementById('DelCont').onclick = function() { del_cont() };
document.getElementById("GoToGoogle").addEventListener("click", goto_google);
document.getElementById('AskUsername').onclick = function() { ask_username() }

function goto_google() {
    window.open("https://www.google.com/");
}

function del_cont() {
    document.getElementById('DelCont').innerHTML = ""
}

function ask_username() {

    var user_name = prompt("Enter username", '');

    if (!isNaN(user_name)) {
        alert(reverseString(user_name));
    } else {
        alert(translateString(user_name));
    }
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

function translateString(str) {
    var splitString = str.split("");
    for (i = 0; i < str.length; i++) {
        if (splitString[i].toUpperCase() == splitString[i]) {
            splitString[i] = splitString[i].toLowerCase();;
        } else {
            splitString[i] = splitString[i].toUpperCase();
        }
    }

    var joinArray = splitString.join("");
    return joinArray;
}