function сalc (typeOfOperations, a, b) {
 
    const operations = {
        'add': '+',
        'multi': '*',
        'subtract': '-',
    };

    switch (typeOfOperations) {
        case operations.add:
            result = a + b;
            break;

        case operations.multi:
            result = a * b;
            break;

        case operations.subtract:
            result = a - b;
            break;

        default: 
            result = 'Я таки вычислений и не умею вовсе';
    };
    
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        result = 'Числа твои и не числа вовсе ученик'
    };

    return result;
};

console.log(сalc('*', 'ff', 4));
