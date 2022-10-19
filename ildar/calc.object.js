const operations = { 
    ['add']: '+',
    ['multi']: '*',
    ['subtract']: '-',
} 

function calc(action,a,b) {
    switch(isNaN(a)||isNaN(b)){
        case true:
            return"введите число";
    }
        let result;
            switch(action){
                case operations.add:
                result = (a+b);
                break;
                case operations.multi:
                result = (a*b);
                break;
                case operations.subtract:
                result = (a-b);
                break;
            default:
            result = ("неверное значение")
            }
            return result;
    }
    console.log(typeof result)
console.log (calc ( '+', 10 , 9));
console.log (calc ('*', 10, 10));
console.log (calc ('-', 10, 9));