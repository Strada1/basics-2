

import {containerBusiness} from './variables.js'
import {containerBusinessLow} from './variables.js'
export function createElementUI(el){  
    const business=document.createElement('div')
    business.classList='business'
    const check=document.createElement('input')
    check.type='checkbox'
    check.id='scales'
    check.classList='check'
    if(el.status==='In progress'){
        
    }
    if(el.status==='Done'){
        check.checked='checked'
    }
    const label=document.createElement('label')
    const close=document.createElement('div')
    
    close.innerText='X'
    close.classList='close'
    label.for='scales'
    label.innerText=el.name
    business.append(check)
    business.append(label)
    business.append(close)
 console.log(el)
    if(el.priority==='low')
    {   
        
        containerBusinessLow.append(business)
    }
    if(el.priority==='high'){
    containerBusiness.append(business)
    }
}