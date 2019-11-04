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



function clearDisplay(displayValue) {
    let displayBar = document.querySelector("#display");
    displayBar.textContent = "";
}

function showDisplay(expressionArray) {
    let displayBar = document.querySelector("#dispaly");
    displayBar.textContent = expressionArray.join(" ");
}









document.getElementById("0").addEventListener( function () {

});
document.getElementById("1").addEventListener();
document.getElementById("2").addEventListener();
document.getElementById("3").addEventListener();
document.getElementById("4").addEventListener();
document.getElementById("5").addEventListener();
document.getElementById("6").addEventListener();
document.getElementById("7").addEventListener();
document.getElementById("8").addEventListener();
document.getElementById("9").addEventListener();
document.getElementById("add").addEventListener();
document.getElementById("subtract").addEventListener();
document.getElementById("multiply").addEventListener();
document.getElementById("divide").addEventListener();
document.getElementById("equals").addEventListener();
document.getElementById("clear").addEventListener();
document.getElementById("delete").addEventListener();
document.getElementById("root").addEventListener();
document.getElementById("percent").addEventListener();
document.getElementById("decimal").addEventListener();

