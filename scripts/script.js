let input1;
let input2;
let operator;
let displayVal = '';

const display = document.querySelector('#display');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const mult = document.querySelector('#mult');
const div = document.querySelector('#divide');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

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
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case plus:
            return add(num1, num2);
        case minus:
            return subtract(num1, num2);
        case mult:
            return multiply(num1, num2);
        case div:
            return divide(num1, num2);
        default:
            return 'ERROR';
    }
}

function updateDisplay(num) {
    display.textContent = displayVal;
}

// assign number to displayVal...there's gotta be a better way

one.addEventListener('click', () => {
    displayVal += '1';
    updateDisplay(displayVal);
});
two.addEventListener('click', () => {
    displayVal += '2';
    updateDisplay(displayVal);
});
three.addEventListener('click', () => {
    displayVal += '3';
    updateDisplay(displayVal);
});
four.addEventListener('click', () => {
    displayVal += '4';
    updateDisplay(displayVal);
});
five.addEventListener('click', () => {
    displayVal += '5';
    updateDisplay(displayVal);
});
six.addEventListener('click', () => {
    displayVal += '6';
    updateDisplay(displayVal);
});
seven.addEventListener('click', () => {
    displayVal += '7';
    updateDisplay(displayVal);
});
eight.addEventListener('click', () => {
    displayVal += '8';
    updateDisplay(displayVal);
});
nine.addEventListener('click', () => {
    displayVal += '9';
    updateDisplay(displayVal);
});
zero.addEventListener('click', () => {
    displayVal += '0';
    updateDisplay(displayVal);
});

plus.addEventListener('click', () => {
    num1 = displayVal;
    operator = plus;
    clearDisplay();
});
minus.addEventListener('click', () => {
    num1 = displayVal;
    operator = minus;
    clearDisplay();
});
mult.addEventListener('click', () => {
    num1 = displayVal;
    operator = mult;
    clearDisplay();
});
div.addEventListener('click', () => {
    num1 = displayVal;
    operator = div;
    clearDisplay();
});