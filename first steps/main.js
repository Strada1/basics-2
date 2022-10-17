// let numberOfCar = true;
// let region = ' 799 ';
// let car = "KIA Ceed JD ";
// let isMyCar = "606 + 799";

// console.log(typeof(numberOfCar));

// if (typeof(numberOfCar) == 'string') {
//     console.log('Type of numberOfCar is string');
//     } else if (typeof(numberOfCar) == 'number') {
//     console.log ('Type of numberOfCar is number');
//     } else if (typeof(numberOfCar)== 'boolean') {
//     console.log('type of numberOfCar is boolean');
//     }




// if (car == 'KIA Ceed JD ') {
//     console.log('Its my car')
//     } else {
//     console.log("Thats not my car")
//     }

// прикольная функция


// function calc (action, a, b) {
//     if (action === 'sum'){
//         return a + b;
//     } else if (action === 'multi') {
//         return a * b;
//     } else if (action === "sub") {
//         return a - b;
//     }
// }


// console.log(calc('sum',1,2));
// console.log(calc('multi',1,2));
// console.log(calc('sub', 3,2));


function calc_2 (action, a, b) {
    switch (action){
    case 'sum':
        return a + b ;
    case 'multi' :
        return a * b;
    case 'sub':
        return a - b ;
    default :
    console.log ('error');
}}

console.log(calc_2('sum', 1, 2));
console.log(calc_2('sub', 3, 2));
