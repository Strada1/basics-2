let op = prompt('Какую операцию вы хотите провести: + - *');
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
if (a || b !== Number) {
    alert('Вы ввели не число!');
}
switch (op) {
    case '+': 
        alert(a + b);
    break;
    case '-':
        alert(a - b);
    break;
    case '*':
        alert(a * b);
    break;
    default:
        alert('Вы ввели неправильный оператор!');
    break;
}