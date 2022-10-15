let result = calc('add', 5, 10)

function calc (action, a, b)
{
    switch(action)
    {
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'multi':
            return a*b;
        default:
            console.log("I can't do it");
            break;
    }
}

console.log(result);