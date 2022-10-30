
let operations = {
    add: 'add',
    multi: "multi",
    sub: "sub",
}

function calc(operations, a, b) {
switch (operations) {
    case 'add':
    return a + b;
    case 'multi':
    return a * b;
    case 'sub':
    return a - b;
}


}
console.log(calc(operations.add,1,2));
console.log(calc(operations.multi,2,1));
console.log(calc(operations.sub,2,2));
