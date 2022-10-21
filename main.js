let cmd = prompt('Enter command. Supported (add, multy, substract)');
let a = +prompt('First operand');
let b = +prompt('Seccond operand');

const OPERATIONS = {
    'add': '+',
    'sub': '-',
    'multy': '*'
}

let calc = (c, a, b) => {
    let command;
    for(let k in OPERATIONS){
        if(OPERATIONS[k] == c) {
            command = k;
            break;
        }
    }
    switch (command){
        case 'add':
            return a + b
            break;
        case 'sub':
            return a - b
            break;
        case 'multy':
            return a * b
            break;
        default:
            console.log('Unknown command ', c)
            break;
    }
}

let result = calc(cmd, a, b);
if(result === Number(result))
    alert(`Result: ${result}`)
