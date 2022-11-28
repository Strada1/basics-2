const menuNow = document.querySelector('.container__info')
const buttonNow = document.querySelector('.container__now')
const menuDetails = document.querySelector('.container__info__2')
const buttonDetails = document.querySelector('.container__details')
const menuForecast = document.querySelector('.container__info__3')
const buttonForecast = document.querySelector('.container__forecast')

buttonNow.addEventListener('click', swapOnNow)
buttonDetails.addEventListener('click', swapOnDetails)
buttonForecast.addEventListener('click', swapOnForecast)


function swapOnDetails(){
	menuForecast.hidden = true
	menuNow.hidden = true
	menuDetails.hidden = false
	buttonDetails.style.background = '#000';
	buttonDetails.style.color = '#fff';
	buttonDetails.style.border = '1px solid #000000'
	buttonForecast.style.background = '#fff';
	buttonForecast.style.color = '#000';
	buttonForecast.style.border = '1px solid #000000'
	buttonNow.style.background = '#fff';
	buttonNow.style.color = '#000';
	buttonNow.style.border = '1px solid #000000'
}

function swapOnForecast(){
	menuForecast.hidden = false
	menuNow.hidden = true
	menuDetails.hidden = true
	buttonForecast.style.background = '#000';
	buttonForecast.style.color = '#fff';
	buttonForecast.style.border = '1px solid #000000'
	buttonNow.style.background = '#fff';
	buttonNow.style.color = '#000';
	buttonNow.style.border = '1px solid #000000'
	buttonDetails.style.background = '#fff';
	buttonDetails.style.color = '#000';
	buttonDetails.style.border = '1px solid #000000'
}

function swapOnNow(){
	menuForecast.hidden = true
	menuNow.hidden = false
	menuDetails.hidden = true
	buttonNow.style.background = '#000';
	buttonNow.style.color = '#fff';
	buttonNow.style.border = '1px solid #000000'
	buttonForecast.style.background = '#fff';
	buttonForecast.style.color = '#000';
	buttonForecast.style.border = '1px solid #000000'
	buttonDetails.style.background = '#fff';
	buttonDetails.style.color = '#000';
	buttonDetails.style.border = '1px solid #000000'
}


