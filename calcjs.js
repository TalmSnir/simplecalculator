function getHistory() {
    return document.getElementById("history-results").innerText;
}

function printHistory(num) {
    document.getElementById("history-results").innerText = getFormattedNumber(num);
}

function getResults() {
    return document.getElementById("current-results").innerText;
}

function printResults(num) {
    if (num == "") {
        document.getElementById("current-results").innerText = num;
    } else {
        document.getElementById("current-results").innerText = getFormattedNumber(num);
    }


}

function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseFormattedNumber(num) {
    return Number(num.replace(/,/g, ''));
}

function clearResults() {
    document.getElementById("backspace").onclick = function() {
        document.getElementById("current-results").innerText = "fdsf";
    }
}