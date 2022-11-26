const UI_ELEMENTS = {
    INPUT_TEXT: document.querySelector('.input_text'),
    BUTTON_SEND: document.querySelector('.button_send'),
    CONTAINER_BODY: document.querySelector('.container'),
};


function sendName(name) {
    const firstName = name;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => render(`${firstName} is ${data.gender}`));
}

function render(result) {
    let div = document.createElement('div')
    div.className = 'list_name'
    div.textContent = result
    UI_ELEMENTS.CONTAINER_BODY.append(div)
}

UI_ELEMENTS.BUTTON_SEND.addEventListener('click', function (event) {
    event.preventDefault();
    sendName(UI_ELEMENTS.INPUT_TEXT.value);

})


