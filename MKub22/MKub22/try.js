"use strict"

const inpName = document.getElementById('inputName');
const send = document.getElementById('send');
const serverUrl = 'https://api.genderize.io';


send.addEventListener('click', function(){
    event.preventDefault();
    let firstName = `${inpName.value}`;
    const url = `${serverUrl}?name=${firstName}`;
    let response = fetch(url);
    
    response.onload = () => resolve(response);
    response.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${url}`));
   
    response
    .then(
    response => response.json()
    )
    .then(
    response => alert(`${firstName} is ${response.gender} with probability ${response.probability}`),
    error => alert(`Ошибка: ${error.message}`)
   );
})


// Код на async await


// send.addEventListener('click', async function() {
//     event.preventDefault();
    
//     let response = await fetch(url);
//     let male = await response.json();
//         alert(`${firstName} is ${male.gender} with probability ${male.probability}`);
        
//     })


