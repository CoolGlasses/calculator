let expressionArray = [];
let answer = 0;

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

function evaluateExpression(finalExpressionArray) { //accepts an array like this:  [456, " + ", 789, " * ", 123]
    let displayBar = document.querySelector("#display");
    let finished = false;

    while (!finished) { 
        finished = true;
        let indexOfMultiply = finalExpressionArray.indexOf(" * ");
        let indexOfDivide = finalExpressionArray.indexOf(" / ");
        let indexOfAdd = finalExpressionArray.indexOf(" + ");
        let indexOfSubtract = finalExpressionArray.indexOf(" - ");

        if (indexOfMultiply != -1) {
            answer += finalExpressionArray[indexOfMultiply - 1] * finalExpressionArray[indexOfMultiply + 1];
            finalExpressionArray.splice(indexOfMultiply - 1, 1);
            finalExpressionArray.splice(indexOfMultiply - 1, 1);
            finalExpressionArray.splice(indexOfMultiply - 1, 1);
            finalExpressionArray.splice(indexOfMultiply, 1, answer);
            finished = false;
        } else if (indexOfDivide != -1) {
            if (finalExpressionArray[indexOfDivide + 1] == 0) {
                displayBar.textContent = "ERROR";
                alert("Cannot divide by zero!");
                return displayBar.textContent = "ERROR";
            }
            answer += finalExpressionArray[indexOfDivide - 1] / finalExpressionArray[indexOfDivide + 1];
            finalExpressionArray.splice(indexOfDivide - 1, 1);
            finalExpressionArray.splice(indexOfDivide - 1, 1);
            finalExpressionArray.splice(indexOfDivide, 1, answer);
            finished = false;
        } else if (indexOfAdd != -1) {
            answer += finalExpressionArray[indexOfAdd - 1] + finalExpressionArray[indexOfAdd + 1];
            finalExpressionArray.splice(indexOfAdd - 1, 1);
            finalExpressionArray.splice(indexOfAdd - 1, 1);
            finalExpressionArray.splice(indexOfAdd, 1, answer);
            finished = false;
        } else if (indexOfSubtract != -1) {
            answer += finalExpressionArray[indexOfSubtract - 1] - finalExpressionArray[indexOfSubtract + 1];
            finalExpressionArray.splice(indexOfSubtract - 1, 1);
            finalExpressionArray.splice(indexOfSubtract - 1, 1);
            finalExpressionArray.splice(indexOfSubtract, 1, answer);
            finished = false;
        }
    }
    displayBar.textContent = answer;
    expressionArray = [];
}

document.getElementById("equals").addEventListener("click", function () {
    let finalExpressionArray = [];
    let expression = "";

    for (let i = 0; i < expressionArray.length; i++) {
        let isOperand = (expressionArray[i] == " + " || expressionArray[i] == " - " || expressionArray[i] == " / " || expressionArray[i] == " * ");
        if (isOperand == true && expression != "") {
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
});



document.getElementById("0").addEventListener("click", function(){
    expressionArray.push("0");
    showDisplay(expressionArray);
});


document.getElementById("1").addEventListener("click", function(){
    expressionArray.push("1");
    showDisplay(expressionArray);
});

document.getElementById("2").addEventListener("click", function(){
    expressionArray.push("2");
    showDisplay(expressionArray);
});

document.getElementById("3").addEventListener("click", function(){
    expressionArray.push("3");
    showDisplay(expressionArray);
});

document.getElementById("4").addEventListener("click", function(){
    expressionArray.push("4");
    showDisplay(expressionArray);
});

document.getElementById("5").addEventListener("click", function(){
    expressionArray.push("5");
    showDisplay(expressionArray);
});

document.getElementById("6").addEventListener("click", function(){
    expressionArray.push("6");
    showDisplay(expressionArray);
});

document.getElementById("7").addEventListener("click", function(){
    expressionArray.push("7");
    showDisplay(expressionArray);
});

document.getElementById("8").addEventListener("click", function(){
    expressionArray.push("8");
    showDisplay(expressionArray);
});

document.getElementById("9").addEventListener("click", function(){
    expressionArray.push("9");
    showDisplay(expressionArray);
});

document.getElementById("add").addEventListener("click", function(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" + ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" + ");
        showDisplay(expressionArray);
    }
});

document.getElementById("subtract").addEventListener("click", function(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" - ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" - ");
        showDisplay(expressionArray);
    }
});

document.getElementById("multiply").addEventListener("click", function(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" * ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" * ");
        showDisplay(expressionArray);
    }
});

document.getElementById("divide").addEventListener("click", function(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" / ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" / ");
        showDisplay(expressionArray);
    }
});

document.getElementById("clear").addEventListener("click", function(){
   clearDisplay();
});

document.getElementById("delete").addEventListener("click", function(){
    if (expressionArray.length != 0) {
        expressionArray.pop();
        showDisplay(expressionArray);
    }
 });

 
// document.getElementById("root").addEventListener("click", function(){ });
// document.getElementById("percent").addEventListener("click", function(){ });
// document.getElementById("decimal").addEventListener("click", function(){ });

