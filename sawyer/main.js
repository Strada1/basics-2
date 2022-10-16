function calc(op, arg1, arg2) {

    let result;

    if(typeof arg1 == "number" && typeof arg2 == "number")
    {

        switch(op) {
            case "add":
                result = arg1 + arg2;
                break;

            case "multi":
                result = arg1 * arg2; 
                break; 

            case "subtract":
                result = arg1 - arg2;
                break;

            default:
                result = "wrong operator";          
        } 

    }
    else
        result = "wrong argument type";

    return result;
}

console.log(calc("add", 2, 4));