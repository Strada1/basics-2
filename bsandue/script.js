function calc(a,b,c){
	switch(c){
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '%':
			return a % b;
		case '**':
			return a ** b;
		case '*':
			return a * b;
		case '':
			return 'Ошибка ввода.';				
		default:
			return 'Попробуйте снова!';
	}
	}
	console.log(calc(22, 2, '+'));
	console.log(calc(22, 2, '-'));
	console.log(calc(22, 2, '%'));
	console.log(calc(22, 2, '**'));
	console.log(calc(22, 2, '*'));
	console.log(calc(22, 2, ''));
	console.log(calc(22, 2, 'j'));