export function getCelsius(num) {
    try{
        if(isNaN(num)) throw new SyntaxError('Ошибка');
        let res = Math.floor(num - 273.15);
        return res;
    } catch(err) {
        console.log('Ошибка');
    }
};

export function getHumanHours(date) {
    let H = addZeroToNumber(date.getHours());
    let M = addZeroToNumber(date.getMinutes());
    return `${H}:${M}`
};

export function dateTimeToHuman(value) {
    let day = value.getDate();
    let month = months[value.getMonth()];
    return `${day} ${month}`
}

export function addZeroToNumber(value) {
    return (value < 10) ? '0' + value : value
}

export let months = [
    "January","February","March",
    "April","May","June",
    "July","August","September",
    "October","November","December"
];