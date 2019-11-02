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

function addButtonValueToDisplay(buttonValue) {
    let displayBar = document.querySelector("#display");
    displayBar.textContent += buttonValue;
}


//Needs to take the textContent of the display div and turn it into an Array, then find the operands and seperate the numeric values between them, combining multi digit 
//numbers ex. 5 4 * 3 7 should be 54 * 37, assign those numbers to variables and call the appropriate function to determine the result
//must also perform the math in the correct order of operations
function findResultOfDisplay(displayValue) {
    let displayArray = [];
    let displayString = displayValue;

    displayArray = displayValue.split("");

    for (let i = 0; i < displayArray.length; i++) {

    }
}

function clearDisplay(displayValue) {
    let displayBar = document.querySelector("#display");
    displayBar.textContent = "";
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

