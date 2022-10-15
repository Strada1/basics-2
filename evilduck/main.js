function calc(action, a, b) {
    action = prompt('Введите необходимое действие', '');
    a = +prompt('Введите первое число', '');
    b = +prompt('Введите второе число', '');
    switch (action) {
        case 'add':
            alert(a + b);
            break;
        case 'multi':
            alert(a * b);
            break;
        case 'subtract':
            alert(a - b);
            break;
        default:
            alert('Вы ввели неверные значения');   
    }
}

calc();
