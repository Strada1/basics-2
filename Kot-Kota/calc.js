// Working CALC

/*
сalc(‘add’, 1, 2) - возвращает 3
сalc(‘multi’, 1, 2) - возвращает 2
сalc(’subtract’, 3, 2) - возвращает 1

let operator = "-";
let a = 3;
let b = 2;
let result = calc(a, operator, b)


let a = parseFloat(prompt('Enter first number: '));
let operator = prompt('Enter operator ( either +, - or * ): ');
let b = parseFloat(prompt('Enter second number: '));
let result = calc(a, operator, b)


function calc(a, operator, b) {
 if (operator == "+" ) {
    return a + b;
 }else if (operator == "-") {
   return a - b;
 }else if (operator == "*") {
   return a * b;
 }
} 
alert(`${a} ${operator} ${b} = ${result}`);
*/


// NOT WORKING WITH SWITCH!!!


let firstNumber = parseFloat(prompt('Enter first number: '));
let operator = prompt('Enter operator ( either +, - or * ): ');
let secondNumber = parseFloat(prompt('Enter second number: '));
let result;

function calc() {
	getfirstNumber();
	getsecondNumber();

switch (operator) {
   case "+":
      result = firstNumber + secondNumber;
      alert(`Результат равен ${result}`);
      break;
   case "-":
      result = firstNumber - secondNumber;
      alert(`Результат равен ${result}`);
      break;
   case "*":
      result = firstNumber * secondNumber;
      alert(`Результат равен ${result}`);
      break;
      default:
			alert(`Wrong characters!`);
}
}
calc();