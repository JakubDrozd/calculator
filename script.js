const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  operator = actualOperator;
  a = firstNumber;
  b = actualNumber;
  if (operator === "+") {
    actualNumber = add(a, b);
    display.textContent = actualNumber;
  } else if (operator === "-") {
    actualNumber = subtract(a, b);
    display.textContent = actualNumber;
  } else if (operator === "*") {
    actualNumber = multiply(a, b);
    display.textContent = actualNumber;
  } else if (operator === "/") {
    if (b == 0) {
      display.textContent = "ERROR";
      actualNumber = 0;
      actualOperator = "";
      firstNumber = 0;
    } else {
      actualNumber = divide(a, b);
      display.textContent = actualNumber;
    }
  }
  if (display.textContent.length > 8) {
    display.textContent = "ERROR";
    actualNumber = 0;
    actualOperator = "";
    firstNumber = 0;
  }
};
let actualOperator = "";
let actualNumber = 0;
let firstNumber = 0;

const display = document.querySelector(".display");
display.textContent = actualNumber;

function insert(e) {
  if (actualNumber === 0) {
    display.textContent = e.target.value;
  } else {
    display.textContent += e.target.value;
  }
  actualNumber = +display.textContent;
  if (display.textContent.length > 8) {
    display.textContent = "ERROR";
    actualNumber = 0;
    actualOperator = "";
    firstNumber = 0;
  }
}

function pickOperator(e) {
  if (firstNumber > 0) {
    operate();
  }
  actualOperator = e.target.value;
  firstNumber = actualNumber;
  display.textContent = actualNumber;
  actualNumber = 0;
}

function clear() {
  actualNumber = 0;
  display.textContent = "0";
  actualOperator = "";
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
  .addEventListener("click", operate);
const clearButton = document
  .querySelector(".clear")
  .addEventListener("click", clear);
