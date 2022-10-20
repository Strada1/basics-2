function calc (action, num1, num2){
    const isValid = typeof num1 !== 'number' || typeof num2 !== 'number';
    if (isValid){
        alert('Error');
    }
    else{
        switch (operation['action']){
            case operation[action]:
                return num1 + num2;
                break;
            case operation[action]:
                return num1 * num2;
                break;
            case operation[action]:
                return num1 - num2;
                break;
        }
    }
}
const operation = {
    add: '+',
    multi: '*',
    substract: '-'
};
let action = prompt('Выберите операцию над числами (+,-,*):')
let num1 = +(prompt('Введите первое число: '))
let num2 = +(prompt('Введите второе число: '))
alert(calc(action,num1,num2))