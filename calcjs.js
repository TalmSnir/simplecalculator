function getHistory() {
    return document.getElementById("history-results").innerText;
}

function printHistory(num) {
    document.getElementById("history-results").innerText = getFormattedNumber(num);
}

function getOutput() {
    return document.getElementById("current-results").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("current-results").innerText = num;
    } else {
        document.getElementById("current-results").innerText = getFormattedNumber(num);
    }


}

function getFormattedNumber(num) {
    if (num == "-") {
        return ("");
    }
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
var operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");

        } else if (this.id == "backspace") {
            var output = reverseFormattedNumber(getOutput()).toString();
            if (output) {
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }

        } else {
            var output = getOutput();
            var history = getHistory();
            if (output != "") {
                output = reverseFormattedNumber(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })

}

var number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        var output = reverseFormattedNumber(getOutput());
        if (output != NaN) {
            output = output + this.id;
            printOutput(output);
        }
    })
}