// // console.log('errors')

// // const arr = [1,2,3,4,5,'6',7,8]

// // let sum = 0

// // arr.forEach(el => {
// //   debugger
// //   return sum += el
// // })

// // console.log(sum)
// debugger
// function c(){
//   console.log('c')
// }


// function b(){
//   console.log('b')
//   c()
// }

// function a(){
//   console.log('a')
//   b()
// }

// a()

// function hi(){
//   console.log('hi')
// }

// // console.lg('asdf')

// try{
//   console.log('asdf')
//   console.clear('sd')
// }catch(err){
//   console.log('Error: ', err.message)
// }


// hi()

// function getUserName(user) {
//   if (!user.name) {
//     throw new Error('kiyuegrqwlieuh');
//   }
//   return user.name;
// }
 
// try {
//   getUserName({ nsame: 'Raul', lastName: 'Lopez' });
// } catch (error) {
//   console.log("Gets executed if there's an error.");
//   console.error(error);
// } finally {
//   console.log('Gets executed at the end no matter what.');
// }


function sum(num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Necesito un numero')
  }
  return num1 + num2
}


console.log(sum(1,2))
console.log(sum(1,2))
console.log(sum(1,5))