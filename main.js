const task_statuses = {
    todo: "to do",
    done: "done",
    in_progress: "in_progress",
}

const task_list = {
    task_list: {},
    addTask(task){
        if (!(task in this.task_list)){
            this.task_list[task] = task_statuses.todo;
        };
    },
    deleteTask(task){
        if (task in this.task_list){
            delete this.task_list[task];
        };
    },
    changeStatus(task, status){
        if (task in this.task_list){
            this.task_list[task] = status;
        };
    },
    show(){
        const output_list = {
            todo: "",
            done: "", 
            in_progress: ""
        };
        for (let task in this.task_list){
            switch (this.task_list[task]){
                case task_statuses.todo:
                    output_list.todo += (`\n    "${task}",`);
                    break;
                case task_statuses.done:
                    output_list.done += (`\n    "${task}",`);
                    break;
                case task_statuses.in_progress:
                    output_list.in_progress += (`\n    "${task}",`);
                    break;
            }
        }
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


task_list.addTask("Прибрать комнату");
task_list.addTask("Заработать кучу денег");
task_list.changeStatus('Заработать кучу денег', task_statuses.in_progress)
task_list.addTask("Стать крутым разработчиком за 1 день");
task_list.deleteTask("Стать крутым разработчиком за 1 день");
task_list.addTask("Решить задачу на Strada");

task_list.show();
