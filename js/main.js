const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    let value = e.target.innerText;
    let currentValue = display