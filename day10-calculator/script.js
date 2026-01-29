// ================================
// DAY 10: CALCULATOR PROJECT
// ================================

console.log("Calculator loaded");

// ================================
// STATE VARIABLES
// ================================

/*
we need to track:
1. Current number being typed
2. Previous number (before operator)
3. Current operation (+, -, x, :)
4. Wheter we just calculated (to reset on next number)
*/

let currentOperand = '0';
let previousOperand = '';
let operation = null;
let shouldResetScreen = false;

// ================================
// DOM ELEMENTS
// ================================

const currentOperandElement = document.getElementById('currentOperand');
const previousOperandElement = document.getElementById('previousOperand');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-action="add"], [data-action="subtract"], [data-action="multiply"], [data-action="divide"]');
const equalsButton = document.querySelector('[data-action="calculate"]');
const clearButton = document.querySelector('[data-action="clear"]');
const deleteButton = document.querySelector('[data-action="delete"]');

// ================================
// UPDATE DISPLAY
// ================================
function updateDisplay() {
    // Update current operand display
    currentOperandElement.textContent = currentOperand;

    // Update previous operand display
    if (operation != null) {
        previousOperandElement.textContent = `${previousOperand} ${operation}`;
    } else {
        previousOperandElement.textContent = '';
    }
}

// ================================
// NUMBER INPUT
// ================================

function appendNumber(number) {
    // If we just calculated, reset screen for new calculation
    if (shouldResetScreen) {
        currentOperand = '';
        shouldResetScreen = false;
    }

    // Don't allow multiple decimals
    if (number === '.' && currentOperand.includes('.')) return;

    // Replace initial 0 with number (unless it's decimal)
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }

    updateDisplay();
}

// Add event listeners to all number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.dataset.number);
    });
});

// =================================
// OPERATIONS
// =================================

function chooseOperation(selectedOperation) {
    // If current is empty, don't do anything
    if (currentOperand === '') return;

    // If there's already a previous operand, calculate first
    if (previousOperand !== '') {
        calculate();
    }

    // Set operation
    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = '';

    updateDisplay();
}

// Add event listeners to operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        let op = '';
        const action = button.dataset.action;

        if (action === 'add') op = '+';
        else if (action === 'subtract') op = '-';
        else if (action === 'multiply') op = '×';
        else if (action === 'divide') op = '÷';

        chooseOperation(op);
    });
});

// ===============================
// CALCULATE
// ===============================

function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    // If either is NaN, don't calculate
    if (isNaN(prev) || isNaN(current)) return;

    // Perform calculation based on operation
    switch(operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            // Prevent division by zero
            if (current === 0) {
                alert("Cannot divide by zero!");
                clear();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    // Update result with result
    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    shouldResetScreen = true;

    updateDisplay();
}

// Add event listeners to equal button
equalsButton.addEventListener('click', calculate);

// ==============================
// CLEAR
// ==============================

function clear() {
    currentOperand = '0';
    previousOperand = '';
    operation = null;
    shouldResetScreen = false;
    updateDisplay();
}

clearButton.addEventListener('click', clear);

// ==============================
// DELETE (Backspace)
// ==============================

function deleteNumber() {
    // If screen should reset, just clear
    if (shouldResetScreen) {
        clear();
        return;
    }

    // Remove last character
    currentOperand = currentOperand.slice(0, -1);

    // If empty, set to 0
    if (currentOperand === '') {
        currentOperand = '0';
    }

    updateDisplay();
}

deleteButton.addEventListener('click', deleteNumber);

// =============================
// KEYBOARD SUPPORT (BONUS!)
// =============================

/*
Allow keyboard input:
- Numbers 0-9
- Operators +, -, *, /
- enter/= for equals
- Escape/C for clear
- Backspace for delete
*/

document.addEventListener('keydown', (e) => {
    // Numbers
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    }

    // Decimal point
    if (e.key === '.') {
        appendNumber('.');
    }

    // Operators
    if (e.key === '+') chooseOperation('+');
    if (e.key === '-') chooseOperation('-');
    if (e.key === '*') chooseOperation('×');
    if (e.key === '/') {
        e.preventDefault(); // Prevent browser search
        chooseOperation('÷');
    }

    // Equals
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    }

    // Clear
    if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        clear();
    }

    // Delete
    if (e.key === 'Backspace') {
        deleteNumber();
    }
});

// ==============================
// INITIALIZE
// ==============================

// Set initial display
updateDisplay();

console.log("Calculator ready! Try clicking buttons or using keyboard!");