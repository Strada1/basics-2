export function count() {
  const firstNum = Number(document.querySelector('.firstNum').value);
  const secondNum = Number(document.querySelector('.secondNum').value);
  const operator = document.querySelector('.select').value;
  const result = document.querySelector('.result');
      switch(operator){
        case 'plus':
            result.textContent = firstNum + secondNum;
           break;
        case 'minus': 
            result.textContent = firstNum - secondNum;
           break;
        case 'multy': 
        result.textContent = firstNum * secondNum;
           break;
        case 'divis': 
           result.textContent = firstNum / secondNum;
           break;
     }
};



export function addDiv() {
  let result = document.querySelector('.result').textContent;
   let div = document.createElement('div');
   div.className ='history';
   div.textContent = result;
   document.querySelector('.calc').append(div);
   div.addEventListener("click", function () {
     div.remove();
  });
};  

