const operations = {
   sum: 'sum',
   multi: 'multi',
   subtract: "subtract",
   divide: "divide",
};

const inputs = document.querySelectorAll('.inputs');
const action = document.querySelector('#action');
const button = document.querySelector('#equal');
const output = document.querySelector('#output');

function getInputValues() {
   let value1 = +inputs[0].value;
   let value2 = +inputs[1].value;
   return [value1, value2];
}

function getActionValue() {
   let value = action.value;
   return value;
}

function calc() {
   let ans = NaN;
   let action = getActionValue();
   let numbers = getInputValues();
   switch (action) {
      case operations.sum:
         ans = numbers[0] + numbers[1];
         break;
      case operations.multi:
         ans = numbers[0] * numbers[1];
         break;
      case operations.subtract:
         ans = numbers[0] - numbers[1];
         break;
      case operations.divide:
         ans = (numbers[0] / numbers[1]);
   }
   if (ans !== Infinity && !isNaN(ans)) {
      ans = +ans.toFixed(2)
   }
   else {
      ans = 'ERROR';
   }
   return ans;
}

function addDivHtml(where) {
   let ans = calc();
   where.insertAdjacentHTML('beforeend',
      `<div class="output">${ans}</div>`);
}

function addRemoveDivs(classDiv) {
   let divs = document.querySelectorAll(`.${classDiv}`);
   for (let div of divs) {
      div.addEventListener('click', div.remove);
   }
}

button.addEventListener('click', function () {
   addDivHtml(output);
   addRemoveDivs("output");
});
