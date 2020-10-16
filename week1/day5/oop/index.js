console.log('Objetos!')

// funcion comun
function a(){

}

a()

// const car = {
//   color: 'black',
//   isOn: false,
//   // metodo
//   start(){
//     console.log('start')
//     this.isOn = true
//   },
//   stop(){
//     this.isOn = false
//   },
//   status(){
//     if(this.isOn){
//       return `The car is On`
//     }
//     return `The car is Off`
//   }
// }

// const car2 = {...car, color: 'gray'}

// car.start()

// console.log(car.status())

// car.stop()

// console.log(car.status())

// class Car {
//   constructor(color, owner){
//     this.color = color
//     this.owner = owner
//     this.isOn = false
//   }
//   start = () => {
//     this.isOn = true
//   }
//   stop(){
//     this.isOn = false
//   }
//   status(){
//     if(this.isOn){
//       return `The car is On`
//     }
//     return `The car is Off`
//   }
// }

// class Tesla extends Car {
//   constructor(color, owner){
//     super(color, owner)
//     this.model = 'Tesla'
//   }
// }

// class CyberTruck extends Tesla {
//   constructor(color, owner, gas){
//     super(color, owner)
//     this.gas = gas
//     this.fragile = true
//   }
// }


// const car = new Car('white', 'Jess')
// const car2 = new Tesla('yellow', 'Carlos')
// const car3 = new CyberTruck('gray', 'Tommi', 40)
// car3.start()

// console.log(car3.status())

// console.log(car, car2, car3)


// class Food {
//   constructor(name, temp, picante){
//     if(typeof temlayer!== 'number'){
// /layer/       console.error('Error! el parametro temperatura deberia ser un numero')
//     }
//     this.name = name
//     this.temperatura = temp
//     this.picante = picante
//   }
//   informacion(){
//     return `Este platillo se llama ${this.name} y esta a ${this.temperatura}o`
//   }
// }

// const chilaquiles = new Food('chilaquiles', 23, true)

// console.log(chilaquiles.informacion())


// class ComidaDulce extends Food {
//   constructor(name, temp, picante){
//     super(name, temp, picante)
//     this.picante = false
//   }
// }

// const pulparindo = new ComidaDulce('pulparindo', 10, true)

// console.log(pulparindo.informacion());
// console.log(pulparindo)

class Character {
  constructor(name, color){
    this.name = name
    this.color = color
    this.alive = true
  }
  info(){
    console.log(`El personaje ${this.name} es de color ${this.color}`)
  }
}

class CrewMate extends Character {
    constructor(name, color){
      super(name, color)
      this.canKill = false
    }
  }
  
  class Impostor extends Character {
    constructor(name, color){
      super(name, color)
      this.canKill = true
  }
  kill(character){
    character.alive=false
  }
}


const Joss = new Character('Joss', 'white')
const Lupita = new CrewMate('Lupita', 'blue')
const Carlos = new CrewMate('Carlos', 'red')
const Tomi = new Impostor('Tomi', 'pink')


function checkStatus(){
  const players = [Joss, Lupita, Carlos, Tomi]
  players.forEach(player => console.log(player.alive))
}

checkStatus()

Tomi.kill(Carlos)


checkStatus()