let Num1 = +prompt('Введите первое число');
let Num2 = +prompt('Введите второе число');
let operator = prompt('Выберете оператор +,-,*');
alert(calc(Num1,Num2,operator));
function calc(Num1,Num2,operator){
  if (isNaN(Num1) || isNaN(Num2)) {
  return 'Введите числа, пожалуйста';
}
  switch(operator){
  case '+': return Num1 + Num2;
    break;
  case '-': return Num1 - Num2;
    break;
  case '*': return Num1*Num2;
    break;
  default: return 'Введите верное значение(+,-,*)';
    break;
                  }       
 }     
