const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext('2d')

// ctx.fillStyle = 'crimson'
// ctx.strokeStyle = 'forestgreen'

// ctx.fillRect(10, 10, 100, 100)

// ctx.strokeRect(10,10,100,100)

// ctx.clearRect(20,20,80,80)

// ctx.beginPath()
// ctx.moveTo(20,10)
// ctx.lineTo(100, 110)
// ctx.lineTo(20, 210)
// // ctx.lineTo(20,10)
// ctx.fill()
// ctx.closePath()

// ctx.beginPath()
// ctx.moveTo(180, 10)
// ctx.lineTo(180, 100)
// ctx.moveTo(200, 10)
// ctx.lineTo(200, 100)
// ctx.stroke()

// ctx.beginPath()
// ctx.moveTo(200,200)
// ctx.arc(200,200,100,0,Math.PI*2)
// ctx.fill()

// ctx.arc()
// ctx.font = '30px Arial'
// ctx.strokeText('Hola', 100, 100)

// // ctx.strokeStyle = 'blue'
// // ctx.strokeText('Hey', 200, 200)

// class Box {
//   constructor(x, y, color){
//     this.x = x
//     this.y = y
//     this.color = color
//   }
//   draw(){
//     this.y += 1
//     ctx.fillStyle = this.color
//     ctx.fillRect(this.x, this.y, 20, 20)
//     if(this.y >= 400 - 20) this.y = 0 
//   }
// }

// const cajita = new Box(20, 20, 'green')
const image = new Image()
// cajita.draw()

class Character{
  constructor(x,y){
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = 'https://vignette.wikia.nocookie.net/among-us-wiki/images/a/ab/Cyan.png'
  }
  draw(){
    this.x += 1
    ctx.drawImage(this.img, this.x, this.y, 80, 120)
  }
}

const crewMate1 = new Character(10,10)
console.log(crewMate1.img)

const $button = document.querySelector('button')

$button.onclick = () => {
  setInterval(() => {
    ctx.clearRect(0,0, $canvas.width, $canvas.height)
    crewMate1.draw()
    // cajita.draw()
  }, 20)
}