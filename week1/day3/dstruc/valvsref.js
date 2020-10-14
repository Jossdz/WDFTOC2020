// Valor
// let price1 = 20.99;
// let price2 = 20.99;
// console.log(price1 === price2);
//Referencia
// let price1 = 20.99;
// let price2 = price1 +;
// console.log(price1 === price2); 

// const book1 = {
//   author: 'Charlotte Bronte',
// };
 
// const book2 = Object.assign({}, book1)

// console.log(book1 === book2)

// console.log(book1)
// console.log(book2)

// book1.author = 'Jane Austen';

// console.log(book1)
// console.log(book2)

// book2.author = 'Edith Warton';

// console.log(book1)
// console.log(book2)

// const book1 = {
//   author: 'Charlotte Bronte',
//   publishers: [
//     {
//       companyName: 'AB',
//     },
//     {
//       companyName: 'CD',
//     },
//   ],
// };
 
// const book3 = JSON.parse(JSON.stringify(Object.assign({}, book1)))

 
// book1.publishers[0] = {
//   companyName: 'Super Cool Company', // => here we changed the name of
//   // the 1st publisher in the original (book1)
// };
 
// book1.author = 'Test Test'; // => here we changed the author name in the original (book1)
 
// console.log(book3);

// const obj = {
//   x: 'x'
// }

// const strObj = JSON.stringify(obj)
// const parseX = JSON.parse(strObj)


const remoteStudents = ['Tomi', 'Maria', 'Alberto']
const mexStudents = ['Gabriel', 'Jess']
const students = [...remoteStudents, ...mexStudents]

students.push('Karen')

// console.log(...students)
// const studentsCopy = [...students]
// console.log(students, studentsCopy)

const obj = { x: 'x'}
const objCopy = {...obj, a: 'a'}

// obj.x = 'y'

// console.log(obj, objCopy)

const studentsWCarlos = students.slice(0,5)