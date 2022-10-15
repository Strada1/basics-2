'use strict'

console.log(calc('aadd', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
/* 
function calc (operate, a, b) {
    if (operate == 'add') {
        return (a + b);
    } else if (operate == 'multi') {
        return (a * b);
    } else if (operate == 'subtract') {
        return (a - b);
    } else {
        return 'Не верно задана операция';
    }
} */
/* (
function calc (operate, a, b) {
    return (operate == 'add') ? a + b : (operate == 'multi') ? (a * b) : (operate == 'subtract') ? 
    (a - b) : 'Не верно задана операция'
}
 */

function calc (operate, a, b) {
    switch (operate) {
        case 'add':
            return (a + b);
            break;
        case 'multi':
            return (a * b);
        case 'subtract':
            return (a - b);
        default:
            return 'Нет такой операции';
    }
}