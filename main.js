function buildFun(n){
	var res = [];
  for (var i = 0; i < n; i++){
    (function(index) {
      res.push(function () {
      return index
    });
      })(i);
	}
	  return res
}
//---------------------------------------
function getAverage(marks){
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    count += marks[i]
  }
  return Math.floor(count / marks.length)
}