//1
function ucFirst(str){
	if ( str.trim().length != 0 ){
		let result = '';
		for ( let i = 0; i < str.length; i++ ){
			if ( i == 0 ){
				result += str[i].toUpperCase();
			}
			else{
				result += str[i];
			}
		}
		return result;
	} else {
		return 'Введите хоть что-нибудь';
	}
}
console.log(ucFirst('вася'));

//2
function checkSpam(str){
	let strLover = str.trim().toLowerCase();
	if( strLover.length != 0 ){
		if( strLover.indexOf('viagra') == -1 || strLover.indexOf('xxx') == -1 ){
			return true;
		} else {
			return false;
		}
	} else {
		return 'Искать негде, введите хоть что-нибудь';
	}
}
console.log(checkSpam('buy ViAgRA now, and see xXx video )))'));

//3
function truncate(str, maxlength){
	let strNew = str.trim();
	let maxlengthNew = Number(maxlength);
	if(strNew.length > 0 && maxlengthNew != undefined && maxlengthNew != NaN ){
		if( strNew.length > maxlengthNew ){
			return strNew.slice(0, (maxlengthNew - 3)) + '...';
		}
	} else {
		return 'Вы чет намудрили, проверьте что вы вводите';
	}
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

//4
function showVerticalMessage(str){
	let strNew = str.trim();
	let result = '';
	if( strNew.length > 0 ){
		if( strNew.length > 7 ){
			strNew = strNew.slice(0, 7);
		}
		for( let i = 0; i < strNew.length; i++ ){
			if( i == 0 ){
				result += strNew[i].toUpperCase() + '\n';
			} else {
				result += strNew[i] + '\n';
			}
		}
		return result;
	} else {
		return 'Да введите уже значение';
	}
}
console.log(showVerticalMessage('strada'));