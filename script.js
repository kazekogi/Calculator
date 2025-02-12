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
    const display = document.getElementById("display"); // display screen


    // Adding event listeners
    clearButton.addEventListener("click", clearDisplay); // clear display button
    signButton.addEventListener("click", toggleSign); // toggle sign button
    percentButton.addEventListener("click", percent); // percent button
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

const MAX_DISPLAY_LENGTH = 10; // MAXIMUM ALLOWED LENGTH ON DISPLAY
const display = document.getElementById("display"); // display screen

function toggleSign(event) { // function to toggle the sign of the number on display
    let currentValue = display.textContent;

    if (currentValue === '0' || currentValue === '') {
        return; // do nothing if display is 0 or empty
    }

    if (currentValue.charAt(0) === '-') { // if leading character is a negative sign
        display.textContent = currentValue.slice(1); // remove the negative sign
    } else { // else if leading character is not a negative sign
        display.textContent = '-' + currentValue; // add a negative sign
    }
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

function appendNumber(number) { // function to append numbers to the display
    

    if (display.textContent.length < MAX_DISPLAY_LENGTH) { // ensure display length is within limit
        if (display.textContent === "0") {
            display.textContent = number; // replace 0 with the number clicked
        } else {
            display.textContent += number; // append the number clicked
        }
    }
    
}

function clearDisplay() { // function to clear the display screen
    display.textContent = "0"; // reset display to 0
}