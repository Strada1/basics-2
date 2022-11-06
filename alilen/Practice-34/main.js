function buildFun(n) {

	var res = []

	for (var i = 0; i < n; i++) {
		(function () {
			var j = i;
			res.push(function () {
				console.log(j)
				return j
			})
		})();

	}
	return res
}

for (var i = 0; i < 10; i++) {
	console.log(Object.is(buildFun(10)[i](), i))
}