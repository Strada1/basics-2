// #12 Switch

function calc (operator, a, b) {

    a = Number(a);
    b = Number(b);

    if (!a || !b) {
        return 'Incorrect operation';
    }

    switch (operator) {
        case 'add':
            return a + b;    
        case 'subtract':
            return a - b;
        case 'multi':
            return a * b;
        default: 
            return 'Incorrect operation';
    }
}

console.log(calc('add', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('multi', 1, 2));
console.log(calc('other', 2, 3));
console.log(calc('add', '1', 3));
console.log(calc('multi', 'one', 3));
console.log(calc('subtract', '', 3));

// #11 Функции

function calcFirst (operator, a, b) {
    if (operator === 'add') {
        return a + b;
    } else if (operator === 'subtract') {
        return a - b;
    } else if (operator === 'multi') {
        return a * b;
    } else {
        return 'Incorrect operation';
    }
}

console.log(calcFirst('add', 1, 2));
console.log(calcFirst('subtract', 3, 2));
console.log(calcFirst('multi', 1, 2));
console.log(calcFirst('other', 2, 3));