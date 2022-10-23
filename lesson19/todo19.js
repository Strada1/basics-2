const STATUS ={
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
    TO_DO: 'To do',
    SEND_REPORT: 'Send report'
};
const list = {
	'practiceTask': STATUS.IN_PROGRESS,
	'makeAbed': STATUS.DONE,
	'writePost': STATUS.SEND_REPORT,
    'showlist': ''
};

function changeStatus(task, status) {
    list[task] = status;
};

function addTask(newTask) {
    list[newTask] = '';
};

function delTask(delTask) {
    delete list[delTask];
};

function showList() {
    let toDoCheck = '';
    let inProgressCheck = '';
    let doneCheck = '';
    let sendReportCheck = '';

for (key in list) {
    if (list[key] === STATUS.TO_DO) {
    toDoCheck += key;
    } else if (list[key] === STATUS.IN_PROGRESS) {
    inProgressCheck += key;
    } else if (list[key] === STATUS.DONE) {
    doneCheck += key;
    } else if (list[key] === STATUS.SEND_REPORT) {
    sendReportCheck += key;
    }
}    
if (toDoCheck === ' ') {
    toDoCheck += '-';
}
if (inProgressCheck === ' ') {
    inProgressCheck += '-';
}
if (doneCheck === ' ') {
    doneCheck += '-';
}
if (sendReportCheck === ' ') {
    sendReportCheck += '-';
}

};

addTask("haveAwalk");
addTask("testik");
changeStatus('practiceTask', 'lol');
delTask('makeAbed');
changeStatus('testik', STATUS.DONE);
showList();


console.log(list);




