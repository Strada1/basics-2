
const button = document.querySelector('.button');
const result = document.querySelector('.result');
button.addEventListener('click',count);

function count() {
   const firstNum = Number(document.querySelector('.firstNum').value);
   const secondNum = Number(document.querySelector('.secondNum').value);
   const operator = document.querySelector('.select').value;

       switch(operator){
         case 'plus':
             result.innerHTML = firstNum + secondNum;
            break;
         case 'minus': 
             result.innerHTML = firstNum - secondNum;
            break;
         case 'multy': 
         result.innerHTML = firstNum * secondNum;
            break;
         case 'divis': 
            result.innerHTML = firstNum / secondNum;
            break;
      }

};
