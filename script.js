const op = prompt("операция, варианты: +, *, -");
const a = Number(prompt("число а"));
const b = Number(prompt("число b"));

function calc(op, a, b)
{
    switch(op) {
        case operation.add:
            return a + b;
        case operation.multi:
            return a * b;
        case operation.subtract:
            return a - b;
        default:
            return 'Неверные входные данные';
    }
}

const operation = {
    add : '+',
    multi : '*',
    subtract : '-',
}

alert(calc(op, a, b));