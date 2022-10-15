function calc(action,a,b) {
    switch(isNaN(a)||isNaN(b)){
        case true:
            return"введите число";
    }
    let result;
    switch(action){
        case 'add':
        result=a+b;
        break;
        case 'multi':
        result = a*b;
        break;
        case 'subtract':
        result = a-b;
        break;
    default:
    result = ("неверное значение")
    }
    return result;
}

console.log (calc ('add', 1 , 2));
console.log (calc ('multi', 1, 2));
console.log (calc ('subtract', 3, 2));