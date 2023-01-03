import { UI_ELEMENTS, showWeatherDetails } from "./UI.js";

window.location.hash = "now";


const form = document.querySelector('.form');
let city__name = document.querySelector('.city__name');//////
const city__list = document.querySelector('.city__list');
const now__temp = document.querySelector('.now__temp');
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
// const cityName = 'boston';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
let degrees;
const cityName = document.querySelector('.search__input'); /////

// определяем массив если localStorage пуст то массив будет следующим

let favoriteCityList = [];
if (localStorage.getItem('favoriteCityList')) {
  favoriteCityList = JSON.parse(localStorage.getItem('favoriteCityList'))
  favoriteCityList.forEach((city) => renderCity(city))
  // console.log(favoriteCityList[0].name);
  let url = `${serverUrl}?q=${favoriteCityList[0].name}&appid=${apiKey}&units=metric`;
  fetch(url)
        .then((res) => res.json())
        .then((data) => { 
            console.log(data)            
            city__name.textContent =  `${data.name}`
            now__temp.textContent = Math.round(`${data.main.temp}`)+` C°`
    })
} else {
  favoriteCityList = [
    {id: 1670256675529, name: 'Amur Oblast'},
    {id: 1670264104402, name: 'Baku'},
    {id: 1670268455470, name: 'Samara Oblast'},
    {id: 1670268460654, name: 'Bali'},
    {id: 1670268462774, name: 'Dane'},
    {id: 1670268465406, name: 'Kilo'},
    {id: 1670268467534, name: 'Nur-Sultan'},
  ]

  favoriteCityList.forEach((city) => renderCity(city))
  // console.log(favoriteCityList[0].name);
  let url = `${serverUrl}?q=${favoriteCityList[0].name}&appid=${apiKey}&units=metric`;
  fetch(url)
        .then((res) => res.json())
        .then((data) => { 
            console.log(data)            
            city__name.textContent =  `${data.name}`
            now__temp.textContent = Math.round(`${data.main.temp}`)+` C°`
    })
}

UI_ELEMENTS.LIKE.addEventListener('click', () => {
  const cityName = document.querySelector('.city__name').textContent;
  console.log((cityName));
  // поиск индекса введенного имени города
  const index = favoriteCityList.findIndex((city) => toString(city.name) === toString(cityName))
  // если такой же есть в массиве - значит выводим сообщение, нет - добавляем его в массив
  console.log(Boolean(!index));  
  if (!index) return alert('this city is already in favorite');
  addCityToLike(cityName)
  UI_ELEMENTS.LIKE.classList.toggle('now__sities-btn--like')
})

export function addCityToLike(cityName) {
    const newCity = {
      id: Date.now(),
      name: cityName,
    }    
  favoriteCityList.push(newCity)
  saveToLocalStorage()
  renderCity(newCity)
}

// при клике на имя города загрузить погоду по нему
document.querySelectorAll('.city').forEach((item) => {
  item.addEventListener('click', () => {
    // const parentNode = item.closest('.city__list');
    // console.log(parentNode);
    // const id = Number(parentNode.id)
    // console.log(item.textContent.trim());
    let url = `${serverUrl}?q=${item.textContent.trim()}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => { 
            // console.log(data)            
            city__name.textContent =  `${data.name}`
            now__temp.textContent = Math.round(`${data.main.temp}`)+` C°`
            showWeatherDetails(data)
    })
		.catch(error => alert(`Server not answered ${error}`));
    }
  );
})

// при клике на кнопку удаления запускаем удаление города из списка
document.querySelector('.city__list').addEventListener('click', removeCityFromLike)

// удаление города из списка
export function removeCityFromLike(event) {
  if (event.target.dataset.action !== 'delete' || event.target.dataset.action === 'btn-action--img') return
  const parentNode = event.target.closest('.city');
	const id = Number(parentNode.id)
  // favoriteCityList = favoriteCityList.filter((city) => city.id !== id)
  const index = favoriteCityList.findIndex((task) => task.id === id)
  // console.log(index);
  favoriteCityList.splice(index, 1)
  console.log(favoriteCityList);
  parentNode.remove();
  saveToLocalStorage();
}


// сохранение списка городов в LocalStorage
function saveToLocalStorage() {
	localStorage.setItem('favoriteCityList', JSON.stringify(favoriteCityList))
}

// рендер списка городов
function renderCity(city) {
  const taskHTML = `
    <li id ='${city.id}' class="city">
      <p>${city.name}</p>
      <button type="button" data-action="delete" class="btn-action">
			</button>
    </li>
  `
  city__list.insertAdjacentHTML('beforeend', taskHTML)
}

// function checkCityFavorite(cityName) {
//   const isValid = favoriteCityList.includes(cityName);
//   if (!isValid) {
//     UI_ELEMENTS.LIKE.classList.remove('now__sities-btn--like');
//   } else {
//     UI_ELEMENTS.LIKE.classList.add('now__sities-btn--like');
//   }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = document.querySelector('.city__name')
    // console.log(e.target[0].value);
    let url = `${serverUrl}?q=${e.target[0].value}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => { 
            // console.log(data)            
            city__name.textContent =  `${data.name}`
            now__temp.textContent = Math.round(`${data.main.temp}`)+` C°`
    })
		.catch(error => alert(`Server not answered ${error}`));
})

export function convertTime(time) {
  const date = new Date(time * 1000);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const result = `${hours}:${minutes}`;
  return result;
}