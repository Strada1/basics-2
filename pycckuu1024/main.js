function calc(oper,a,b) {
    switch (oper) {
        case '+':
            return (a + b);
            break;
        case '-':
            return (a - b);
            break;
        case '*' :
            return (a * b);   
        default: 
            break;
    } 
};
console.log(calc('+',22,22));
console.log(calc('-',11,12));
console.log(calc('*',5,5));