document.addEventListener("DOMContentLoaded", () => {
    const clearButton = document.getElementById("clearDisplay");
    const signButton = document.getElementById("toggleSign");
    const percentButton = document.getElementById("percent");
    const divideButton = document.getElementById("divide");
    const multiplyButton = document.getElementById("multiply");
    const additionButton = document.getElementById("add");
    const subtractButton = document.getElementById("subtract");
    const squarerootButton = document.getElementById("squareRoot");
    const decimalButton = document.getElementById("decimal");
    const equalsButton = document.getElementById("equals");
    const numberButtons = document.querySelectorAll(".number"); // Select all buttons with class 'number'


    // Adding event listeners
    clearButton.addEventListener("click", clearDisplay);
    signButton.addEventListener("click", toggleSign);
    percentButton.addEventListener("click", percent);
    divideButton.addEventListener("click", () => appendOperator('/'));
    multiplyButton.addEventListener("click", () => appendOperator('*'));
    additionButton.addEventListener("click", () => appendOperator('+'));
    subtractButton.addEventListener("click", () => appendOperator('-'));
    squarerootButton.addEventListener("click", calculateSquareRoot);
    decimalButton.addEventListener("click", appendDecimal);
    equalsButton.addEventListener("click", calculateResult);

    numberButtons.forEach(button => {
        button.addEventListener("click", () => appendNumber(button.textContent));
    });

});

// Example function implementations
function clearDisplay() {
    console.log("Clear display");
}

function toggleSign() {
    console.log("Toggle sign");
}

function percent() {
    console.log("Percent");
}

function appendOperator(operator) {
    console.log("Operator:", operator);
}

function calculateSquareRoot() {
    console.log("Square root");
}

function appendDecimal() {
    console.log("Append decimal");
}

function calculateResult() {
    console.log("Calculate result");
}

function appendNumber(number) {
    console.log("Number clicked:", number);
}