function calc(action,a,b) {
switch (action) {
   case 'add':
    return(a + b);
    break;
   case 'multi':
     return(a*b);
     break;
   case 'substract':
      return(a-b);
      break;
        }
           }
console.log(calc('add',1,2));
console.log(calc('multi',1,2));
console.log(calc('substract',3,2));