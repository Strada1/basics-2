function calcThis(id, a, b) {

	switch (id) {
		case 'add':
			console.log(a + b);
			break;

		case 'subtract':
			console.log(a - b);
			break;

		case 'multi':
			console.log(a * b);
			break;

		default:
			console.log('nothing');
			break;
	}
}

calcThis('add', 4, 7)
calcThis('subtract', 4, 7)
calcThis('multi', 4, 7)
calcThis('dhkbslkvb', 4, 7)