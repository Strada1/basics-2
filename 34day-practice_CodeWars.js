// 1-st solve - IIFE
// первый вариант решения - через IIFE
function buildFun(n) {
  var res = [];
  for (var i = 0; i < n; i++) {
    (function (index) {
      res.push(function () {
        return index;
      });
    })(i);
  }
  return res;
}

// buildFun(10)[1]()
// for(var i = 0; i< 10; i++){
//   (buildFun(10)[i](), i);
// }

// 2-nd solve - add function
// второй вариант решения - создание доп функции и вызов ее
function buildFun(n) {
  var res = [];
  function createFunction(index) {
    return function () {
      console.log(index);
      return index;
    };
  }
  for (var i = 0; i < n; i++) {
    res.push(createFunction(i));
  }
  return res;
}

// buildFun(10)[1]()
// for(var i = 0; i< 10; i++){
//   (buildFun(10)[i](), i);
// }

//-------- Get the mean of an array------
// Return the average of the given array rounded down to its nearest integer.
function getAverage(marks) {

	let sum = marks.reduce(function(sum, el){
		return sum + el
	}, 0)
	// console.log(sum);
	return Math.floor(sum / marks.length)
}

// console.log(getAverage([2,6,2,2]));