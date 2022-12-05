/*function printNumbers(from, to) {
    let i = from;
    let timerId = setInterval(function() {
        console.log(i);
        if (i == to) {
            clearInterval(timerId)
        } else {
            i++
        }}, 1000)
    
} */

function printNumbers(from, to) {
    let i = from;
  
    setTimeout(function x() {
      console.log(i);
      if (i < to) {
        setTimeout(x, 1000);
      }
      i++;
    }, 1000);
}
  
  printNumbers(1, 5)