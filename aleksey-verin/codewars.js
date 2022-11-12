// Первая задача

function buildFun(n){

	var res = []

	for (var i = 0; i< n; i++){
    let q = i
		res.push(function(){
			return q 
		})
	}
	return res
}

console.log(buildFun(10)[4]())

// Вторая задача

function getAverage(marks){
    return Math.floor(marks.reduce((sum,current) => sum + current) / marks.length)
}
  
console.log(getAverage([1,1,1,1,1,1,1,1,2]))
