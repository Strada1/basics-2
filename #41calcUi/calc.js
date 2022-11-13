import { ERROR } from "./objects.js";
import { ACTION } from "./objects.js";

export function calc(numOne, numTwo, operator, out) {
  if (!numOne || !numTwo) {
    // Нет числа
    out.textContent = ERROR.NO_DIGIT;
  } else {
    switch (operator) {
      case ACTION.ADDITION:
        let result = +numOne + +numTwo;
        out.textContent = +result.toFixed(3); // 0.1 + 0.3 // 1.35 + 6.35
        break;
      case ACTION.SUBTRACTION:
        out.textContent = +numOne - +numTwo;
        break;
      case ACTION.MULTIPLY:
        out.textContent = +numOne * +numTwo;
        break;
      case ACTION.DIVIDE:
        if (+numTwo === 0) {
          out.textContent = ERROR.DIVIDE_ZERO; // Деление на ноль
          return;
        }
        out.textContent = +numOne / +numTwo;
        break;
    }
  }
}
