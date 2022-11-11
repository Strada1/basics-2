const tempData = {
  firstNumber: '',
  secondNumber: '',
  thirdNumber: '',
  result: '',
  sign: '',
  trigger: true,

};
const button = {
  sign: ['+', '-', '×', '÷'],
  number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  ac: ['AC'],
  point: ['.'],
  equals: ['='],
};

document.querySelector('.lastResults').style.display = 'none';
const out = document.querySelector('.calculator__output');

const lastResultsVisible = () => {
  const countOfLastResults = document.querySelectorAll('.results__result').length;
  if (countOfLastResults > 0) {
    document.querySelector('.lastResults').style.display = '';
  } else {
    document.querySelector('.lastResults').style.display = 'none';
  }
};

const addResult = (result) => {
  const div = document.createElement('div');
  div.className = 'results__result';
  div.innerHTML = result;
  document.querySelector('.lastResults').append(div);
  lastResultsVisible();
};

document.querySelector('.lastResults').addEventListener('click', (e) => {
  const targetResult = e.target;
  targetResult.remove();
  lastResultsVisible();
});

// AC button
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
  switch (tempData.sign) {
  case '+':
    tempData.result = Number(tempData.firstNumber) + Number(tempData.secondNumber);
    break;
  case '-':
    tempData.result = Number(tempData.firstNumber) - Number(tempData.secondNumber);
    break;
  case '×':
    tempData.result = Number(tempData.firstNumber) * Number(tempData.secondNumber);
    break;
  case '÷':
    if (Number(tempData.secondNumber) === 0) {
      out.textContent = 'Error';
      return;
    }
    tempData.result = Number(tempData.firstNumber) / Number(tempData.secondNumber);
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
