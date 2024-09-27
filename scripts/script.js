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
const equal = document.querySelector('#equal');
const clear = document.querySelector('#c');
const clearEntry = document.querySelector('#ce');

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

function updateDisplay() {
    if (displayVal === '') {
        display.textContent = '0';
    }
    else {
        display.textContent = displayVal;
    }
}

function clearDisplay() {
    display.textContent = '0.';
}

function checkForOverflow() {
    if (displayVal.includes('E')) {
        return false;
    }
    else {
        if (displayVal.length < 8) {
            return true;
        }
        else {
            displayVal = 'E' + displayVal;
            updateDisplay();
            return false;
        }
    }
}

// assign number to displayVal...there's gotta be a better way
one.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '1';
        updateDisplay();
    }
});
two.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '2';
        updateDisplay();
    }
});
three.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '3';
        updateDisplay();
    }
});
four.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '4';
        updateDisplay();
    }
});
five.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '5';
        updateDisplay();
    }
});
six.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '6';
        updateDisplay();
    }
});
seven.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '7';
        updateDisplay();
    }
});
eight.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '8';
        updateDisplay();
    }
});
nine.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '9';
        updateDisplay();
    }
});
zero.addEventListener('click', () => {
    if (checkForOverflow()) {
        displayVal += '0';
        updateDisplay();
    }
});


plus.addEventListener('click', () => {
    if (checkForOverflow()) {
        num1 = displayVal;
        displayVal = '';
        operator = plus;
    }
});
minus.addEventListener('click', () => {
    if (checkForOverflow()) {
        num1 = displayVal;
        displayVal = '';
        operator = minus;
    }
});
mult.addEventListener('click', () => {
    if (checkForOverflow()) {
        num1 = displayVal;
        displayVal = '';
        operator = mult;
    }
});
div.addEventListener('click', () => {
    if (checkForOverflow()) {
        num1 = displayVal;
        displayVal = '';
        operator = div;
    }
});

equal.addEventListener('click', () => {
    if (checkForOverflow()) {
        num2 = displayVal;
        displayVal = operate(parseInt(num1), parseInt(num2), operator);
        updateDisplay();
    }
});

clear.addEventListener('click', () => {
    num1 = undefined;
    num2 = undefined;
    displayVal = '';
    operator = undefined;
    updateDisplay('0');
});

clearEntry.addEventListener('click', () => {
    num2 = undefined;
    displayVal = '';
    updateDisplay();
})