const formHighTask = document.querySelector('#frmHighTask')
const formLowTask = document.querySelector('#frmLowTask')
const buttonLowTask = document.querySelector('#lowTask')
const highTasks = document.querySelector('.highTaskList')


// 1. Отключить действие отправки формы по умолчанию preventDefault
// 2. Добавление задачи по нажатия кнопки и клавиши Enter
// 3. Получить введенные данные из формы
// 4. Создать div контейнер с задачей
    // 1. В него добавить текст из формы
    // 2. Чекбокс отмечающий задание
    // 3. Кнопка удаления задачи
// 5. Добавить получившуюся таску в нужный div контейнер



function addTask () {
    const inputValue = formHighTask[0].value;
    const divElement = document.createElement('div');
    const paragraphElement = document.createElement('p');
    const textElement = document.createTextNode(inputValue)
    const checkBox = document.createElement('input')
    const deleteButton = document.createElement('input')
    checkBox.type = 'checkbox';
    deleteButton.type = 'submit';
    deleteButton.value = '';
    deleteButton.className = 'deleteButton';
    divElement.className = 'task';
    divElement.append(checkBox);
    paragraphElement.append(textElement);
    divElement.append(paragraphElement);
    divElement.append(deleteButton);
    highTasks.append(divElement);
}

formHighTask.addEventListener('submit', evt => {
    evt.preventDefault();
    addTask()
})
