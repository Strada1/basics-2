function calc(operator, a, b) {
    const operations = {
         add: a + b,
         multi: a * b,
         subtract: a - b,
     }
     if(operations[operator] !== undefined) 
       return operations[operator];
 }
 
 console.log(calc("add", 1, 2));
 console.log(calc("multi", 1, 2));
 console.log(calc("subtract", 3, 2));