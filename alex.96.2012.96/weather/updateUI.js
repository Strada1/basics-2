import { name,weather,detailContainer,details } from "./variables.js"
export function updateUINow(data){
    if(data.message==='city not found'){
        alert('city not found')
    }
    const temperature=document.querySelector('.temperature')
    name.textContent=data.name
    temperature.textContent=ConvCelsius(data.main.temp)
    const imgWeather=document.querySelector('.weather-img')
    imgWeather.src=(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    DetailsUI(data)
    

 }

 function ConvCelsius(num){
    let res=0
    res=Math.ceil(num-273,15)
    return(res)
  }
 
  function DetailsUI(data){
    detailContainer.classList='detail-container'
    if(details.classList.contains('active')){
        detailContainer.style.display='block'
    }
   if(!details.classList.contains('active')){
    detailContainer.style.display='none'
   }
    console.log(data)
    detailContainer.innerHTML=''
    const name=document.createElement('div')
    name.textContent=data.name
    detailContainer.append(name)
    weather.append(detailContainer)
    const temperature=document.createElement('div')
    temperature.textContent=`Temperature:${ConvCelsius(data.main.temp)} `
    detailContainer.append(temperature)
    const feelsLike=document.createElement('div')
    feelsLike.textContent=`Feel like: ${ConvCelsius(data.main.feels_like)}`
    detailContainer.append(feelsLike)
    const weatherDetails=document.createElement('div')
    weatherDetails.textContent=`Weather: ${data.weather[0].main}`
    detailContainer.append(weatherDetails)
    const sunrise=document.createElement('div')
    sunrise.textContent=`Sunrise: ${convertSun(data.sys.sunrise)}`
    detailContainer.append(sunrise)
    const sunset=document.createElement('div')
    sunset.textContent=`Sunset: ${convertSun(data.sys.sunset)}`
    detailContainer.append(sunset)
  }


  function convertSun(num){
    let date=new Date(1000*num)
    return `${date.getHours()}:${date.getMinutes()}`
  }