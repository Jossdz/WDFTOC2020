// const students = [
//   {name: 'Carlos', attendance: false, grade: 5},
//   {name: 'Karen', attendance: false, grade: 7},
//   {name: 'Isabel', attendance: false, grade: 7},
//   {name: 'Ayhan', attendance: false, grade: 8},
//   {name: 'Tomi', attendance: false, grade: 5},
// ]

// // const studentsNames = students.map(student => student.name)

// // studentsNames.push('Alberto')

// // console.log(studentsNames)

// // const nums = [1,2,3,4,5,6,7,8,9]

// // const sum = nums.reduce((acc, currentVal) => {
// //   console.log('acc', acc, 'actual', currentVal)
// //   return acc + currentVal
// // })
// // const avg = sum/nums.length
// // console.log(avg);
// // const words = ['hola', 'tienen', 'sue~o', '?']

// // const phr = words.reduce((acc, cv) => acc+ ' ' +cv)

// // console.log(phr)

// // const avg = students.reduce((acc, student) => {
// //   console.log(acc, 'current', student)
// //   return acc + student.grade
// // }, 0)

// const studentsps = students.filter(student => student.grade > 5)
// const studentsrp = students.filter(student => student.grade <= 5)

// console.log(studentsps, studentsrp)

// var people = [
//   { name: "Candice", age: 25 },
//   { name: "Tammy", age: 30 },
//   { name: "Allen", age: 20 },
//   { name: "Nettie", age: 21 },
//   { name: "Stuart", age: 17 },
//   { name: "Bill", age: 19 }
// ];


// const cdrink = people.filter(person => person.age >= 21)

// console.log(cdrink)

const places = [
  {
   title: "Awesome Suite 20' away from la Rambla",
   price: 200,
   type: "Private Room",
   pool: true,
   garage: false
  },
  {
   title: "Private apartment",
   price: 190,
   type: "Entire Place",
   pool: true,
   garage: true
  },
  {
   title: "Apartment with awesome views",
   price: 400,
   type: "Entire Place",
   pool: false,
   garage: false
  },
  {
   title: "Apartment in la Rambla",
   price: 150,
   type: "Private Room",
   pool: false,
   garage: true
  },
  {
   title: "Comfortable place in Barcelona´s center",
   price: 390,
   type: "Entire place",
   pool: true,
   garage: true
  },
  {
   title: "Room near Sagrada Familia",
   price: 170,
   type: "Private Room",
   pool: false,
   garage: false
  },
  {
   title: "Great house next to Camp Nou",
   price: 140,
   type: "Entire place",
   pool: true,
   garage: true
  },
  {
   title: "New apartment with 2 beds",
   price: 2000,
   type: "Entire place",
   pool: false,
   garage: true
  },
  {
   title: "Awesome Suite",
   price: 230,
   type: "Private Room",
   pool: false,
   garage: false
  },
  {
   title: "Apartment 10' from la Rambla",
   price: 930,
   type: "Entire place",
   pool: true,
   garage: true
  }
 ]

const placesWpool = places.filter(place => place.pool)

const totalPrice = placesWpool.reduce((acc, current) => {
  return acc + current.price
}, 0)

const placesWPoolNames = placesWpool.map(place => place.title)

console.log(placesWPoolNames, totalPrice);