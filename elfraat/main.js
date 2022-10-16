
function calc(operator, a ,b){
    switch (operator){
        case 'add':
            return a + b;
            break;

        case 'multi':
            return a * b;
            break;

        case 'subtract':
            return a - b;
            break;

    }
}

console.log(calc('add',5,23));
console.log(calc('multi', 44, 5));
console.log(calc('subtract', 75, 8));


