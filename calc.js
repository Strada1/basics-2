//calc if,else.
/*
operation = prompt('Введите действие', 'add, sub, multi');
a = +prompt('Введите первое число');
b = +prompt('Введите второе число');
let result;

function calc(operation, a, b){

    if (operation == 'add') {
        return result = (a+b)
    } if (operation == 'multi'){
        return result = (a*b)
    } if (operation == 'sub'){
        return result = (a-b)
    }
}

calc(operation, a, b)
alert(result)
*/

//calc switch
operation = prompt('Введите действие', 'add, sub, multi');
a = +prompt('Введите первое число');
b = +prompt('Введите второе число');
let result

switch (operation){
    case 'add':
        result = (a+b);
        break
    
    case 'sub':
        result = (a-b);
        break
    
    case 'multi':
        result = (a*b);
        break

    default:
        result == false;
}

alert(result)