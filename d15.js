function calc(operator, a, b){
       if(operator=='add')
          return a+b
       else if (operator=='multi')
            return a*b
       else if (operator=='subtract')
            return a-b
      else
          console.log('Unknown operation');        
  }

console.log(calc("add", 2, 3));
console.log(calc("multi", 2, 3));
console.log(calc("subtract", 2, 3));
