export const OPERATIONS = {
	PLUS: '+',
	MULTIPLY: '*',
	MINUS: '-',
	DIVISION: '/',
};

export function CalculateResult(firstOperand, secondOperand, operation) {
	switch (operation) {
		case OPERATIONS.PLUS:
			return firstOperand + secondOperand;
		case OPERATIONS.MINUS:
			return firstOperand - secondOperand;
		case OPERATIONS.MULTIPLY:
			return firstOperand * secondOperand;
		case OPERATIONS.DIVISION:
			return firstOperand / secondOperand;
		default:
			break;
	}
}