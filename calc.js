/*  function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}


function min(a, b) {
    if a < b {
        return a;
    } else {
        retern b;
    }
}


function pow(a,b,c) {
return c = a ** b;
}





function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }



  function calc(x, n) {
    let result = x;
  
      result *= x;
    
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  alert( calc(x, n) );
  */
 
  //калькулятор
/*
  function calc(x, n, v) {
    let result = n;{

  if (x = '+') {
    result = n + v;
  } else if ( x = '-')  {
    result = n - v;
  } else if( x = '*')  {
    result = n * v;
  }
  
    return result;
  }

  let n = prompt("введите первое число", '');
  let x = prompt("выбирите действие:  + - * ", '');
  let v = prompt("введите второе число", '');
  alert( calc(x, n, v) );
  

  function calc(x, n, v) {


  if (x === '+') {
    result = +n + +v;
  } 
  if ( x === '-')  {
    result = n - v;
  } 
  if( x === '*')  {
    result = n * v;
  }
  
    return result;
  }

  let n = prompt("введите первое число", '');
  let x = prompt("выбирите действие:  + - * ", '');
  let v = prompt("введите второе число", '');
  alert( calc(x, n, v) );
*/

function calc(x, n, v) {
    switch (x) {
    
    case '+' : 
    result = +n + +v;
    break;
    
    case '-' :
    result = n - v;
    break;
    
    case '*' :
    result = n * v;
    break;
    
    }
        return result;
    }
    
      let n = prompt("введите первое число", '');
      let x = prompt("выбирите действие:  + - * ", '');
      let v = prompt("введите второе число", '');
      alert( calc(x, n, v) );