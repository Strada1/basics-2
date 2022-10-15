function calc (calculation, a , b ){
switch (calculation) {
    case 'add':
        return (a + b);
    
    case 'subtraction':
        return (a - b);
        
    case 'multiplication':
        return (a * b);
        
    default:
     return 'can not calculate';
}
}
console.log(calc('add', 1 , 2 ))
console.log(calc('subtraction', 3 , 2 ))
console.log(calc('multiplication', 1 , 2 ))