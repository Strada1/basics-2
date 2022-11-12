// Fix floating point
import { out, tempData } from './dataObject.js';

export const getPoint = () => {
  const temp = out.innerHTML;
  const count = (temp.match(/\./g) || []).length;
  if (count < 1 && tempData.sign === '') {
    out.innerHTML += '.';
    tempData.firstNumber += '.';
  } else if (count < 1) {
    out.innerHTML += '.';
    tempData.secondNumber += '.';
  }
};

// AC button
export const allClear = () => {
  tempData.firstNumber = '';
  tempData.secondNumber = '';
  tempData.sign = '';
  tempData.result = '';
  tempData.trigger = true;
  out.textContent = '0';
};

// Calc logic
export const equals = () => {
  const firstNumber = Number(tempData.firstNumber);
  const secondNumber = Number(tempData.secondNumber);

  switch (tempData.sign) {
  case '+':
    tempData.result = firstNumber + secondNumber;
    break;
  case '-':
    tempData.result = firstNumber - secondNumber;
    break;
  case '×':
    tempData.result = firstNumber * secondNumber;
    break;
  case '÷':
    if (secondNumber === 0) {
      out.textContent = 'Error';
      return;
    }
    tempData.result = firstNumber / secondNumber;
    break;
  default:
    tempData.result = out.textContent;
    break;
  }

  // Fix bug with "double" numbers
  if (parseInt(tempData.result, 10) === tempData.result) {
    out.textContent = tempData.result;
  } else {
    const res = Number(tempData.result);
    out.textContent = parseFloat(res.toFixed(10));
  }

  // Refresh tempData
  tempData.firstNumber = tempData.result;
  tempData.secondNumber = '';
  tempData.result = '';
  tempData.sign = '';
  tempData.trigger = false;
};
