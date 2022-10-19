/*
function calc (action, b, c) {
    b = Number (b)
	c = Number (c)
	
    if (action === 'add') {
        return b + c
    } else if (action ==='multi') {
        return b * c 
    } else if (action === 'subtract') {
        return b - c 
    }
}
console.log (calc('add', 1, 2));
console.log (calc('multi', 1, 2));
console.log (calc('subtract', 3, 2));
*/


function calc (action, b, c) {

	switch (action) {
		case 'add':
			return (b + c);
			break;
		case 'multi':
			return (b * c);
			break;
		case 'subtract':
			return (b - c);
			break;
		default: console.log ('Не верное значение!');
			break;
	}
}
console.log (calc('add', 1, 2));
console.log (calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
