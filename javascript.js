let expressionArray = [];


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 < 0) {
        return "Can't divide by Zero!"
    } else {
    return num1 / num2;
    }
}

function percent(num) {
    return num / 100;
}

function sqrRoot(num) {
    if (num < 0) {
        return "Irrational Number!"
    } else {
        return Math.sqrt(num);
    }
}

function operate(operator, num1, num2) {
    if (operator == "+"){
        add(num1, num2);
    } else if (operator == "-") {
        subtract(num1, num2);
    } else if (operator == "*") {
        multiply(num1, num2);
    } else if (operator == "/") {
        divide(num1, num2);
    } else if (operator == "root") {
        sqrRoot(num1);
    } else if (operator == "percent") {
        percent(num1);
    }
}

function clearDisplay() {
    let displayBar = document.querySelector("#display");
    displayBar.textContent = "";
    expressionArray = [];
}

function showDisplay(expressionArray) {
    let displayBar = document.querySelector("#display");
    displayBar.textContent = expressionArray.join("");
}

function evaluateExpression(finalExpressionArray) { 
    //accepts an array like this:  [456, " + ", 789, " * ", 123]
    //accepts sqrt like this: [ 1, " + ", "sqrt( ", 5, " )"] or [" sqrt( ", 4, " ) ", " + ", 2]
 
    let displayBar = document.querySelector("#display");
    let finished = false;
    let answer = 0;

    while (!finished) { 
        finished = true;
        let indexOfMultiply = finalExpressionArray.indexOf(" * ");
        let indexOfDivide = finalExpressionArray.indexOf(" / ");
        let indexOfAdd = finalExpressionArray.indexOf(" + ");
        let indexOfSubtract = finalExpressionArray.indexOf(" - ");
        let indexOfRoot = finalExpressionArray.indexOf(" sqrt( ");

        if (indexOfRoot != -1) {
            answer = Math.sqrt(finalExpressionArray[indexOfRoot + 1]);
            answer = +answer.toFixed(5);
            finalExpressionArray.splice(indexOfRoot, 1);
            finalExpressionArray.splice(indexOfRoot, 1);
            finalExpressionArray.splice(indexOfRoot, 1);
            finalExpressionArray.splice(indexOfRoot, 0, answer);
            finished = false;
        } else if (indexOfMultiply != -1) {
            answer = finalExpressionArray[indexOfMultiply - 1] * finalExpressionArray[indexOfMultiply + 1];
            finalExpressionArray = spliceSaver(finalExpressionArray, indexOfMultiply, answer);
            finished = false;
        } else if (indexOfDivide != -1) {
            if (finalExpressionArray[indexOfDivide + 1] == 0) {
                displayBar.textContent = "ERROR";
                alert("Cannot divide by zero!");
                return displayBar.textContent = "ERROR";
            }
            answer = finalExpressionArray[indexOfDivide - 1] / finalExpressionArray[indexOfDivide + 1];
            finalExpressionArray = spliceSaver(finalExpressionArray, indexOfDivide, answer);
            finished = false;
        } else if (indexOfAdd != -1) {
            answer = finalExpressionArray[indexOfAdd - 1] + finalExpressionArray[indexOfAdd + 1];
            finalExpressionArray = spliceSaver(finalExpressionArray, indexOfAdd, answer);
            finished = false;
        } else if (indexOfSubtract != -1) {
            answer = finalExpressionArray[indexOfSubtract - 1] - finalExpressionArray[indexOfSubtract + 1];
            finalExpressionArray = spliceSaver(finalExpressionArray, indexOfSubtract, answer);
            finished = false;
        }
    }
    displayBar.textContent = answer;
    expressionArray = [];
}

function spliceSaver(arrayToSplice, indexToSpliceFrom, answerToInsert){
    arrayToSplice.splice(indexToSpliceFrom - 1, 1);
    arrayToSplice.splice(indexToSpliceFrom - 1, 1);
    arrayToSplice.splice(indexToSpliceFrom - 1, 1);
    arrayToSplice.splice(indexToSpliceFrom - 1, 0, answerToInsert);
    return arrayToSplice;
}


function equalsButton(){
    let finalExpressionArray = [];
    let expression = "";

    for (let i = 0; i < expressionArray.length; i++) {
        let isOperand = (expressionArray[i] == " + " || expressionArray[i] == " - " ||
            expressionArray[i] == " / " || expressionArray[i] == " * ");
        let isRoot = (expressionArray[i] == " sqrt( ");
        let endRoot = (expressionArray[i] == " ) ");
        let isPercent = (expressionArray[i] == "% ");

        if (isPercent == true) {
            finalExpressionArray.push(parseInt(expression, 10));
            let lastElement = finalExpressionArray.pop();
            finalExpressionArray.push(lastElement / 100);
            expression = "";
        } else if (isRoot == true) {
            finalExpressionArray.push(expressionArray[i]);
        } else if (endRoot == true) {
            finalExpressionArray.push(parseInt(expression, 10));
            finalExpressionArray.push(expressionArray[i]);
            expression = "";
        } else if (isOperand == true && expression == "") {
            finalExpressionArray.push(expressionArray[i]);
        } else if (isOperand == true && expression != "") {
            finalExpressionArray.push(parseInt(expression, 10));
            finalExpressionArray.push(expressionArray[i]);
            expression = "";
        } else if (i == expressionArray.length - 1) {
            expression += expressionArray[i];
            finalExpressionArray.push(parseInt(expression, 10));
        } else {
            expression += expressionArray[i];
        }
    }

    evaluateExpression(finalExpressionArray);
}

function rootButton(){
    let isOperand = (expressionArray[expressionArray.length - 1] == " + " || expressionArray[expressionArray.length - 1] == " - "
        || expressionArray[expressionArray.length - 1] == " / " || expressionArray[expressionArray.length - 1] == " * ");

    if (expressionArray.length == 0) {
        expressionArray.push(" sqrt( ");
        expressionArray.push("0 ");
        expressionArray.push(" ) ");
        showDisplay(expressionArray);
    } else if (expressionArray.length == 1) {
        expressionArray.splice(0, 0, " sqrt( ");
        expressionArray.push(" ) ");
        showDisplay(expressionArray);
    } else if (expressionArray.length == 2 && isOperand == true) {
        alert("Please select a number prior to pressing the Root button!")
    } else if (expressionArray.length >= 3) {
        expressionArray.splice(expressionArray.length - 1, 0, " sqrt( ");
        expressionArray.push(" ) ");
        showDisplay(expressionArray);
    } else {
        expressionArray.splice(expressionArray.length - 2, 0, " sqrt( ");
        expressionArray.push(" ) ");
        showDisplay(expressionArray);
    }
}

function percentButton(){
    expressionArray.push("% ");
    showDisplay(expressionArray);
}

function addButton() {
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" + ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" + ");
        showDisplay(expressionArray);
    }
}

function subtractButton() {
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" - ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" - ");
        showDisplay(expressionArray);
    }
}

function multiplyButton() {
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" * ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" * ");
        showDisplay(expressionArray);
    }
}

function divideButton() {
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" / ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" / ");
        showDisplay(expressionArray);
    }

}

function zeroButton(){
    expressionArray.push("0");
    showDisplay(expressionArray);
}


function oneButton(){
    expressionArray.push("1");
    showDisplay(expressionArray);
}

function twoButton(){
    expressionArray.push("2");
    showDisplay(expressionArray);
}

function threeButton(){
    expressionArray.push("3");
    showDisplay(expressionArray);
}

function fourButton(){
    expressionArray.push("4");
    showDisplay(expressionArray);
}
function fiveButton(){
    expressionArray.push("5");
    showDisplay(expressionArray);
}

function sixButton(){
    expressionArray.push("6");
    showDisplay(expressionArray);
}

function sevenButton(){
    expressionArray.push("7");
    showDisplay(expressionArray);
}

function eightButton(){
    expressionArray.push("8");
    showDisplay(expressionArray);
}

function nineButton(){
    expressionArray.push("9");
    showDisplay(expressionArray);
}

function deleteButton() {
    if (expressionArray.length != 0) {
        expressionArray.pop();
        showDisplay(expressionArray);
    }
}

function keyboardReaction(e){
    let press = e.which || e.keycode;

    if (press == 48 || press == 96) {
        zeroButton();
    } else if (press == 49 || press == 97) {
        oneButton();
    } else if (press == 50 || press == 98) {
        twoButton();
    } else if (press == 51 || press == 99) {
        threeButton();
    } else if (press == 52 || press == 100) {
        fourButton();
    } else if (press == 53 || press == 101) {
        fiveButton();
    } else if (press == 54 || press == 102) {
        sixButton();
    } else if (press == 55 || press == 103) {
        sevenButton();
    } else if (press == 56 || press == 104) {
        eightButton();
    } else if (press == 57 || press == 105) {
        nineButton();
    } else if (press == 173 || press == 109) {
        subtractButton();
    } else if (press == 107) {
        addButton();
    } else if (press == 111) {
        divideButton();
    } else if (press == 106) {
        multiplyButton();
    } else if (press == 13) {
        equalsButton();
    } else if (press == 8) {
        deleteButton();
    } else if (press == 67) {
        clearDisplay();
    }
}

document.getElementById("0").addEventListener("click", zeroButton);
document.getElementById("1").addEventListener("click", oneButton);
document.getElementById("2").addEventListener("click", twoButton);
document.getElementById("3").addEventListener("click", threeButton);
document.getElementById("4").addEventListener("click", fourButton);
document.getElementById("5").addEventListener("click", fiveButton);
document.getElementById("6").addEventListener("click", sixButton);
document.getElementById("7").addEventListener("click", sevenButton);
document.getElementById("8").addEventListener("click", eightButton);
document.getElementById("9").addEventListener("click", nineButton);
document.getElementById("add").addEventListener("click", addButton);
document.getElementById("subtract").addEventListener("click", subtractButton);
document.getElementById("multiply").addEventListener("click", multiplyButton);
document.getElementById("divide").addEventListener("click", divideButton);
document.getElementById("root").addEventListener("click", rootButton);
document.getElementById("percentage").addEventListener("click", percentButton);
document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("delete").addEventListener("click", deleteButton);
document.getElementById("equals").addEventListener("click", equalsButton);

window.addEventListener("keydown", keyboardReaction);





// document.getElementById("decimal").addEventListener("click", function(){ });

