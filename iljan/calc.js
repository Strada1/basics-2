let a = +prompt(`Введите первое число`, `0`);
let b = +prompt(`Введите второе число`, `0`);
let c = prompt(`Введите (+ - *)`, `0`);

function calc(c,a,b) {
    if (isNaN(a) || isNaN(b)) {
        return `работаю только с числами`;
    } else if (c == '+') {
        return (a + b);
    } else if (c == '*') {
        return (a * b);
    } else if (c == '-'){
        return (a - b);
    } else {
        return ('error');
    }
         
}

alert(calc(c, a, b));
