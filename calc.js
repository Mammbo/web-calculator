// functiionality  

// gloabl vars for displaying
let displayNum1 = 0
let displayNum2 = 0
let displayOperator = '' 

function addition(num1, num2) {
    return num1 + num2 
}

function subtraction(num1, num2) {
    return num1 - num2
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2 
}

//operation function 

function operation(displayNum1, displayOperator, displayNum2) {
    if (displayOperator === '+'){
        answer = addition(displayNum1, displayNum2) 
    } else if (displayOperator === '-') {
        answer = subtraction(displayNum1, displayNum2)
    } else if (displayOperator === '*') {
        answer = multiplication(displayNum1, displayNum2)
    } else if (displayOperator === '/') {
        answer = division(displayNum1, displayNum2)
    } 
    return answer
}




//UI Elements 
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


