function calc (opp, num1, num2){
    const isValid = typeof num1 !== 'number' || typeof num2 !== 'number';
    if (isValid){
        alert('Error');
    }
    else{
        switch (opp){
            case operation.add:
                return num1 + num2;
                break;
            case operation.multi:
                return num1 * num2;
                break;
            case operation.substract:
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
console.log(calc('+',1,2));
console.log(calc('*',2,2));
console.log(calc('-',4,2));