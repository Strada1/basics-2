function calc(operation, a, b)
{
    switch(operation)
    {
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'subtract':
            return a - b;
            break;
        default:
            console.log('Такой операции нет');
    }
}

console.log(calc('add', 1, 3));

console.log(calc('multi', 4, 9));

console.log(calc('subtract', 9, 1));
