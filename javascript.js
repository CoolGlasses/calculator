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

document.getElementById("equals").addEventListener("click", function () {
    let finalExpressionArray = [];
    let expression = "";

    for (let i = 0; i < expressionArray.length; i++) {
        let isOperand = (expressionArray[i] == " + " || expressionArray[i] == " - " || 
                        expressionArray[i] == " / " || expressionArray[i] == " * " );
        let isRoot = (expressionArray[i] == " sqrt( ");
        let endRoot = (expressionArray[i] == " ) ");

        if (isRoot == true) {
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
});

document.getElementById("root").addEventListener("click", function () {
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

document.getElementById("add").addEventListener("click", addButton);
document.getElementById("subtract").addEventListener("click", subtractButton);
document.getElementById("multiply").addEventListener("click", multiplyButton);
document.getElementById("divide").addEventListener("click", divideButton);

function addButton(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" + ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" + ");
        showDisplay(expressionArray);
    }
}

function subtractButton(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" - ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" - ");
        showDisplay(expressionArray);
    }
}

function multiplyButton(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" * ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" * ");
        showDisplay(expressionArray);
    }
}

function divideButton(){
    if (expressionArray.length == 0) {
        expressionArray.push("0");
        expressionArray.push(" / ");
        showDisplay(expressionArray);
    } else {
        expressionArray.push(" / ");
        showDisplay(expressionArray);
    }

}

document.getElementById("clear").addEventListener("click", function(){
   clearDisplay();
});

document.getElementById("delete").addEventListener("click", function(){
    if (expressionArray.length != 0) {
        expressionArray.pop();
        showDisplay(expressionArray);
    }
 });



// document.getElementById("percent").addEventListener("click", function(){ });
// document.getElementById("decimal").addEventListener("click", function(){ });

