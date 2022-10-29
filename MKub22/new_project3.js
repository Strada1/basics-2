"use strict"
document.getElementById('plus');
document.getElementById('multi');
document.getElementById('substract');

let x;
let n;

// let x = +prompt('x?', '');
// let n = +prompt('n?','');
 
function add(x,n){
    return x + n;
}
function multi(x,n){
    return x * n;
}
function substract(x,n){
    return x - n;
}
function calc(x, n, func){
    const result = func(x,n);
    return result;
}    
const operations = {
    add:"+",
    multi:"*",
    substract:"-",
}    
if (!isNaN(x) && !isNaN(n)) {
switch (prompt('+,- или *')){
        case "+":
            alert(calc(+x,+n, operations));
        break;
        case "-":
             alert(calc(+x,+n, operations));
        break;
        case "*":
             alert(calc(+x,+n, operations));
            break;
            default:
                alert("А что вам надо?");
}
}
else{
    alert('Это не число'); 
}
