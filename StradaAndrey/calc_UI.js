import {deleteResult} from "./deleteResult.js";

const ELEMENTS = {
   FIRST_INPUT : document.getElementById('first'),
   SECOND_INPUT : document.getElementById('second'),
   MATH : document.getElementById('math'),
   EQUEL_BUTTON : document.getElementById('button'),
   RESULT : document.querySelector('div.result-box'),
}


function calc(){
   const firstNumber = Number((ELEMENTS.FIRST_INPUT).value)
   const secondNumber = Number((ELEMENTS.SECOND_INPUT).value)

   const div = document.createElement('div');
   div.classList = 'result';
   div.addEventListener('click', deleteResult);
   (ELEMENTS.RESULT).prepend(div);
 
   let result ;
   if (Number.isFinite(firstNumber && secondNumber)){
      switch ((ELEMENTS.MATH).value) {
      case '+' :
         result = firstNumber + secondNumber;
         break;
      case '-' :
         result = firstNumber - secondNumber;
         break;
      case '*' :
         result = firstNumber * secondNumber;
         break;
      case '/' :
         result = firstNumber / secondNumber;
         break;
      }
   
      if(Number.isInteger(result)){
         div.textContent = result;
      }else {
         div.textContent = result.toFixed(2);
      }
   }
}

(ELEMENTS.EQUEL_BUTTON).addEventListener('click',calc)

