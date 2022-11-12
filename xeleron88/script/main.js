import { tempData, button, out } from './modules/dataObject.js';
import { addResult, addEventListener } from './modules/lastResults.js';

// Default hide lastResult
document.querySelector('.lastResults').style.display = 'none';

// Last result module
addEventListener();

const allClear = () => {
  tempData.firstNumber = '';
  tempData.secondNumber = '';
  tempData.sign = '';
  tempData.result = '';
  tempData.trigger = true;
  out.textContent = '0';
};

// Fix floating point
const getPoint = () => {
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

// Calc logic
const equals = () => {
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

// Main function
const calculator = () => {
  document.querySelector('.calculator__keys').addEventListener('click', (e) => {
    const targetButton = e.target.innerHTML;

    // Number buttons
    if (button.number.includes(targetButton)) {
      // Collect first number
      if (tempData.sign === '' && tempData.trigger === true) {
        tempData.firstNumber += targetButton;
        out.textContent = tempData.firstNumber;
      }
      // Collect second number
      if (tempData.firstNumber !== '' && tempData.sign !== '' && tempData.firstNumber !== '') {
        tempData.secondNumber += targetButton;
        out.textContent = tempData.secondNumber;
      }
    }

    // Sign buttons
    if (button.sign.includes(targetButton)) {
      // For a long expression (5 + 5 + 9 * 8 / 2 ...)
      if (tempData.firstNumber !== '' && tempData.secondNumber !== '' && tempData.sign !== '') {
        equals();
      }
      // If first click to sigh (+ - / *)
      if (tempData.firstNumber === '' && tempData.secondNumber === '') {
        tempData.firstNumber = '0';
        out.textContent = '0';
      }

      tempData.sign = targetButton;
    }

    // Button "."
    if (button.point.includes(targetButton)) {
      getPoint();
    }
    // Button "="
    if (button.equals.includes(targetButton)) {
      if (tempData.firstNumber !== '' && tempData.sign !== '' && tempData.secondNumber === '') {
        tempData.secondNumber = tempData.firstNumber;
      }
      equals();
      addResult(out.innerHTML);
    }

    // Button AC
    if (button.ac.includes(targetButton)) {
      allClear();
    }
  });
};

calculator();
