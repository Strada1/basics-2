function calc (operation, num1, num2){
    if (operation == "add"){
        return num1 + num2;
    }
    else if (operation == "multi"){
        return num1 * num2;
    }
    else if (operation == "subtract"){
        return num1 - num2;
    }
    else{
        return "Неизвестный оператор!"
    }
}
let num1 = +(prompt('Введите первое число: ',''));
let num2 = +(prompt('Введите второе число: ',''));
let operation = prompt('Введите оператор (add, multi или subtract','');
alert(calc(operation, num1, num2))