function calc(operation, a, b) {
    a = Number(a);
    b = Number(b);
    let numberCheck = !(isNaN(a)) && !(isNaN(b));
    switch (operation) {
        case 'add':
            return (numberCheck ? a + b : "Wrong number")
        case 'multi':
            return (numberCheck ? a * b : "Wrong number")
        case 'substract':
            return (numberCheck ? a - b : "Wrong number")
        default:
            return "Wrong operation"
    }
}