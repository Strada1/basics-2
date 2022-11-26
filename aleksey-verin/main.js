const ELEMENTS_FROM_UI = {
  FORM: document.querySelector(".form"),
  INPUT: document.querySelector(".input_name"),
  RESULT_MAIN: document.querySelector('.text_result'),
  RESULT_PROBABILITY: document.querySelector('.probability'),
}

ELEMENTS_FROM_UI.FORM.addEventListener("submit", getMale);

function getMale(event) {
  if (ELEMENTS_FROM_UI.INPUT.value !== '') {
    event.preventDefault();
    let nameInLatin = cyrillicToLatin(ELEMENTS_FROM_UI.INPUT.value)
    getResult(nameInLatin, ELEMENTS_FROM_UI.INPUT.value)
    ELEMENTS_FROM_UI.INPUT.value = ''
  }
}

function cyrillicToLatin (anyString) {
    
  let rusToEng = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
      'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
      'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
      'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
      'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya',
      'ъ': 'ie', 'ь': '', 'й': 'i'
  };
  let newString = [];
      
  for ( let i = 0; i < anyString.length; ++i ) {
     newString.push(
            rusToEng[ anyString[i] ]
         || rusToEng[ anyString[i].toLowerCase() ] == undefined && anyString[i]
         || rusToEng[ anyString[i].toLowerCase() ].replace(/^(.)/, function ( match ) { return match.toUpperCase() })
     );
  }
  
  return newString.join('');
}

function getResult(nameInLatin, nameFromInput) {

  const firstName = nameInLatin;
  const serverUrl = 'https://api.genderize.io';
  const url = `${serverUrl}?name=${firstName}`;
  
  let response = fetch(url)
  response
  .then(response => response.json())
  .then(data => showResult(nameFromInput, data.gender, data.probability))
  .catch(function(err) {
    ELEMENTS_FROM_UI.RESULT_MAIN.textContent = `Сервер не отвечает. Попробуйте позже`
    ELEMENTS_FROM_UI.RESULT_PROBABILITY.textContent = ''
  })
}

function showResult(nameFromInput, gender, probability) {

  let nameForScreen = (nameFromInput.toLowerCase())[0].toUpperCase() + (nameFromInput.toLowerCase()).slice(1)
  let probabilityForScreen = (probability * 100).toFixed(0)

  switch (gender) {
    case 'male':
      ELEMENTS_FROM_UI.RESULT_MAIN.innerHTML = `<span>${nameForScreen}</span> - <span>мужчина</span>`
      ELEMENTS_FROM_UI.RESULT_PROBABILITY.textContent = `С вероятностью: ${probabilityForScreen}%`
      break;
    case 'female':
      ELEMENTS_FROM_UI.RESULT_MAIN.innerHTML = `<span>${nameForScreen}</span> - <span>женщина</span>`
      ELEMENTS_FROM_UI.RESULT_PROBABILITY.textContent = `С вероятностью: ${probabilityForScreen}%`
      break;
    default:
      ELEMENTS_FROM_UI.RESULT_MAIN.innerHTML = `Имя <span>${nameForScreen}</span> </br><span>не найдено</span>`
      ELEMENTS_FROM_UI.RESULT_PROBABILITY.textContent = ''
      break;
  }
}