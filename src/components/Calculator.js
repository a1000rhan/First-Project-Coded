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
  return;

  <div className="calculator">
    <h1> Use Calculator</h1>
    <form>
      <input type="text" id="result" readOnly />
      <input type="text" id="num" placeholder="enter a number" />
      <button>Add</button>
      <button>Clear</button>
    </form>
  </div>;
}

export default Calculator;
