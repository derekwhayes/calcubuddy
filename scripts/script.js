let num1 = undefined;
let num2 = undefined;
let operator;
let displayVal = '';
let isSolved = false;

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
const dot = document.querySelector('#dot');

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
            return '';
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

// display can only show 10 digits including dots and negative sign
function clearDisplay() {
    display.textContent = '0';
}

function checkForOverflow() {
    if (displayVal.includes('E')) {
        return false;
    }
    else {
        if (displayVal.length < 10) {
            return true;
        }
        else {
            displayVal = 'E' + displayVal;
            updateDisplay();
            return false;
        }
    }
}

function getResult() {
    console.log("getResult().begin ::: num1:", num1, "num2:", num2, "operator:", operator);
    if (checkForOverflow()) {
        if (num2 === undefined) {
            num2 = num1;
        }
        displayVal = (operate(parseFloat(num1), parseFloat(num2), operator)).toString();
        updateDisplay();
        num1 = displayVal;
        // num2 = undefined;
        // set result to num1 so user can do another operation off of it
        // num1 = displayVal;
        isSolved = true;
        console.log("getResult().end ::: num1:", num1, "num2:", num2, "operator:", operator);
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
    if (isSolved) {
        displayVal = '';
        isSolved = false;
    }
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
dot.addEventListener('click', () => {
    if (checkForOverflow()) {
        if (!displayVal.includes('.')) {
            displayVal += '.';
            updateDisplay();
        }
    }
})


plus.addEventListener('click', () => {
    
    // if num1 is undefined it means we want to start another operation
    console.log("plusClick.start ::: num1:", num1, "num2:", num2, "operator:", operator);
    if (checkForOverflow() && num1 === undefined) {
        
        num1 = displayVal;
        displayVal = ''; // necessary so next number doesn't concat
        operator = plus;
        console.log("plusClick.end ::: num1:", num1, "num2:", num2, "operator:", operator);

    }
    else {
        // console.log("NOT checkForOverflow ok AND num1 = undefined");
        if (!isSolved) {
            // console.log("isSolved = false");
            // num2 = displayVal;
        }
        else {
            // console.log("isSolved = true");
            // num2 = num1;
        }
        displayVal = '';
        getResult();
        console.log("plusClick.end ::: num1:", num1, "num2:", num2, "operator:", operator);
    }

});
minus.addEventListener('click', () => {
    if (checkForOverflow() && operator === undefined) {
        num1 = displayVal;
        displayVal = '';
        operator = minus;
    }
});
mult.addEventListener('click', () => {
    if (checkForOverflow() && operator === undefined) {
        num1 = displayVal;
        displayVal = '';
        operator = mult;
    }
});
div.addEventListener('click', () => {
    if (checkForOverflow() && operator === undefined) {
        num1 = displayVal;
        displayVal = '';
        operator = div;
    }
});

equal.addEventListener('click', () => {
    console.log("equalClick.begin ::: num1:", num1, "num2:", num2, "isSolved:", isSolved, "operator:", operator);
    if (!isSolved) {
        num2 = displayVal;
        console.log("equalClick.begin ::: num1:", num1, "num2:", num2, "isSolved:", isSolved, "operator:", operator);

        displayVal = (operate(parseFloat(num1), parseFloat(num2), operator)).toString();
        updateDisplay();
        num1 = undefined;
        num2 = undefined;
        isSolved = true;
        operator = undefined;
        console.log("equalClick.end ::: num1:", num1, "num2:", num2, "operator:", operator);
    }
});

clear.addEventListener('click', () => {
    num1 = undefined;
    num2 = undefined;
    displayVal = '';
    operator = undefined;
    isSolved = false;
    updateDisplay('0');
});

clearEntry.addEventListener('click', () => {
    num2 = undefined;
    displayVal = '';
    updateDisplay();
})