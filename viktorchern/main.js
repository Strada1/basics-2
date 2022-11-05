// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to){
  let minNum = Number(from);
  let maxNum = Number(to);
  
  let timerId = setTimeout(function tick() {
    if( minNum <= maxNum ){
      console.log(minNum);
      minNum++;
      timerId = setTimeout(tick, 1000);
    } else {
      clearTimeout(timerId);
    }
  }, 1000);
}
printNumbers(3, 10);