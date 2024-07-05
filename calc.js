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