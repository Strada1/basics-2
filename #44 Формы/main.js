
document.addEventListener('submit', addToDo);

function addToDoHigh(e) {
    e.preventDefault();
    const formHigh = document.forms.high.in.value;
    let div = document.createElement('div');
    div.className = 'block__high case open';
    div.innerHTML = `
    <label class="high-lable">
        <input type="checkbox" class="case-checkbox" id="todo-high" name="todo-high">
        <span class="checker"></span>
    </label>
    <p class="block__high text">${formHigh}</p>
    <button class="block__high closebutton"><p class="close">+</p></button>
    `;
    document.querySelector('.block__high').after(div);
    document.forms.high.in.value = "";
}