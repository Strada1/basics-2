"use script"
//переключение табов
export const nowTable = document.getElementById('now');
export const detailsTable = document.getElementById('details');
export const forecastTable = document.getElementById('forecast');

export const detailsBtn = document.getElementById('detailsBtn');
export const detailsBtn3 = document.getElementById('detailsBtn3');

export const forecastBtn = document.getElementById('forecastBtn');
export const forecastBtn2 = document.getElementById('forecastBtn2');

export const nowBtn = document.getElementById('nowBtn');
export const nowBtn2 = document.getElementById('nowBtn2');
export const nowBtn3 = document.getElementById('nowBtn3');


export function changeListToDet(){
    nowTable.classList.add('none');
    forecastTable.classList.add('none');
    detailsTable.classList.add('active');
    detailsTable.classList.remove('none');
}

export function changeListToForecast(){
    nowTable.classList.add('none');
    detailsTable.classList.add('none');
    forecastTable.classList.add('active');
    forecastTable.classList.remove('none');
   
}

export function changeListToNow() {
    forecastTable.classList.add('none');
    detailsTable.classList.add('none');
    nowTable.classList.remove('none');
    nowTable.classList.add('active');
}



