export function calc(){
  const A = Number( document.querySelector('#num-1').value );
  const B = Number( document.querySelector('#num-2').value );
  const OPERATION = document.querySelector('#operation').value.toUpperCase();

  const OPERATIONS = {
    ADD: A + B,
    MULTI: A * B,
    SUBTRACT: A - B,
    DIVIDE: A / B,
  }

  if( A != '' && B != '' ){
    const RESULT_VALUE = OPERATIONS[OPERATION]
    const RESULT_ITEM = document.createElement('div');

    RESULT_ITEM.className = 'calc__result-item';
    RESULT_ITEM.textContent = RESULT_VALUE;
    document.querySelector('#result').textContent = RESULT_VALUE;
    document.querySelector('#calc__result-wrap').append(RESULT_ITEM);
  } else {
    if( A == '' ){
      alert('Введите значение №1');
    }
    if( B == '' ){
      alert('Введите значение №2');
    }
  }

  const RESULT_ITEMS = document.querySelectorAll('.calc__result-item');
  RESULT_ITEMS.forEach(function(elem) {
    elem.addEventListener('click', function(){
      this.remove();
    });
  });
}