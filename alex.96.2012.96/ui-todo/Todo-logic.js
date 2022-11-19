import {createElementUI} from './createElementUI.js'
 const prioritys={
      LOW:'low',
      HIGHT:'hight'
    }
    const statuse={
      IN_PROGRES:'In progress',
      DONE:'Done',
      TODO:'To Do'
    }
   
   
  export   let list = 
[
     {name:'create a post' ,status: 'In progress', priority:'low'  },
     { name: 'test', status: 'Done', priority: 'high'  },
     {name:"write a post",status: 'In progress',priority:'high'}]

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
    export function addTask(name,status=statuse.IN_PROGRES,priority=prioritys.LOW){
     try{list.push({'name':name,'status':status,'priority':priority})}
     catch(e){
      alert('errors')
     }
    
    }
    export function deleteTask(name){
     let deleteTod=list.find(item=>item.name===name)
    console.log(list)
     list =list.filter(item=>item!=deleteTod)
   console.log(list)
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
    
   
    
    addTask('have a walk')
    
    
    export function createList(){
      try{  
      list.forEach(el=>{
            createElementUI(el)
        })
      }
      catch(e){
        alert('Ошибка базы данных')
      }
    }
    createList()
