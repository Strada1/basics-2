function calc(
    operation,
    argument1,
    argument2) {
        let result;
    switch (operation) {
        case "add":
            result = argument1 + argument2;
            break;

        case "subtract":
            result = argument1 - argument2;
            break;
        case "multi":
            result = argument1 * argument2;
            break;
    } 
   return result;
}
console.log(calc("subtract", 4,6));

