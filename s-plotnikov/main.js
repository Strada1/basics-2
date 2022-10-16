// задача:
// пользователь вводит 2 числа
// далее вводит знак операции, которую надо выполнить
// программа выдает результат 

var a = parseInt(prompt('введита а'));
var b = parseInt(prompt('введита b'));
var calc = prompt('введите знак операции');

switch(calc) {
    case "+": 
        alert('a + b = ' + (a + b));
        break;
    case "-": 
        alert('a - b = ' + (a - b));
        break;
    case "x":    
    case "*":
        alert("a * b = " + (a * b));
        break;
    default:
        alert('недопустимая операция');
}