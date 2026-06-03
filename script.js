// VARIABLES -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Display variables 
let valueOne = "";
let valueTwo = "";
let operator = "";

// Element variables 
let display = document.getElementById("display");
let numberBtns = document.querySelector(".numberOptions");
let operatorBtns = document.querySelector(".operatorOptions");
let clearBtn = document.querySelector(".clearBtn");
let equalBtn = document.querySelector(".equal");
let dotBtn = document.querySelector(".dotBtn");

// FUNCTIONS -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Operations Functions 
function add(firstValue, secondValue) {
    valueOne = firstValue + secondValue;
    return valueOne;

}

function subtract(firstValue, secondValue) {

    valueOne = firstValue - secondValue;
    return valueOne;

}

function multiply(firstValue, secondValue) {

    valueOne = firstValue * secondValue;
    return valueOne;

}

function divide(firstValue, secondValue) { 

    valueOne = firstValue / secondValue;
    return valueOne;

}

// Main function 
function operate(firstValue, operator, secondValue) {

    switch (operator) {

        case "+":
            add(firstValue, secondValue);
            break;

        case "-":
            subtract(firstValue, secondValue);
            break;

        case "*":
            multiply(firstValue, secondValue);
            break;

        case "/":
            divide(firstValue, secondValue);
            break;  

    }

}
    
// EVENTS -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Add numbers
numberBtns.addEventListener("click", (event) => {

    if (operator === "") {

        if (event.target.localName === "button") {
    
            valueOne += 
            event.target.textContent;

        }
        
        display.textContent = 
        `${valueOne} ${operator} ${valueTwo}`;

    }

    else if (operator !== "") {
        
        valueOne = parseFloat(valueOne);

        if (event.target.localName === "button") {
            
            valueTwo += 
            event.target.textContent;

        }

        display.textContent = 
        `${valueOne} ${operator} ${valueTwo}`;

    }

});

// Select operator
operatorBtns.addEventListener("click", (event) => {

    dotBtn.disabled = false;

    if (event.target.className === "operator") {
        if (valueOne !== "") operator = event.target.textContent;
    }

    display.textContent = 
    `${valueOne} ${operator} ${valueTwo}`;  

})

// Clear all the numbers
clearBtn.addEventListener("click", () => {
    
    dotBtn.disabled = false;
    display.textContent = "0";
    valueOne = "";
    valueTwo = "";
    operator = "";


})  

// Display the result
equalBtn.addEventListener("click", () => {

    valueTwo = parseFloat(valueTwo);

    if (operator === "/" && valueTwo === 0) {

        display.textContent = 
        "Cant divide by 0";

        valueOne = "";
        valueTwo = "";
        operator = "";

        return;

    }
    else {

        operate(valueOne, operator, valueTwo);
        valueTwo = "";
        operator = "";

        display.textContent = 
        `${valueOne} ${operator} ${valueTwo}`;

    }
    
}); 

// Make decimal
dotBtn.addEventListener("click", () => {
    dotBtn.disabled = true;
})

// Delete the last digit 
document.addEventListener("keydown", (event) => {

    if (event.key === "Backspace") {

        if (operator === "") valueOne = valueOne.slice(0, -1);
        else valueTwo = valueTwo.slice(0, -1);

        display.textContent = 
        `${valueOne} ${operator} ${valueTwo}`;

    }
    
})