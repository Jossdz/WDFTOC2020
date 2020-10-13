// // const teacherName = 'joss';
// // // ES6 version
// // let teacherHobbies = ['play guitar', 'videogames'] 
// // let teacherPet;
// // let favoriteFood

// // teacherPet = 'Molly';

// // console.log(teacherName);
// // console.log(teacherHobbies);
// // console.log(teacherPet);

// // // Comentario 1


// // /* comentario multilinea
// // werter
// // werte
// // wertewrt
// // wtyliwuh;o
// // rty;orut
// //  */
// // favoriteFood = 'Pizza'
// // console.log('Value', favoriteFood, 'Type', typeof favoriteFood )
// // favoriteFood = 3
// // console.log('Value', favoriteFood, 'Type', typeof favoriteFood )

// // // teacherName = 'Jorge'

// // const tres = 3
// // const three = '3'

// // console.log(tres == three)
// // console.log(tres === three)

// // NUMBERS

// // console.log(typeof 2)
// // console.log(typeof 5.2)
// // console.log(typeof Infinity)
// // console.log(typeof NaN, '4g' * 4)

// let counter = 4


// counter -= 2

// console.log(counter)

// // STRING

// const d = "d' \"gfdg\" ''" 
// const f = 'Joss\'s Bar'
// const m = `the "Joss's Bar"`
// const teacherName = 'Joss'

// //concatenacion
// console.log('Hola' + ' ' + teacherName)
// // template literal
// console.log(`Hola ${teacherName}`)

// const fruits = '1. banana 2. apple 3. orange4. cherry';

// console.log(fruits.lastIndexOf('4. cherry'))
// console.log(fruits.repeat(2))

// const banana = fruits.slice(-4, -1)

// // console.log('str1'.localeCompare('str2'))

// // Ordenar

// // console.log('Diego'.localeCompare('Joss'))
// // Preguntamos al string si comienza con ciertos caracteres a partir del indice 10
// // console.log(fruits.startsWith('2. apple', 10))
// console.log(fruits.includes('banana', 10))

// // Or devuelve verdadero si al menos uno de los valores de la operacion es verdadero

// const result = 3 === 3 || 'a' == 'a'

// console.log(result)

// AND devuelve verdadero si todos los valores en la operacion son verdaderos

// const adult = true

// const hasID = false

// // const canGoOut = adult || hasID 

// // console.log(canGoOut)

// // Not convierte un valor booleano a su inversa

// console.log(!hasID)

// comparacion simple (solo compara el valor)
// console.log(3 == '3')
// // comparacion compleja o identica (compara el valor y el tipo de dato)
// console.log(3 === '3')


// let userName = null

// userName = 'Tomi'

// console.log(userName)


// if(userName){
//   console.log(`Hola ${userName} Bienvenido a Ironhack`)
// }else{
//   console.log('Necesito un nombre')
// }

// let teacherName = 'Joss'

// teacherName[0] = 'j'

// teacherName = 'Lupita'

// console.log(teacherName, teacherName[0])
// const res = Number((0.1 + 0.2).toFixed(1))
// console.log(typeof res)
// console.log(res + 1)

console.log(Math.random())
console.log(Math.random())
console.log(Math.random())


console.log(Math.max(1, 43, 54, 35, -3, 0, -40))
console.log(Math.min(1, 43, 54, 35, -3, 0, -40))