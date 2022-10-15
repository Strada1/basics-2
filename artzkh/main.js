

function calc(action, a, b)
{
    switch (action)
    {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multi':
            return a * b;
        default:
            return NaN;
    }
}

// test calc function
console.log(calc('add', 3, 2));         // expect 5
console.log(calc('substract', 3, 2));   // expect 1
console.log(calc('multi', 3, 2));       // expect 6
console.log(calc('not_action', 3, 2));  // expect NaN
