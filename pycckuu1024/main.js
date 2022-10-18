'use strict'
const operations = {
    add : '+' ,
    sub : '-' ,
    multi : '*', 
};
function calc(oper,a,b) {
    switch (oper) {
        case operations.add:
            return (a + b);
            break;
        case operations.sub:
            return (a - b);
            break;
        case operations.multi :
            return (a * b);   
        default: 
            break;
    } 
};
console.log(calc('+',22,22));
console.log(calc('-',11,12));
console.log(calc('*',5,5));