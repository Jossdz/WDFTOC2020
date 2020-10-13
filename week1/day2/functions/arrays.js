console.log('arrays')
const names = ['Joss', 'Lupita', 'Jorge']

names.push('Francisco')

console.log(names)


// names.splice(0,3)

// console.log(names)
// //remueve el ultimo elemento del array
// names.pop()
// //remueve el primer elemento del array
// names.shift()

// names.forEach((name, index) => {
//   console.log(`Hola ${name} tu posicion en la lista es: ${index + 1}`)
// })

let phrase = "This is long enough for. a string to count it words";

let words = phrase.split(" ");


console.log(words.reverse().join(' '))