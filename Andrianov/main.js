

function buildFun(n){

	var res = [];
	for (var i = 0; i < n; i++){
		(function idx(index) {
            res.push(function() {
               return index;
            })
        })(i);
	}
	return res;
}
console.log(buildFun(5));

function getAverage(marks){
    let index;
    let count = marks.reduce((sum, item, idx) => {
         index = idx + 1;
        return (sum + item);
    },0)
    return Math.floor(count/index);
  }
  console.log(getAverage([1,5,87,45,8,8]));
  