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
console.log (calc ( operations.add, 10 , 9));
console.log (calc (operations.multi, 10, 10));
console.log (calc (operations.subtract, 10, 9));