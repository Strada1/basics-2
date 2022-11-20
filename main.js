const STATUS = {
	TODO: 'To Do',
	DONE: 'Done',
}

const PRIORITY = {
	HIGH: 'high',
	LOW: 'low',
}

let list = [];


let btn = document.querySelector('.todo__plus');
btn.addEventListener('click', function (event) {
	event.preventDefault();
	addInArray(document.querySelector('.todo__add').value, PRIORITY.HIGH);
	render();
});

let btn2 = document.querySelector('.todo__plus2');
btn2.addEventListener('click', function (event) {
	event.preventDefault();
	addInArray(document.querySelector('.todo__add2').value, PRIORITY.LOW);
	render();
});
function addInArray(nameNewTask, priorityTask) {
	list.push({
		name: nameNewTask,
		status: STATUS.TODO,
		priority: priorityTask
	});
}

function showTask(inputValue, whereShow) {

	let item = document.createElement('div');
	item.className = 'item';

	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.className = "checkbox";
	checkbox.addEventListener('click', function () {
		if (checkbox.checked) {
			item.style.background = "#ABFA91";
		}
		else {
			item.style.background = "#whitesmoke";
		}
	});

	let label = document.createElement('div');
	label.className = 'label';
	label.textContent = inputValue;

	let cross = document.createElement('button');
	cross.className = 'cross';
	cross.textContent = '-';

	cross.addEventListener('click', function () {
		deleteTaskArray(label.textContent);
	});

	item.append(checkbox);
	item.append(label);
	item.append(cross);

	whereShow.append(item);
}


function render() {
	let items = document.querySelectorAll(".item");
	for (let item of items) {
		item.remove();
	}
	list.forEach((elem) => {
		if (elem.priority === PRIORITY.HIGH) {
			showTask(elem.name, document.querySelector(".todo__list"));
		}
		else {
			showTask(elem.name, document.querySelector(".todo__listLow"));
		}
	});
}




function deleteTaskArray(nameOfTask) {
	list = list.filter(task => task.name !== nameOfTask);
	render();
};

