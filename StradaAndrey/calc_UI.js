const ELEMENTS = {
   FIRST_INPUT : document.getElementById('first'),
   SECOND_INPUT : document.getElementById('second'),
   MATH : document.getElementById('math'),
   EQUEL_BUTTON : document.getElementById('button'),
   RESULT : document.getElementById('result'),
}

function calc(){
   const firstNumber = Number((ELEMENTS.FIRST_INPUT).value)
   const secondNumber = Number((ELEMENTS.SECOND_INPUT).value)
   if (Number.isFinite(firstNumber && secondNumber)){
      let result ;
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
         (ELEMENTS.RESULT).textContent = result;
      }else {
         (ELEMENTS.RESULT).textContent = result.toFixed(2);
      }
   } else(
      alert ('не число')
   )
}

(ELEMENTS.EQUEL_BUTTON).addEventListener('click',calc)
