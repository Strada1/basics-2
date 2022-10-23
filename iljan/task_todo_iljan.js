/*TASK TODO
Сегодня напишем простой самый простой TODO лист без графического интерфейса.
Хранилищем будет объект, а имена задач - ключами этого объекта. 
const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}
Функция changeStatus - будет менять статус задачи 
changeStatus("write a post", "Done")
Функция addTask - добавляет новую задачу
addTask('have a walk')
Функция deleteTask - удаляет задачу
deleteTask('have a walk')
Функция showList будет выводить весь список дел в виде 
Todo: 
	"create a new practice task",
	"make a bed",
In Progress: 
	"write a post"
Done:
	-
 
Создайте список дел, добавьте в него пару задач, поменяйте их статусы несколько раз и выведете результат в консоль 
*/

const LIST = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
    }
    
    function addTask(task) {
    	LIST[task] = 'To Do';
    }
    
    function deleteTask(task) {
    	delete LIST[task];
    }
    
    function changeStatus(task, newStatus) {
    	if (task in LIST === true) {
    		LIST[task] = newStatus;
    }
    }
    
    function showList() {
		let IN_PROGRESS_TASK = '';
		let TODO_TASK = '';
		let DONE_TASK = '';
		let NO_TASK = '\n -';
    		for(let key in LIST) {
    			if (LIST[key] === 'In Progress') {
    				IN_PROGRESS_TASK += ` "${key}", \n `;
    			} else if (LIST[key] === 'To Do') {
    				TODO_TASK += ` "${key}", \n `;
    			} else if (LIST[key] === 'Done') {
    				DONE_TASK += ` "${key}", \n `;
    			}
    		}
    console.log('In Progress:' + (IN_PROGRESS_TASK || NO_TASK));
    console.log('To do:' + (TODO_TASK || NO_TASK));
    console.log('Done:' + (DONE_TASK || NO_TASK));
    }
    
    
    addTask('car repair');
    addTask('buy products');
    deleteTask('create a new practice task');
    changeStatus('make a bed', 'In Progress');
    showList();