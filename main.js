const operation = {
    add: '+',
    multi: '*',
    sub: '-',
    div: '/',
}

const errors = {
    zero: 'На ноль делить нельзя!',
    writeNumber: 'Введите число!',
}

document.getElementById('res').onclick = function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operator = document.getElementById("oper").value;
    const out = document.querySelector(".result p");
    if (num1 == '' || num2 == '') {
        alert('Введите число!');
    }

    switch(operator) {
        case operation.add:
            out.textContent = +num1 + +num2;
            break;
        case operation.multi:
            out.textContent = +num1 * +num2;
            break;
        case operation.sub:
            out.textContent = +num1 - +num2;
            break;
        case operation.div:
            out.textContent = +num1 / +num2;
            break;
    }
};
// function calc(operator, a, b) {

//     if (a !== Number(a) || b !== Number(b)) {
//         return "Введите число!";
//     }

    
// }