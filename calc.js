function сalc (typeOfCalculation, a, b) {
    let result;
    if (typeof(a) != 'number' || typeof(b) != 'number') {
    result = 'Числа твои и не числа вовсе ученик'
    } else if (typeOfCalculation != '' || typeOfCalculation != '' || typeOfCalculation != '') {
        result = 'Я таки вычислений и не умею вовсе'
    } else if (typeOfCalculation == 'add') {
        result = a + b
    } else if (typeOfCalculation == 'multi') {
        result = a * b
    } else if (typeOfCalculation == 'subtract') {
        result = a - b
    };

    return result;
};

console.log(сalc('плюсуй', 8, 3));