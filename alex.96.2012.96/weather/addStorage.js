import { arrLocation } from "./variables.js";
export function addLocalStorage(){
    arrLocation.forEach(el=>{
        localStorage.setItem(el,el)
    })
}
export function getLocalStorage(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        arrLocation.push(localStorage.getItem(key))
      }
}
getLocalStorage()