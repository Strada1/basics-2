function buildFun(n){

	var res = []

	for (var i = 0; i < n; i++){
        function just (insideIndex) {
            return function(){
                console.log(insideIndex);
                //или просто return insideIndex для прохода теста на КодВорс 
            }
        }
		res.push(just(i))
	}
	return res
}


const callin = buildFun(10)[3];
callin();
