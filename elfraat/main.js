
function calc(operator, a ,b){
    switch (operator){
        case 'add':
            return a + b;


        case 'multi':
            return a * b;


        case 'subtract':
            return a - b;


    }
}

console.log(calc('add',5,23));
console.log(calc('multi', 44, 5));
console.log(calc('subtract', 75, 8));


