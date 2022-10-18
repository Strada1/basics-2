let cmd = prompt('Enter command. Supported (add, multy, substract)');
let a = +prompt('First operand');
let b = +prompt('Seccond operand');

let calc = (c, a, b) => {
    //console.log(c,a,b)
    if(c == 'add') return a + b
    else if(c == 'multy') return a * b
    else if(c == 'substract') return a - b
    else {
        alert('Unknown command');
        return null;
    }

}

let result = calc(cmd, a, b);
if(result === Number(result))
    alert(`Result: ${result}`)
