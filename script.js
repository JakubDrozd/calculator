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
    return divide(a, b);
  }
};

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

const multiplyButton = document.querySelector(".multiply");
const subtractButton = document.querySelector(".subtract");
const addButton = document.querySelector(".add");
const divideButton = document.querySelector(".divide");
