export const STATUS = {
    TODO: "To Do",
    DONE: "Done",
}

export const PRIORITY = {
    HIGH: "high",
    LOW: "low",
}

export const list = [
    // {name: "write a post", status: "To Do", priority: "low",}, 
    // {name: "test", status: "Done", priority: "high",},
]

export function changeStatus(task) {
    let taskaName = list.find(item => item.name == task);
   if (list.find(item => item.name == task) === undefined) {
    console.log(`can't change "${task}" status cause there's no such task`);
   } else {
    list.find(item => item.name == task).status = (taskaName.status == STATUS.TODO) ? STATUS.DONE : STATUS.TODO;
   }
}

export function addTask(name, priority) {
    list.push({name, status: STATUS.TODO, priority});
}

export function deleteTask(task) {
    let deleteIndex = list.findIndex(item => item.name == task);
    if (deleteIndex < 0) {
        console.log(`can't delete "${task}" cause it doesn't exist`)
    } else {
        list.splice(deleteIndex, 1)
    }
}