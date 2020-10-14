const car = {
  color: 'black',
  gas: 20,
  seats: [true, false, false, true],
  isOn: false,
  start: function(){
    console.log('encendido')
  }
}


// const prop = 'gas'

// console.log(car);

// console.log(car.color);
// console.log(car['color']);
// // con string por fuera
// console.log(car[prop]);

// // Agregar propiedades a un objeto

// car['model'] = 'Tesla Roadster'


// // console.log(prop in car)

// car['color'] = 'red'
// // car.color = 'red'

// delete car.seats

// console.log(car)

// Generamos un arreglo que si podemos iterar con Object.keys
// Object.keys(car).forEach(prop => {
//   console.log(`el coche tiene una propiedad: ${prop}`)
// })
// Generamos un arreglo que si podemos iterar con Object.values
// Object.values(car).forEach(prop => {
//   console.log(`el coche tiene el valor: ${prop}`)
// })
// Podemos generar un arreglo a partir de un objeto con el metodo Object.entries
// Object.entries(car).forEach(prop => {
//   console.log(`el coche tiene una propiedad: ${prop[0]} con el valor ${prop[1]}`)
// })

for(let key in car){
  console.log(`el coche tiene una propiedad: ${key} con el valor ${car[key]}`)
}