// console.log('hello word')
// alert('Hello')
// alert('This is my page')
// alert('My name is Alex')
// alert('Thank you for your time')

// function head(x){
//     return x[0]
//   }
  
//   function tail(y){
    
//   }
  
//   function init(w){
//     let arr=[]
//     for (let i=0; i<w.length-1;i++){
//         arr.push(w[i])
//     }
//     return arr
//   }
//   function last(z){
//   return z[z.length-1]
    
//   }
//   console.log(init([5,1,2]))

//   Array.prototype.map=function(callback,obj){
//     let a=function(){
//       const arr=[]
//       for( i=0;i<this.length;i++){
//         if(i in this){
//           console.log(obj)
//           arr.push(callback(this[i],i,this))
//         }
//         else{
//           arr.push(this[i])
//         }
//       }
//         return arr
//     }
//   return a.call(this)
//   }
// function dateSample(sampleActivity ) {
//     if(typeof sampleActivity!=='string'||isNaN(Number(sampleActivity))||sampleActivity===Infinity||sampleActivity===""||typeof sampleActivity==='object')
//     {
//       return false
//     }
//     else{
//     let a=(0.693/5730).toFixed(8) 
//   let res=(Math.log(15/sampleActivity)).toFixed(4)/a
//         if(isNaN(Math.ceil(res))||(Math.ceil(res))===Infinity||(Math.ceil(res))<0){
//             return false
//         }
//         if(sampleActivity==='1'){
//           return((Math.ceil(res))-1)
//         }
//   return (Math.ceil(res))
//   }
  
//   }
// console.log(dateSample('9.8888'))


// function sravnenie(a,b){
//   return a===b
// }

// console.log(sravnenie('true',true))


// if('0'){
//   alert('Hello')
// }

// if(prompt('what is oficial name javscript')==='ECMAScript'){
//   alert('right')
// }
// else{
//   alert('you don`t know')
// }
// let res=prompt('please press number')
// if(res>=1){
//   alert(1)
// }0
// if(res==0){
//   alert(0)
// }
// else{
//   alert(-1)
// }

// a=3
// b=0
// let res=(a+b<4)?alert('Malo'):alert("Mnogo")


// res(3,4)


// let message=(login==='Cowprker')?message='Hello':login==='director'?message='Good day':login==''?message='no login':'';


// function getCommonCharacterCount(s1, s2 ) {
//   let arr1=s1.split('')
//   let arr2=s2.split('')
//   score=0
//   if(arr1.length>arr2.length||arr1.length===arr2.length)
//  for(let i=0;i<arr1.length;i++){
//   if(arr1.includes(arr2[i])){
//     arr2.splice(i,1)
//     score++
    
//   }
//  }
//  else if(arr1.length<arr2.length){
//   for(let i=0;i<arr2.length;i++){

//     if(arr2.includes(arr1[i])){
//       arr2.splice(i,1)
//       score++
//     }
//  }
 
// }
// return score
// }
// console.log(getCommonCharacterCount('abca', 'xyzbac'))

function calc(text,a,b){
  let res=0
  switch(text){
    case'add':
    res= a+b;
    break;
    case'multi':
    res= a*b
    break;
    case'subtract':
    res= a-b
    break;
  }

  return res
}
console.log(calc('add', 1, 2))
console.log(calc('multi', 1, 2))
console.log(calc('subtract', 3, 2))

// function deleteDigit(n){
// n=String(n)
// n=n.split('')
// console.log(n)
// let res=[]
// let superRes=[]
// for(let i=0;i<n.length;i++){

// res.push(n)
// }
// for(let i=0;i<n.length;i++){
// for(let i=0;i<n.length;j++){
//   if(res.length>=2){
//     res.splice((res[j]),1)
//   console.log(res)}
// }
// }
// }
// console.log(deleteDigit(152))

// function getDNSStats(domains) {
//  let res=[]
// let score=0

// if(domains.length===1){
//   domains=domains.join('')
//   domains=domains.split('')
//   domains.forEach(element => {
//     if(element==='.')
//     score++
//   });

// if(score>1){
 
//    res.push((domains.splice(domains.length-4,domains.length)).join(''))
//   res.push(res[0]+(domains.splice(domains.indexOf('.'),domains.length)).join(''))
//   res.push(res[1]+'.'+(domains.splice(0,domains.length)).join(''))
// }
// else{
//   res.push((domains.splice(domains.indexOf('.'),domains.length)).join(''))
//   res.push(res[0]+'.'+(domains.splice(0,domains.length)).join(''))
// }
// }
// else{
// for(let i=0;i<domains.length;i++){
//   for(let j=0; j<domains[i].length;j++){

//   }
 

// }
// }

// const countItems = res.reduce((acc, item) => {
//   acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
//   return acc;
// }, {});
// return(countItems)
// }

// console.log(getDNSStats(['epam.com', 'info.epam.com']))


//  function calculateDepth(arr) {
    

// let score=0
// let litlescore=0
// if(Array.isArray(arr)){
//   score=+1

// }
// function flat (arr){
// arr.forEach((item)=>{
  
//  if(Array.isArray(item)){
 
//     if(item.length=0){
//       return
//     }
//     else{ flat(item)
//       score=score+1} 
  
 
 
  
//  }
// })

// }

// flat(arr)
// return score
//   }

// console.log(calculateDepth([1, 2, 3, [1], 4, 5, [1]]))

// function getSumOfDigits(n) {
//  n=String(n)
//  n=n.split('')
//  let sum=0
//  n.forEach(el=>{
//  sum=sum+Number(el)
//  })
// if(sum>=10){
//  return Number(n[n.length-1])
// }
// else{
//   return sum
// }
// }
// console.log(getSumOfDigits(99))


// function sortByHeight(arr) {

//   let filtredArray = arr.filter(item => item > -1)

//   function max(a, b) {
//     if (a == -1) {
//       return
//   }
//   else{
//     return a-b
//   }
 
//  }
//  filtredArray=filtredArray.sort(max)
// arr.forEach((element,index) => {
//     if(element===-1){
//       filtredArray.splice(index,0,-1)
//     }
// });

// return(filtredArray)

// }
// console.log( sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]))