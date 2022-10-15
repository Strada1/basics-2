// let a = +prompt('Введите первое число: ')
// {
//     if (a == 0 || a) {
//         let b = +prompt('Введите второе число: ')
//         {
//             if (b == 0 || b) {
//                 let result
//                 let action = prompt('Выберите действие: + - * /')
//                 switch(action)
//                 {
//                     case '+': result = a + b; break;
//                     case '-': result = a - b; break;
//                     case '*': result = a * b; break;
//                     case '/': result = a / b; break;
//                     default: alert('Введено некорректное значение!')
//                 }
//                 alert(result)
//             }
//             else {
//                 alert('Введено некорректное значение!')
//             }
//         }
//     }
//     else {
//         alert('Введено некорректное значение!')
//     }
// }



function calc(action,num1,num2)
{
    if(isNaN(num1) || isNaN(num2))
    {
        alert('Вводите только числа!')
    }
    switch(action)
    {
        case '+': return num1 + num2; break;
        case '-': return num1 - num2; break;
        case '*': return num1 * num2; break;
        default: alert('Введено неверное значение!')
    }
}

// console.log(calc('+',2,3))
// console.log(calc('-',2,3))
// console.log(calc('*',2,3))
console.log(calc('*','dew',3))