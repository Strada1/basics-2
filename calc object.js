const operations={add:'+',multi:"*",sub:"*"};
function calc(x, a, b){
    switch(x){
    case operations.add:
    return a+b
    case operations.multi:
    return a*b
    case operations.subtract:
    return a-b
   default:
    console.log('Unknown operation'); }       
}
console.log(calc(operations.add, 2, 3));
console.log(calc(operations.multi, 2, 3));
console.log(calc(operations.subtract, 2, 3));
console.log(calc("gg", 2, 3));
