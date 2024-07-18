let operator = '';
let previousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    // store all components on HTML in our JS.
    let numbers = document.querySelectorAll(".num")
    let operators = document.querySelectorAll(".operator")

    let clear = document.getElementById("clear")
    let percent = document.getElementById("percentage")
    let posNeg = document.getElementById("negPos")
    let equal = document.getElementById("equals")
    let decimal = document.getElementById(".")

    let display = document.getElementById("display")

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        display.textContent = currentValue;
    }))

    operators.forEach((operator) => operator.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
    }))

    clear.addEventListener("click", function(){
        previousValue = '';
        currentValue = '';
        operator = '';
        display.textContent = 0;
    })

    equal.addEventListener("click", function(){
        if (currentValue != '' && previousValue != '' && operator != ''){
            calculate()
            if (previousValue.length <= 13){
                display.textContent = previousValue;
                operator = '';
            } else {
                display.textContent = previousValue.slice(0,13) + "...";
                operator = '';
            }
        }
    })

    decimal.addEventListener("click", function(){
        if (!currentValue.includes('.')){
            currentValue = currentValue + '.';
            display.textContent = currentValue
        }
    })
    // finish the percent function and the pos/neg 
    percent.addEventListener("click", function(){
        currentValue = parseFloat(currentValue)
        currentValue = currentValue * 0.01
        currentValue = currentValue.toString();
        display.textContent = currentValue.slice(0,13);
    })
    posNeg.addEventListener("click", function(){
        if (!currentValue.includes('-')) {
            currentValue = '-' + currentValue;
            display.textContent = currentValue
        } else if (currentValue.includes('-')){
            currentValue = currentValue.replace('-', '')
            display.textContent = currentValue
        }
    })
})



function handleNumber(num) {
    if (currentValue.length <= 13) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);


        if (operator ==="+") {
            previousValue += currentValue
        } 
        else if (operator === "-") {
            previousValue -= currentValue
        } 
        else if (operator === "×") {
            previousValue *= currentValue
        }
        else if (operator === "÷") {
            previousValue /= currentValue

        } 

    previousValue = roundNumber(previousValue)
    currentValue = previousValue.toString();
    previousValue = previousValue.toString();
}

function roundNumber(num){
    return  parseFloat(num.toFixed(2))
}
