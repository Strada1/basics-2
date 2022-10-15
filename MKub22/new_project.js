"use strict"

let x = +prompt('x?', '');
let n = +prompt('n?','');
 
function add(x,n){
    return x + n;
}
function multi(x,n){
    return x * n;
}
function substract(x,n){
    return x - n;
}
if (!isNaN(x) && !isNaN(n)) {
switch (prompt('+,- или *')){
        case "+":
            function calc(x, n, func){
            const result = func(x,n);
            return result;
            }        
            alert(calc(+x,+n, add));
        break;
        case "-":
             alert(calc(+x,+n, substract));
        break;
        case "*":
             alert(calc(+x,+n, multi));
            break;
            default:
                alert("А что вам надо?");
}
}
else{
    alert('Это не число'); 
}

    