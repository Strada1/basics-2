// не совсем по заданию, но я ж не знал что этот код попадёт на ревью )

function calc(oper,a,b){
    oper = oper.toLowerCase();
    switch (oper){
    case 'add':
        return a + b;        
    case 'mult':
            return a * b;
    case 'minus':
        return a - b;
    case 'div':
        if (b!=0) {return a / b;} 
        else{ return 'Делить на ноль нельзя!';
        }
    }
}

const  result = calc ('add', 2, 2);
console.log(result);