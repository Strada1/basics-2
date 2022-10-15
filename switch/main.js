function calc(action, num1, num2) {
		switch (action) {
			case 'add':
				return num1 + num2;
				break;
			case 'multi':
				return num1 * num2;
				break;
			case 'substract':
				return num1 - num2;
				break;
			case 'correct':
				return numnode1 / num2;
				break;
		}
	}

	console.log(calc(`add`, 1, 2));
	console.log(calc(`multi`, 1, 2));
	console.log(calc(`substract`, 4, 2));
