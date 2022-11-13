
let equalsButton = document.querySelector('.equals-button');
let result = document.querySelector('.result');

equalsButton.addEventListener('click', calc);
equalsButton.addEventListener('click', addNewResult);
//result.addEventListener('click', deleteResult);


function calc() {
    let firstNumber = document.querySelector('.number1').value;
    let secondNumber = document.querySelector('.number2').value;
    let operator = document.querySelector('.select-option').value;


    if(operator === '+') {
        result.textContent = Number(firstNumber) + Number(secondNumber);
    }
     else if(operator === '-') {
        result.textContent = firstNumber - secondNumber;
    }
    else if(operator === '*') {
        result.textContent = firstNumber * secondNumber;
    }
    else if(operator === '/') {
        result.textContent = firstNumber / secondNumber;
    }

    
}

function addNewResult() {
	let nextResult = result.cloneNode(true);
	let lastDiv = document.querySelector('.results');
	lastDiv.append(nextResult);
    nextResult.addEventListener('click', (e) => {
        const targetResult = e.target;
        if (targetResult.classList.contains('result') ) {
            targetResult.remove();
        }
      });
}

function deleteResult(e) {
    const targetResult = e.target;
    if (targetResult.classList.contains('result') ) {
        targetResult.remove();
    }
    
  }





