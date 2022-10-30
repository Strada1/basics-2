let number = +prompt('Введите число от 0 до 3 . . .');

switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break
    case 1:
        alert('Вы ввели число 1');
        break
    case 2:
    case 3:
        alert('Вы ввели число 2, или 3');
        break
    default:
        alert('ТОЛЬКО 0-3');
}