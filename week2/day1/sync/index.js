// // console.log('1');
// const timeoutId = setTimeout(() => console.log('2'), 4000)
// const timeoutId2 = setTimeout(() => console.log('2'), 4000)

// console.log('id:', timeoutId, timeoutId2)
// // console.log('3');

// if(false){
//   clearInterval(timeoutId)
// }
let s = 0
let intervalId = setInterval(() => {
  s++
  console.log(`han pasado ${s} segundos`)
  if(s==10){
    clearInterval(intervalId)
  }
}, 1000)

