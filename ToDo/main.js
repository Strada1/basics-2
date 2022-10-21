'use strict';

const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}

//запрашиваем, что пользователь хочет сделать
let question = prompt("Выберите вариант: добавить, удалить или показать список","Напишите: добавить или удалить или показать список")

if (question === "добавить" && question != "" && question != null) {

let add = prompt('Какую задачу Вы хотите добавить','walk')

function addTask (add) {
  for (let key in list) {
    if (key != add && add !=null && add !="") {
      list[add] = "To Do";
      }
  }
  }

addTask(add);
alert ('Задача добавлена');


} else if (question === "удалить") {

let question = prompt('Какую опцию Вы хотите удалить?','create a new practice task')

function deleteTask(del) {
  for (let key in list) {
  if (question == key) {
    delete list[question];
    alert (`Задача ${question}, успешно удалена.`);
    }
}

}

deleteTask(question);
} else if (question === "показать список") {
    function showList(show) {
        for (let key in list){
            
                switch (list[key]){
                case "To Do": alert(`To Do: ${key}`)
                break;
                case "In Progress": alert(`In Progress ${key}`)
                let b = (`In Progress ${key}`)
                break;
                case "Done": alert(`Done: ${key}`)
                break;
            }
            
        }
        }
        
        showList();

}
