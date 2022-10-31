const prioritys={
  LOW:'low',
  HIGHT:'hight'
}
const statuse={
  IN_PROGRES:'In progress',
  DONE:'Done',
  TODO:'To Do'
}
let list = [
 {name:'create a post' , status: 'In progress', priority: 'low'  },
 { name: 'test', status: 'Done', priority: 'high'  },
 {name:"write a post",status: "To Do",priority:'norm'}]
function changeStatus(name,status,priority=prioritys.LOW){
  const myTodo=list.find(item=>item.name===name)
  if(!myTodo)
  {
    return 'error'
  }

  myTodo.name=name
  myTodo.status=status
  myTodo.priority=priority

}
function addTask(name,status=statuse.TODO,priority=prioritys.LOW){
 list.push({'name':name,'status':status,'priority':priority})

}
function deleteTask(name){
 let deleteTod=list.find(item=>item.name===name)
list =list.filter(item=>item!=deleteTod)
return list
}

function showList(){
  for(let key in statuse){
    let filterArr=list.filter(e=>e.status===statuse[key])
    console.log(statuse[key])
      if(filterArr){
        filterArr.forEach(el=>{
          console.log(el)
        })
      }
  }
  
}

changeStatus("write a post", "To Do")

addTask('have a walk')



console.log(list)
showList()
//