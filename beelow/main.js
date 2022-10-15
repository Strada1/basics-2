function calcSum(operator, a, b) {
    switch (a != +a) {
        case true:
            return 'Введите число';
    }
    switch (b != +b) {
        case true:
            return 'Введите число';
    }
    switch (operator) {
        case 'add':
            return +a + +b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'Не верное значение';

    }
}
console.log(calcSum('add', 1, 2));
console.log(calcSum('multi', 1, 2));
console.log(calcSum('subtract', 3, 2));
console.log(calcSum('', 1, 2));
console.log(calcSum(null, 1, 2));
console.log(calcSum(true, 1, 2));
console.log(calcSum('add', true, 2));
console.log(calcSum('add', '1', 2));
console.log(calcSum('multi', 1, '2'));
console.log(calcSum('subtract', '2', '1'));
console.log(calcSum('subtract', 'text', 1));
console.log(calcSum('add', null, 2));
console.log(calcSum('add', undefined, 2));
