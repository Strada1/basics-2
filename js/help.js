import { saveCity } from "./main.js"

const findIndex = (cityName) => saveCity.findIndex(item => item.cityName === cityName)

function getMounth(mounth) {
	for (const key in mounthArr) {
		if (+key === mounth) {
			return mounthArr[key]
		}
	}
}

function getDate(seconds) {
	let date = new Date(seconds * 1000);
	let dateObj = {};
	dateObj.hour = date.getHours() + (date.getTimezoneOffset() / 60)
	dateObj.minute = date.getMinutes()
	return dateObj
}

function zeroMake(number) {
	number = number > 9 ? number : "0" + number
	return number
}

let mounthArr = {
	1: "Jan",
	2: "Feb",
	3: "Mar",
	4: "Apr",
	5: "May",
	6: "June",
	7: "July",
	8: "Aug",
	9: "Sept",
	10: "Oct",
	11: "Nov",
	12: "Dec",
}

export { findIndex, getMounth, getDate, zeroMake }