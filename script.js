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

function percent() { // function to calculate percentage
    let currentValue = display.textContent;
    let number = parseFloat(currentValue); // convert string to number

    if (currentValue === '0' || currentValue === '') {
        return; // do nothing if display is 0 or empty
    }   

    let result = number / 100; // calculate percentage
    let resultString = result.toString(); // convert result to string

    if (resultString.length > MAX_DISPLAY_LENGTH) { // if result exceeds max length
        resultString = resultString.slice(0, MAX_DISPLAY_LENGTH); // truncate to max length
    }
    display.textContent = resultString; // update display with result  
}

function appendOperator(operator) {
    console.log("Operator:", operator);
}

function squareRoot(number) { // helper function to calculate square root
    let start = 0, end = number, mid, ans;

    while (start <= end) {
        // Find mid
        mid = Math.floor((start + end) / 2);
        // If number is perfect square then break
        if (mid * mid == number) {
            ans = mid;
            break;
        }
        // Increment start if integral part lies on right side of the mid
        if (mid * mid < number) {
            // First start value should be added to answer
            ans = start;
            // Then start should be changed
            start = mid + 1;
        }
        // Decrement end if integral part lies on the left side of the mid
        else {
            end = mid - 1;
        }
    }
    // To find the fractional part of square root upto 6 decimal
    let increment = 0.1;

    for (let i = 0; i < 6; i++) {
        while (ans * ans <= number) {
            ans += increment;
        }
        // Loop terminates, when ans * ans > number
        ans = ans - increment;
        increment = increment / 10;
    }
    return ans;
}

function calculateSquareRoot() { // function to calculate square root
    let currentValue = display.textContent;
    let number = parseFloat(currentValue); // convert string to number

    if (currentValue === '0' || currentValue === '') {
        return; // do nothing if display is 0 or empty
    }

    let result = squareRoot(number); // calculate square root
    let resultString = result.toString(); // convert result to string

    if (resultString.length > MAX_DISPLAY_LENGTH) { // if result exceeds max length
        resultString = resultString.slice(0, MAX_DISPLAY_LENGTH); // truncate to max length
    }

    display.textContent = resultString; // update display with result
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