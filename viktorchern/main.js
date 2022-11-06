function buildFun(n){

	var res = [];

	for ( var i = 0; i < n; i++ ){
		let k = i;
		res.push(function(){
			return k;
		});
	}
	return res;
}
console.log(buildFun(10)[1]());

// Конец учебного года, судьбоносный момент твоего школьного отчета. Средние значения должны быть рассчитаны. Все ученики подходят к вам и умоляют вас подсчитать для них их средний балл. Легкий! Вам просто нужно написать сценарий.
// Возвращает среднее значение данного массива, округленное до ближайшего целого числа.
// Массив никогда не будет пустым.

function getAverage(marks){
	let sum = 0;
	for( value of marks ){
		sum += value;
	}
	return Math.floor(sum / marks.length);
}
console.log( getAverage([1,5,87,45,8,8]) );