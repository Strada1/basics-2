function calc(e){
    let a = Number( document.querySelector('#num-1').value );
    let b = Number( document.querySelector('#num-2').value );
    let operation = document.querySelector('#operation').value;

    const operations = {
      add: a + b,
      multi: a * b,
      subtract: a - b,
      divide: a / b,
    }

    if( a != '' && b != '' ){
      document.querySelector('#result').textContent = operations[operation];
    } else {
      if( a == '' ){
        alert('Введите значение №1');
      }
      if( b == '' ){
        alert('Введите значение №2');
      }
    }
}
document.querySelector('#button').addEventListener('click', calc);