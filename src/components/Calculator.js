import React from "react";

let num1 = null;
let num2 = null;
oper = null;

function result(num1, num2, oper) {
  switch (oper) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

function Calculator() {
  return <div></div>;
}

export default Calculator;
