const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    if (b == 0) {
      return "ERROR";
    } else {
      return divide(a, b);
    }
  }
};

let firstNumber = 0;
let secondNumber = 0;

function pickOperator(e) {
  if (!firstNumber) {
    operator = e.target.value;
    firstNumber = number;
    display.textContent = 0;
    number = 0;
  } else {
    secondNumber = number;
  }
}

const display = document.querySelector(".display");
display.textContent = "0";

let operator = "";

let number = 0;

function insert(e) {
  if (display.textContent === "0") {
    display.textContent = e.target.value;
    firstNumber = +display.textContent;
    console.log(firstNumber);
  } else {
    display.textContent += e.target.value;
    firstNumber = +display.textContent;
    console.log(firstNumber);
  }
}

function clear() {
  display.textContent = "0";
  number = 0;
  console.log(number);
}

const seven = document
  .querySelector(".seven")
  .addEventListener("click", insert);
const eight = document
  .querySelector(".eight")
  .addEventListener("click", insert);
const nine = document.querySelector(".nine").addEventListener("click", insert);
const four = document.querySelector(".four").addEventListener("click", insert);
const five = document.querySelector(".five").addEventListener("click", insert);
const six = document.querySelector(".six").addEventListener("click", insert);
const one = document.querySelector(".one").addEventListener("click", insert);
const two = document.querySelector(".two").addEventListener("click", insert);
const three = document
  .querySelector(".three")
  .addEventListener("click", insert);

const multiplyButton = document
  .querySelector(".multiply")
  .addEventListener("click", pickOperator);
const subtractButton = document
  .querySelector(".subtract")
  .addEventListener("click", pickOperator);
const addButton = document
  .querySelector(".add")
  .addEventListener("click", pickOperator);
const divideButton = document
  .querySelector(".divide")
  .addEventListener("click", pickOperator);
const equalsButton = document
  .querySelector(".equals")
  .addEventListener("click", operate(operator, firstNumber, number));
const clearButton = document
  .querySelector(".clear")
  .addEventListener("click", clear);
