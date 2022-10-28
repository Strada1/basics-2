
const list = [
    {name: "brush teeth",
    status: "Done",
    priority:"low"},
    {name: "create a post",
    status: "In Progress",
    priority: "high"},
    {name: "test",
    status: "ToDo",
    priority: "high"},
];

const statuses = {
    'Done': "Done",
    'InProgress': 'In Progress',
    'ToDo': 'ToDo'
};

function changeStatus (task, stat) {
    let check1 = list.findIndex((item => item.name == task));
    if (check1 != -1) {
        list[check1].status = stat;
    } else {console.log('Такой задачи в списке нет. Введите уже существующую в списке задачу')};
};

 function deleteTask (task) {
    let check2 = list.findIndex((item => item.name == task));
    if (check2 != -1) {
        list.splice ([check2], 1);
    } else {console.log('Такой задачи в списке нет. Введите уже существующую в списке задачу')};
 };

 function addTask (task, prior) {
    if (prior == "low" || prior == "high"){
        list.splice(list.length, 0, {name: task, status: "ToDo", priority: prior} );
    } else {console.log("Смените уровень приоритета на 'low' или 'high'")};
 };

 function showList () {
    let Done1 = "";
    let InProgress1 = "";
    let ToDo1 = "";
    list.forEach((item, index) => {
        if (list[index].status == statuses.Done) {
            Done1 = Done1 + ('    "' + list[index].name + ', ' + list[index].priority + '",\n');
        } else if (list[index].status == statuses.InProgress){
            InProgress1 = InProgress1 + ('    "' + list[index].name + ', ' + list[index].priority + '",\n');
        } else if (list[index].status == statuses.ToDo) {
            ToDo1 = ToDo1 + ('    "' + list[index].name + ', ' + list[index].priority + '",\n');
        }
    });
    
    if (Done1 == ""){
        Done1 = "     -";
    };

    if (InProgress1 == ""){
        InProgress1 = "     -";
    };

    if (ToDo1 == ""){
        ToDo1 = "     -";
    };

    console.log(statuses.Done + ":\n" + Done1);
    console.log(statuses.InProgress + ":\n" + InProgress1);
    console.log(statuses.ToDo + ":\n" + ToDo1);

 };

changeStatus("brush teeth", 'ToDo');
deleteTask ("test");
addTask("wash hands", "low");
showList();


