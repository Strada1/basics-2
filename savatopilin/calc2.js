function calc(option, a, b){
    switch (option) {
        case ('+'):
            return (a + b);
        case ('-'):
            return (a - b);
        case ('*'):
            return(a * b);

    }
}
console.log(calc('+',3 , 5));
console.log(calc('-', 3, 5));
console.log(calc('*', 3, 5));
