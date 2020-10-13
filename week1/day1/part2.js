const user = 'sad'

// if(user === 'Joss'){
//   console.log(`Welcome teacher: ${user}`)
// }else if (user === 'Jorge'){
//   console.log(`Welcome Hackerman: ${user}`)
// }else if(typeof user != 'string'){
// console.log('Error')
// }
// else{
//   console.log(`Welcome: ${user}`)
// }

// switch(typeof user){
//   case 'string':
//     switch(user){
//       case 'Joss':
//     case 'joss':
//       console.log(`Welcome teacher: ${user}`)
//       break
//     case 'Jorge':
//       console.log(`Welcome Hackerman: ${user}`)
//       break
//     default:
//       console.log(`Welcome: ${user}`)
//       break
//     }
//   default:
//     console.log('Error') 
// }

// let i = 5

// // while(i >= 0){
// //   console.log(i)
// //   i--
// // }

// do {
//   console.log(i)
//   i--
// } while (i > 4)

// for(let i = 5; i >= 0; i--){
//   console.log(i)
// }

let i = 0;
 
while (i < 8) {
  i++;
  if (i === 3) {
    continue;
  }
  console.log(`The number is: ${i}.`);
}