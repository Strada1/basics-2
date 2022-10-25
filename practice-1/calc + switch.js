function сalc (typeOfCalculation, a, b) {
    let result;
    switch (typeOfCalculation) {
        case 'add':
            result = (a + b);
            break;

        case 'multi':
            result = (a * b);
            break;

        case 'subtract':
            result = (a - b);
            break;

        default: 
            result = 'Я таки вычислений и не умею вовсе';
    };
   
    if (typeof(a) != 'number' || typeof(b) != 'number') {
    result = 'Числа твои и не числа вовсе ученик'
    };

    return result;
};

console.log(сalc('zt,fk', 8, 3));
