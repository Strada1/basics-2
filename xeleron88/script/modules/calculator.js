import { button, out, tempData } from './dataObject.js';
import { allClear, equals, getPoint } from './calcLogic.js';
import { addResult } from './lastResults.js';

const calculator = () => {
  document.querySelector('.lastResults').style.display = 'none';
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

export default calculator;
