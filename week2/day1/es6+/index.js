// let person = {
//   name: 'Ironhacker',
//   age: 25,
//   favoriteMusic: 'Metal'
// };
// // console.log(name)
// //destructiring
// let { name : nombre, age, favoriteMusic, x = 0 } = person

// nombre = 'Ivan'

// console.log(person.name, x)
// console.log(`Hello, ${nombre}.`);
// console.log(`You are ${age} years old.`);
// console.log(`Your favorite music is ${favoriteMusic}.`);

// const person = {
//   name: 'Ironhacker',
//   age: 25,
//   favoriteMusic: 'Metal',
//   address: {
//     street: 'Super Cool St',
//     number: 123,
//     city: 'Miami',
//   },
// };


// const { address : { number, street, city }, name, ...rest } = person

// console.log(`${name} lives in ${number} ${street}, city of ${city}.`);

// console.log(rest)

// const campuses = ['madrid', 'barcelona', 'miami'];

// const [ma, , mi, ex='ex'] = campuses

// console.log(ma, mi, ex)

// const europeanCampuses = [
//   ['madrid', 'es'],
//   ['barcelona', 'es'],
//   ['berlin', 'de'],
//   ['paris', 'fr'],
//   ['amsterdam', 'nl'],
//   ['lisbon', 'pt'],
// ];


// const [ , , [campus]] = europeanCampuses
// const x = arr[56]

// console.log(campus)

function setVal(){
  // logica compleja 
  return [ 3, () => {
    console.log(3)
  }]
}

const [val, showVal] = setVal()

console.log(showVal())

// function sum(){
//   console.log(arguments)
  
//   let sum = 0
//   for(let i = 0; i<arguments.length;i++){
//     sum += arguments[i]
//   }
//   return sum
// }
// function sum(...numbers){
//   return numbers.reduce((acc, current) => acc + current)
// }

// console.log(sum(1,2,3,4,5,6,7,8))

// function printWishList(...objets){
//   return objets.reduce((acc, current, index) => {
//     return acc + ` ${index+1}. ${current}`
//   }, '')
// }

// console.log(printWishList('ps5', 'xbox', 'frame', 'asd'))

// function showMovie(title, year, ...actors) {
//   console.log(`${title} is released in ${year} and in the cast are: ${actors[0]} and ${actors[1]}.`);
// }
 
// showMovie('Titanic', '1997', 'Leonardo Di Caprio', 'Kate Winslet');


// function getFullName({firstName, lastName}) {
//   return `${firstName} ${lastName}`;
// }
 
// console.log(getFullName({ firstName: 'ana', lastName: 'martinez' }))



function showCarInfo({color}){
  return `The ${color}`
}

console.log(showCarInfo({color: 'red', owner: 'Jess'}))