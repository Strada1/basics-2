function calc(x, a, b){
    switch(x){
    case "add":
    return a+b
    case 'multi':
    return a*b
    case'subtract':
    return a-b
   default:
    console.log('Unknown operation'); }       
}

console.log(calc("add", 2, 3));
console.log(calc("multi", 2, 3));
console.log(calc("subtract", 2, 3));