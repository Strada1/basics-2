
const button = document.querySelector('.button');
const result = document.querySelector('.result');
button.addEventListener('click',count);

function count() {
   const firstNum = Number(document.querySelector('.firstNum').value);
   const secondNum = Number(document.querySelector('.secondNum').value);
   const operator = document.querySelector('.select').value;

   try{
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
     if(secondNum === 0 && operator === 'divis') {
        throw new SyntaxError(" На ноль делить нельзя!!!");
     }
   } catch(e){
        result.innerHTML =  e.message;
   }
};

