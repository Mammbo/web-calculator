// gloabl vars for displaying
let currentInput = '';
let displayNum1 = null;
let displayNum2 = null;
let currentOperator = null; 

//UI Elements 
//display 
const display = document.getElementById("display")
//Numbers
const num7 = document.getElementById("7")
const num8 = document.getElementById("8")
const num9 = document.getElementById("9")
const num4 = document.getElementById("4")
const num5 = document.getElementById("5")
const num6 = document.getElementById("6")
const num1 = document.getElementById("1")
const num2 = document.getElementById("2")
const num3 = document.getElementById("3")
const num0 = document.getElementById("0")
const decimal = document.getElementById(".")


//operators 
const divide = document.getElementById("divison")
const multiply = document.getElementById("multiplication")
const subtract = document.getElementById("subtraction")
const add = document.getElementById("addition")

//functions 

const clear = document.getElementById("clear")
const posNeg = document.getElementById("negPos")
const percent = doucment.getElementById("percentage")

//event listners 
num7.onclick = 

//functionality 
function inputNumber(number) {
    currentInput += number;
    display.textContent = `${currentInput}`;
}

function setOperator(operator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperator) {
        secondOperand = parseFloat(currentInput);
        firstOperand = operate(currentOperator, firstOperand, secondOperand)
        display.textContent(firstOperand);
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


