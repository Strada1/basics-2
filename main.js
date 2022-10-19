
function callc(activ, a, b){
    const operations = {
        add: '+',
        multi: '*',
        sub: '-',
    };
    switch(activ){
        case operations.add:
            return a + b;
        case operations.multi:
            return a * b;
        case operations.sub:
            return a - b;
        default:
            return 'Error!!!';
    }
}
console.log(callc('+', 3, 3));
console.log(callc('*', 3, 3));
console.log(callc('-', 3, 3));
console.log(callc('d', 5, 3));