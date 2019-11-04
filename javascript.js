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
    let finalExpressionArray = [];
    let expression = "";

    for (let i = 0; i < expressionArray.length; i++){
        let isOperand = (expressionArray[i] == "+" || expressionArray[i] == "-" || expressionArray[i] == "/" || expressionArray[i] == "*");
        if (isOperand == true && expression != "") {
            finalExpressionArray.push(expression);
            finalExpressionArray.push(expressionArray[i]);
            expression = "";
        } else if (i == expressionArray.length - 1) {
            finalExpressionArray.push(expression);
        } else {
            expression += expressionArray[i];
        }
    }
    
    displayBar.textContent = finalExpressionArray.join(" ");
}




document.getElementById("0").addEventListener( function () {
    expressionArray.push("0");
    showDisplay(expressionArray);
});


document.getElementById("1").addEventListener(function () {
    expressionArray.push("1");
    showDisplay(expressionArray);
});

document.getElementById("2").addEventListener(function () {
    expressionArray.push("2");
    showDisplay(expressionArray);
});

document.getElementById("3").addEventListener(function () {
    expressionArray.push("3");
    showDisplay(expressionArray);
});

document.getElementById("4").addEventListener(function () {
    expressionArray.push("4");
    showDisplay(expressionArray);
});

document.getElementById("5").addEventListener(function () {
    expressionArray.push("5");
    showDisplay(expressionArray);
});

document.getElementById("6").addEventListener(function () {
    expressionArray.push("6");
    showDisplay(expressionArray);
});

document.getElementById("7").addEventListener(function () {
    expressionArray.push("7");
    showDisplay(expressionArray);
});

document.getElementById("8").addEventListener( function () {
    expressionArray.push("8");
    showDisplay(expressionArray);
});

document.getElementById("9").addEventListener(function () {
    expressionArray.push("9");
    showDisplay(expressionArray);
});




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

