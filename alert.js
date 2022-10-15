/*вариант первый через if*/ 
let a = prompt('num 1');
let operator = prompt('to do what');
let b = prompt('num 2');
function calc(operator, a, b) {
    if (a == Number(a) && b == Number(b)) {
        (operator == "+") ? (c = a + b) : (operator == "-") ? (c = a - b) : (operator == "*") ? (c = a * b) : (alert("no way"));
        return c;
    }
    else { alert('error') };
}
let ret = calc(operator, a, b);
alert(ret);
 /*вариант второй через switchalert*/
let a = prompt('num 1');
let operator = prompt('to do what');
let b = prompt('num 2');
function calc(operator, a, b) {
    if (a == Number(a) && b == Number(b)) {
        a = +a;
        b = +b;
        switch (operator) {
            case "+": (c = a + b);
                break;
            case "-": (c = a - b);
                break;
            case "*": (c = a * b);
                break;
            default: (alert("no way"));
        }
        return c;
    }
    else { alert ('error') };
}
let res=calc(operator, a, b);
alert(a+operator+b+"="+ res);