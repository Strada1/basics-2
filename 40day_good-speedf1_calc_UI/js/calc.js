export const OPERATIONS = {
	PLUS: '+',
	MULTIPLY: '*',
	MINUS: '-',
	DIVISION: '/',
};

export function CalculateResult(firstOperand, secondOperand, operation) {

	try {
		switch (operation) {
			case OPERATIONS.PLUS:
				return firstOperand + secondOperand;
			case OPERATIONS.MINUS:
				return firstOperand - secondOperand;
			case OPERATIONS.MULTIPLY:
				return firstOperand * secondOperand;
			case OPERATIONS.DIVISION:
				if (+secondOperand === 0) {
					console.log('divide on zero not allowed!!!');
					throw new SyntaxError('divide on zero not allowed!!!')
				}
				return firstOperand / secondOperand;
			default:
				break;
		}
		
	} catch (error) {
		alert(error.message);
		document.querySelector('.calc__number--two').focus();
		return 'error';
	}
	
}