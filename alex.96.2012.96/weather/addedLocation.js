import {listLocation,arrLocation,cityName} from './variables.js'
import { newRespononse } from './newResponse.js'
import { addLocalStorage } from './addStorage.js'



export function updateLocationList(){
    listLocation.innerHTML=""
    arrLocation.forEach(el=>{
        const listItem=document.createElement('li')
        listItem.classList='list-item'
        const itemName=document.createElement('div')
        const close=document.createElement('div')
        close.classList='close'
        close.textContent='X'
        itemName.classList='item-name'
        itemName.textContent=el
        listItem.append(itemName)
        listItem.append(close)
        listLocation.append(listItem)
    })
}

export function addLocationList(name){
    if(arrLocation.includes(name)){
        return
    }
    arrLocation.push(name)
    addLocalStorage()
}

export function deleteItem(e){
if(e.target.className==='close'){ 
    let b=arrLocation.filter(el=>el!=e.target.previousSibling.textContent)
    arrLocation.length=0
    b.forEach(el=>{
      return  arrLocation.push(el)
    })
}
updateLocationList()
}

export function pressLocation(e){
    if(e.target.className==='item-name'){
         cityName.name=e.target.textContent
        newRespononse()
    }
}