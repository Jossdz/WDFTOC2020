// places
// .filter(place => place.price > 200)
// .map(place => place.title)

console.log('sort')

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// const orderedNumbers = [...numbers].sort((a, b) => {
//   return a - b
// })

const orderedNumbers = numbers.map(n=>n).sort((a, b) => {
  return a - b
})

console.log(numbers)