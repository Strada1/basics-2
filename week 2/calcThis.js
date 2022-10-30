let calc = {
    a: undefined,
    b: undefined,
    read() {
        a = +prompt('Введите число a');
        b = +prompt('Введите число b');
    },
    sum() {
        return a + b;
    },
    mul() {
        return a * b;
    },
}

calc.read();
alert(calc.sum());
alert(calc.mul());