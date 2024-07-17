// gloabl vars for displaying
let currentInput = '';
let firstOperand = null;
let secondOperand = null;
let currentOperator = null; 

//UI Elements 
//display 
const display = document.getElementById("display")
//Numbers
const numberButtons = document.querySelectorAll('.num')

//operators 
const operationButtons = document.querySelectorAll('.operator')

//functions 

const clear = document.getElementById("clear")
const posNeg = document.getElementById("negPos")
const percent = document.getElementById("percentage")

//event listners  and updataing display + current val 
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.getAttribute('data-number')

        //update current input 
        currentInput += number;
        display.textContent = `${currentInput}`
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentOperator = button.getAttribute('data-operator')

        setOperator(currentOperator)
    });
});

clear.addEventListener('click', () => clearDisplay())


function setOperator(operator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperator) {
        secondOperand = parseFloat(currentInput);
        firstOperand = operation(currentOperator, firstOperand, secondOperand)
        display.textContent = `${firstOperand}`
    }
    currentInput = '';
    currentOperator = operator;
}
/*
function turnPosNeg() {
    //parse current input to see if its a flot
    //if so add neg to the currentInput that matches the operand
    //if neg is present when clicked, take the neg off 
}

function percent() {
    //parse current input to see if its a float 
    //if so add a decimal by 2 spaces to the currentInput to change the display and the var that matches that input 
    //if clicked again, add zeros and move two spaces to the right
}

function decimal() {
    //parse current input to see if its a float 
    //if so add a decimal 
    //if clicked again it will do nothing on the currentInput because decimal is present
    //if clicked on new num it will add the decimal 
}
*/
function calculate() {
    if (currentOperator && currentInput !== '') {
        secondOperand = parseFloat(currentInput);
        const result = operate(currentOperator, firstOperand, secondOperand);
        display.value = result;
        firstOperand = result;
        currentInput = '';
        currentOperator = null;
    }
}


function operation(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2 
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return null;
    }
}


function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    display.textContent = '0';
}


