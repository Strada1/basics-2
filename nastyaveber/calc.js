function calc (identifier, a, b){
    switch(identifier){
        case 'add':
            return a + b;
            break; 
        case 'multi':
            return a * b;
            break;
         case 'substract':
            return a - b;
            break;
    }
  }
    
    s = calc ('substract', 2,2)
    console.log(s)