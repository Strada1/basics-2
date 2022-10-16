
function calc_2 (action, a, b) {
    switch (action){
    case 'sum':
        return a + b ;
    case 'multi' :
        return a * b;
    case 'sub':
        return a - b ;
    default :
    console.log ('error');
}}

console.log(calc_2('sum', 1, 2));
console.log(calc_2('sub', 3, 2));
