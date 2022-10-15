let operation, first, second, result;
operation = prompt("Enter activity (add/multi/subtract):");
first = prompt("Enter first number");
second = prompt("Enter second number");
result = calc(operation, first, second);
if(result == "undefined operation") { //for beauty look :)
    alert(result);
} else {
    alert(`${first} ${operation} ${second} = ${result}`);
}

function calc(type, first, second) {
    if(type != "add" && Number(first) != NaN && Number(second) !=NaN) { //for concat strings
        first = +first;
        second = +second;
    }
    switch(type) {
        case "add":
            return first + second;
        case "multi":
            return first * second;
        case "subtract":
            return first - second;
        default:
            return "undefined operation";
    }
}