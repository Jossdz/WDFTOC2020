// // parametros    👇    👇
// function getAvg(num1, num2){
//   return (num1+num2)/2
// }
// const getAvg = (num1, num2) => (num1+num2)/2

// // argumentos     👇  👇
// const avg = getAvg(3, 4)
// const avg2 = getAvg(37, 43)

// Funcion como declaracion
// Se pueden ejecutar antes de ser declaradas
// Esto se debe al fenomeno llamado Hoisting

// console.log(printName(''))

// function printName(name){
//   if(name === '') return 'Please provide a valid name!'
//   return `Name is ${name}.`;
// }


// // Funcion como expresion
// // No se pueden ejecutar antes de ser declaradas

// // console.log(printName('Joss'))


// const sayHi = function(name){
//   console.log(`Hi ${name}`)
// }

// sayHi('Karen')
// function delayDinner(){
//   console.log('Eating the dinner!');
// }

// function eatDinner() {
//   setTimeout(function(){
//       console.log('Eating the dinner!');
//     }, 2000)
// }
 
// function eatDessert() {
//   console.log('Eating the dessert!');
// }

// eatDinner(); // <== Eating the dinner!
// eatDessert(); 


// Set timeout recibe como primer argumento una funcion que se va a ejecutar despues del tiempo que definimos como segundo argumento (ms)


// let dataFromDB


// function getDBData(){
//   setTimeout(function(){
//     dataFromDB = [1,2,35,4,3,5,6,3,5]
//   }, 2000)
// }

// console.log(dataFromDB)

// getDBData()

// setTimeout(function(){
//   console.log(dataFromDB)
// },3000)


// function eatDinner(callback){
//   console.log('Eating the dinner!');
//   callback()
// }

// function eatDessert() {Chocola
//   console.log('Eating the dessert!');
// }

// eatDinner(eatDessert)


// Cuando defines un parametro con el nombre callback esperas que el argumento sea una funcion anonima 

// const getFlavor = cb => {
//   let flavor = prompt('De que sabor quieres tu helado?')
//   cb(flavor)
// }

// function peticionAmable(flavor){
//   console.log(`Pediste un helado de ${flavor}`)
// }

// getFlavor(peticionAmable)

// getFlavor((flavor) => {
//   console.log(`Aqui esta tu pinche helado de ${flavor}`)
// })

// const user = {
//   name: 'ana',
//   age: 29,
//   getOlder: function () {
//     console.log(this);
//     console.log(this.name);
//   }
// };

// user.getOlder()

// function printSom(){
//   const args = Array.from(arguments);
//   args
// }


// printSom(1,2,3, 3, 4, 5, 6,7 )