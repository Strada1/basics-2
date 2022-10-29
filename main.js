const STATUS = {
    TODO: "to do",
    DONE: "done",
    IN_PROGRESS: "in_progress",
};

const PRIORITY = {
    LOW: -1,
    MEDIUM: 0,
    HIGH: 1,
};

const task_list = {
    tasks: [],
    addTask(task, priority=PRIORITY.MEDIUM){
        let new_task = {name: task,
                        status: STATUS.TODO,
                        priority: priority}
        this.tasks.push(new_task);
    },
    deleteTask(task_name){
        this.tasks.forEach((task, index) => {
            if (task.name == task_name){
                this.tasks.splice(index, 1);
            };
        });
    },
    changeStatus(task_name, status){
        this.tasks.forEach((task, index) => {
            if (task.name == task_name){
                this.tasks[index].status = status;
            };
        });
    },
    show(){
        const output_list = {
            todo: "",
            done: "", 
            in_progress: ""
        };
        this.tasks.sort((a, b) => a.priority < b.priority ? 1 : -1);
        this.tasks.forEach((task) => {
            switch (task.status){
                case STATUS.TODO:
                    output_list.todo += (`\n    "${task.name}",`);
                    break;
                case STATUS.DONE:
                    output_list.done += (`\n    "${task.name}",`);
                    break;
                case STATUS.IN_PROGRESS:
                    output_list.in_progress += (`\n    "${task.name}",`);
                    break;
            }
        });
        for (let status in output_list){
            if (output_list[status].length > 0){
                output_list[status] = output_list[status].substring(0,output_list[status].length-1);
            }
            else{
                output_list[status] = '\n    -'
            }
        }
        console.log(`Todo:${output_list.todo}\nIn Progress:${output_list.in_progress}\nDone:${output_list.done}`)
    }
};


task_list.addTask("Заработать кучу денег");
task_list.changeStatus('Заработать кучу денег', STATUS.IN_PROGRESS)
task_list.addTask("Стать крутым разработчиком за 1 день");
task_list.deleteTask("Стать крутым разработчиком за 1 день");
task_list.addTask("Стать крутым разработчиком за год");
task_list.addTask("Решить задачу на Strada", PRIORITY.HIGH);

task_list.show();
