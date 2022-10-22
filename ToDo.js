const list = {
    "make breakfast":"done",
    "do homework":"in progress",
    "do strada": "to do", 
}
function changeStatus(a,b) {
    list[a] = b;
    }
function deleteTask(a) {
    delete list[a];
}
function addTask(a, b) {
    for (let n in list) {
        n = a;
        list[n] = b;
    }
}
function showList() {
    let done = "";
    let todo = "";
    let inprogress = "";
    for (let k in list) {
        if (list[k] == "done") {
            done += "\n\t" + k;
        } else if (list[k] == "to do") {
            todo += "\n\t" + k;
        } else if (list[k] == "in progress") {
            inprogress += "\n\t" + k;
        }
    } 
        if (done == "") {
            done += "--";
        } else if (todo == "") {
            todo += "--";
        } else if (inprogress == "") {
            inprogress += "--";
        }
    return ("Done: " +done + "\n"+"To do: " + todo + "\n" +"In progress: " + inprogress);
}
changeStatus("do homework", "done");//change status of "do homework" on "done"
deleteTask("do strada");//delete task "do strada"
addTask("study strada", "in progress");//add task with "in progress" status, named "study strada"
console.log(showList());//show to do list after all changes