// function getAverage(marks) {
//   let count = 0;
//   for (let i = 0; i < marks.length; i++) {
//     count += marks[i];
//   }

//   return Math.floor(count / marks.length);
// }

// console.log(getAverage([1,2,3,4,5,]));

function getAverage(marks) {
  let count = 0;
  for (let item of marks) {
    count += item;
    
  }
  return Math.floor(count / marks.length);
}
console.log(getAverage([1,2,3,4,5]));