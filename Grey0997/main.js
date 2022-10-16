function calc (a,b,c){
    b = Number(b);
    c = Number(c);

    switch (a) {
        case 'add':
            return b + c ;

            break;
        case 'multi':
            return b * c ;
            break;
        
        case 'subtract' :
            return b - c ;
            
    }

}
console.log (calc("add",5,5));
console.log (calc("multi","f",5));
console.log (calc('subtract',11,1));