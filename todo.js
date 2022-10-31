function Todo(){
    this.list =  [];
    this.status = [
        'Todo',
        'In Progress',
        'Done',
    ];
    this.priority = [
        'Low',
        'Normal',
        'Hight',
    ];

    this.change = (key, status = null, priority = null) => {
        this.list = this.list.map(a => {
            if(a.title === key) {
                a.status = status ? status : a.status;
                a.priority = priority ? priority : a.priority;
            }
            return a;
        });
    };

    this.addTask = (title, status = 'Todo', priority = 'Low') => {
        this.list.push({
           'title': title,
           'priority': priority,
           'status': status
        });
    };

    this.deleteTask = (key) => {
        this.list = this.list.filter(a => a.title != key);

    };
    this.log = () => {
        console.log(this.list);
    };
    this.print = () => {

      return this.status.reduce((acc, status) => {
            acc += status + ':\r\n';
            let tasks = this.list.filter(task => task.status == status);
            let format = tasks.reduce((acc, item) => acc + `\t"${item.title}; priority:${item.priority}"${tasks.length>1 ? ',' : ''}\n`, '');
            return acc + (format ? format : '\t-\n');
      }, '');
    }
}

let todo = new Todo();

todo.addTask('Test0');
todo.addTask('Test1');
todo.addTask('Test2');


todo.change('Test0', 'In Progress', 'Hight');
todo.change('Test1', 'Done');
todo.change('Test0', 'Done');

console.log(todo.print())
todo.deleteTask('Test2')
console.log(todo.print())
