"use script"

let storage = [];

storage.getFavoriteCities = function(){
    return JSON.parse(localStorage.getItem('query'));
}

storage.saveFavoriteCities = function(value){
    localStorage.setItem('query', JSON.stringify(value));
}

storage.getCurrentCity = function(){
   return localStorage.getItem('currentCity');
}
storage.saveCurrentCity = function(value){
    localStorage.setItem('currentCity', value)
}

//поиск города

const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
let inpCity = document.getElementById('inpCity');
const searchCity = document.getElementById('searchCity');

let inpCity2 = document.getElementById('inpCity2');
const searchCity2 = document.getElementById('searchCity2');

const listDetails = document.querySelector('.list_details');
const temper = document.getElementById('temp');
const city = document.getElementById('cityCurrentName');
const imageTemp = document.querySelector('.imageTemp img');

let currentCity = storage.getCurrentCity();

cityTemp();

function cityTemp (){
    let cityName = `${inpCity.value}`;
    let cityName2 = `${inpCity2.value}`;
    if(inpCity.value == "" && inpCity2.value ==""){
        storage.getCurrentCity
    }
    else if(inpCity.value == ""){
    currentCity = cityName2;    
    }
    else{
        currentCity = cityName;
    }
    
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${currentCity}&appid=${apiKey}`;

    
    let response = fetch(url);
    
    response.onload = () => resolve(response);
    response.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));

    response
    .then(
        response => response.json()
    )
    .then(
        response => {
           const { 
                main: {temp, feels_like },
            sys: {sunrise, sunset},
            weather:{
                0: {main}
            },name} = response;

            temper.textContent = `${Math.floor(temp - 273)}°`;
            city.textContent = name;
            imageTemp.src = `https://openweathermap.org/img/wn/${response.weather[0]['icon']}@4x.png`
            currentCity = name;
            storage.saveCurrentCity(currentCity);

            
            document.querySelector('.chosenCity').textContent = name;
            listDetails.firstElementChild.textContent = `Temperature: ${Math.floor(temp - 273)}°`;
            listDetails.children[1].textContent = `Feels like: ${Math.floor(feels_like - 273)}°`;
            listDetails.children[2].textContent = `Weather: ${main}`;
            listDetails.children[3].textContent = `Sunrise: ${new Date(sunrise * 1000).getHours()}:${new Date(sunrise * 1000).getMinutes()}`;
            listDetails.children[4].textContent = `Sunset: ${new Date(sunset * 1000).getHours()}:${new Date(sunset * 1000).getMinutes()}`;
        
            
        let fav = favouriteCities.find(item => item.name == city.textContent);
        if(fav){
            svg.classList.add('filled');
        }
        else{
            svg.classList.remove('filled');
        }
        console.log(response);
    },
    
    ).catch(alert)
}

searchCity.addEventListener('click', function(e){
    e.preventDefault();
    cityTemp();
    
})

searchCity2.addEventListener('click', function(e){
    e.preventDefault();
    cityTemp();
    
})

//добавление в избранное

let like = document.getElementById('like');
const cities = document.querySelector('.listOfCities');
let svg = document.getElementById('svg_2');
const cities2 = document.querySelector('.listOfCities2');
let list = [];

const favouriteCities = storage.getFavoriteCities();

function pushCity(newTask){

    newTask = {
        name : newTask,
    };
    list.push(newTask);
    favouriteCities.push(newTask);
    storage.saveFavoriteCities(favouriteCities)
 
}

function deleteCity(name){
    let obj = list.map(x => {
        return x.name;
    }).indexOf(name);
    list.splice(obj, 1);
    favouriteCities.splice(obj, 1);
    storage.saveFavoriteCities(favouriteCities);
}

like.addEventListener('click', function(){
    if (favouriteCities.length === 0){
        pushCity(city.textContent);
        svg.classList.add('filled');
        render();
        return;
    }

    if(favouriteCities.length > 0){
        let fav = favouriteCities.find(item => item.name == city.textContent);
            if(fav){
                console.log('gg');
                deleteCity(city.textContent);
                svg.classList.remove('filled');
                render();          
            }
            else{
            
                pushCity(city.textContent);
                svg.classList.add('filled');
                render();
            }
}
})

render();

function render(){
    cities.textContent = "";
    cities2.textContent ="";
    storage.getFavoriteCities();
    favouriteCities.forEach(elem => {
        addCity(elem.name)
    })
    
}


function addCity(favCity){
    let li = document.createElement('li');
    li.className = "li";
    li.textContent = favCity;
    
    let close = document.createElement('pop_up_close');
    close.className = 'pop_up_close';
    close.innerHTML = '&#10006';
    
    let li2 = document.createElement('li');
    li2.className = "li";
    li2.textContent = favCity;
    
    let close2 = document.createElement('pop_up_close');
    close2.className = 'pop_up_close';
    close2.innerHTML = '&#10006';
    
    li.append(close);
    li2.append(close2);
    cities.append(li);
    cities2.append(li2);

    // close.addEventListener('click', function(){
    //     deleteCity(favCity);
    //     render();
    // })
            
    li.addEventListener('click', function(){
        let cityName = `${li.firstChild.textContent}`;
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
        let response = fetch(url);
                
        response.onload = () => resolve(response);
        response.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));
                
        response
            .then(
                response => response.json()
                )
            .then(
                response => {
                    const { 
                        main: {temp, feels_like },
                    sys: {sunrise, sunset},
                    weather:{
                        0: {main}
                    },name} = response;
    
                    temper.textContent = `${Math.floor(temp - 273)}°`;
                    city.textContent = name;
                    imageTemp.src = `https://openweathermap.org/img/wn/${response.weather[0]['icon']}@4x.png`
                    currentCity = name;
                    storage.saveCurrentCity(currentCity);
    
                
                    document.querySelector('.chosenCity').textContent = name;
                    listDetails.firstElementChild.textContent = `Temperature: ${Math.floor(temp - 273)}°`;
                    listDetails.children[1].textContent = `Feels like: ${Math.floor(feels_like - 273)}°`;
                    listDetails.children[2].textContent = `Weather: ${main}`;
                    listDetails.children[3].textContent = `Sunrise: ${new Date(sunrise * 1000).getHours()}:${new Date(sunrise * 1000).getMinutes()}`;
                    listDetails.children[4].textContent = `Sunset: ${new Date(sunset * 1000).getHours()}:${new Date(sunset * 1000).getMinutes()}`;
            
                    let fav = favouriteCities.find(item => item.name == city.textContent);
                        if(fav){
                            svg.classList.add('filled');
                            }
            console.log(response);
            
        },
       
        ).catch(alert)
    })
}

//переключение табов

import {detailsBtn, detailsBtn3, forecastBtn, forecastBtn2, nowBtn, nowBtn2, nowBtn3} from "./changingTabs.js";
import {changeListToDet, changeListToForecast, changeListToNow} from "./changingTabs.js";

detailsBtn.addEventListener('click', changeListToDet);
detailsBtn3.addEventListener('click', changeListToDet);

forecastBtn.addEventListener('click', changeListToForecast);
forecastBtn2.addEventListener('click', changeListToForecast);

nowBtn.addEventListener('click', changeListToNow);
nowBtn2.addEventListener('click', changeListToNow);
nowBtn3.addEventListener('click', changeListToNow);



