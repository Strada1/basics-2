const calc = (a, b, operator) => {
    switch (operator) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
    }
}