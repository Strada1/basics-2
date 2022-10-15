let action, a, b;

function calc(action, a, b) {
    switch (action) {
        case 'add':
            return (a + b);
        case 'multi':
            return (a * b);
        case 'subtract':
            return (a - b);
        default:
            return "Ошибка!";
    }
}
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('subtrct', 3, 2));