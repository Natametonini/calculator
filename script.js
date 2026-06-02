let valueOne;
let valueTwo;
let operator;

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "*":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;
    } 
}

let numberBtns = document.querySelector(".numberOptions");

    numberBtns.addEventListener("click", (e) => {
        let display = document.getElementById("display");
        if (valueOne === undefined) { 
            valueOne = parseInt(e.target.textContent); 
            display.innerHTML(valueOne)
        }
        else { 
            valueTwo = parseInt(e.target.textContent); 
        }
        
    })  

let temporaryText = valueOne;