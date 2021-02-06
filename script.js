"use strict";
window.addEventListener("DOMContentLoaded", init);

function init() {
  calculate();
  clear();
}

function calculate() {
  const button = document.querySelector("button#calculate");
  button.addEventListener("click", getNumbers);
}
function getNumbers() {
  const inputFirst = document.querySelector("#firstnumber").value;
  const inputSecond = document.querySelector("#secondnumber").value;
  performCalculation(inputFirst, inputSecond);
}
let result;
function performCalculation(inputFirst, inputSecond) {
  let operatorUse = document.querySelector("#operator").value;
  if (operatorUse == "add") {
    result = Number(inputFirst) + Number(inputSecond);
  } else if (operatorUse == "sub") {
    result = Number(inputFirst) - Number(inputSecond);
  } else if (operatorUse == "mul") {
    result = Number(inputFirst) * Number(inputSecond);
  } else {
    result = Number(inputFirst) / Number(inputSecond);
  }
  document.querySelector("#results li").textContent = result;
  document.querySelector("#firstnumber").value = result;
}
function clear() {
  document.querySelector("#clear").addEventListener("click", clearResult);
}
function clearResult() {
  document.querySelector("#firstnumber").value = null;
  document.querySelector("#secondnumber").value = null;
  document.querySelector("#results li").textContent = 0;
}
