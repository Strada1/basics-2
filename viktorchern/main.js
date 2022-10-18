// console.log('Hello world');
// let testValue = 'Hello hello';
// let nummItem = 5;
// console.log(testValue);
// console.log(nummItem);
// console.log(1/0);
// console.log("не число" / 2);
// const bigInt = 1234567890123456789012345678901234567890n;
// console.log(bigInt);
// let nameFieldChecked = true;
// console.log(nameFieldChecked);
// let isGreater = 4 > 1;
// console.log(isGreater);
// let plusNum = 5 + 8;
// let age = null;
// console.log(age);

//#6 Lesson
// console.log('Hello' + 'World');
// console.log('Hello' + 5);
// console.log('Hello' + true);
// console.log(5 + true);
// console.log(5 + NaN);
// console.log(5 + null);
// console.log(undefined + NaN);
// console.log(undefined + 3);
// console.log('2' + 5);
// console.log(+'2' + 5);

//#9 Lesson
// console.log( 'а' < 'А' );
// console.log( 'Коты' > 'Коя' );
// console.log( 'Сонныйввввввв' > 'Соня' );
// console.log( 'Сонный' == 'Сонный' );
// console.log( '2' > 1 ); // true, строка '2' становится числом 2
// console.log( '01' == 1 ); // true, строка '01' становится числом 1
// console.log( true === 1 );
// console.log( false == 0 );
// console.log(null == undefined);
// let a;
// console.log(a);
// console.log(NaN < null);
// console.log(null >= 0);

// console.log( undefined >= NaN);
// console.log( undefined < 0 );
// console.log( undefined >= 0 );

// Lesson #10
// let age = 18;
// let out;
// let result = (age > 10) ? 'Уже взрослый ))' : 'Мылыш ))';
// if (age >= 18){
//     out = 'Взрослый, покупай';
// }
// else {
//     out = 'Пиво не продадим )';
// }
// console.log(out);
// let age2, result2;
// let value1 = 0;
// let value2 = undefined;
// let value3 = NaN;
// result2 = value1 || value2 || value3;
// console.log(result2);
// let result3;
// let value1_1 = '0';
// let value2_1 = '111';
// let value3_1 = 'NaN';
// result3 = value1_1 && value2_1 && value3_1;
// console.log(result3);

//#10 Функции
// function showMessage(from, text) { // аргументы: from, text
//     console.log(from + ': ' + text);
// }
  
//   showMessage('Аня',); // Аня: Привет! (*)
//   showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)

// function showMessage(from, text = "текст не добавлен") {
//     console.log( from + ": " + text );
// }

// showMessage("Аня", 'ddddd'); // Аня: текст не добавлен
// showMessage("Аня"); // Аня: текст не добавлен

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('А родители разрешили?');
//     }
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
// } else {
//     alert( 'Доступ закрыт' );
// }

// function calc(operation, a, b){
//     if ( operation == 'add' ){
//         return a + b;
//     } else if ( operation == 'multi' ) {
//         return a * b;
//     } else if ( operation == 'subtract' ) {
//         return a - b;
//     } else {
//         return 'Что-то пошло не так...'
//     }
// }
// console.log( calc('multi', 10, 30) );

// function calc2(operation, a, b){
//     switch(operation) {
//         case 'add':
//             return a + b;
//             break;
//         case 'multi':
//             return a * b;
//         case 'subtract':
//             return a - b;
//         default:
//             return 'Что-то пошло не так...';
//     }
// }
// console.log( calc2('subtract', 30, 10) );

// Цыклы
for (let i = 0; i <= 19; i++){
    console.log(i);
}