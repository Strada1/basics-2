// function callc (id, a, b) {
//     if(id ==='add'){
//         return a + b
//     }else if(id ==='multi'){
//         return a * b
//     }else if(id ==='subtract'){
//         return a - b
//     }
//     return 'Нет такой команды !!!'
// }
// console.log(callc('vvv', 10, 3));
// console.log(callc('multi', 10, 3));
// console.log(callc('subtract', 10, 3));

function callc (id, a, b) {
    switch(id){
        case 'add': 
            return a + b;
            break;
        case 'multi': 
            return a * b;
            break;
        case 'subtract': 
            return a - b;
            break;
        default:
            return 'Нет такой команды !!!';
    }
}
console.log(callc('vvv', 10, 3));
console.log(callc('multi', 10, 3));
console.log(callc('subtract', 10, 3));