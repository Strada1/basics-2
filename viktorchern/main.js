function calc2(operation, a, b){
    a = Number(a);
    b = Number(b);
    const operations = {
        add: a + b,
        multi: a * b,
        subtract: a - b,
    }

    if ( operation in operations ){
        return operations[operation];
    }
    return 'Error, error...';
}
let summ = calc2( 'add', '30', 20 );
console.log( summ );