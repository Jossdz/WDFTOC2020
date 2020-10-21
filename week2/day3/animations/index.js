const $canvas = document.querySelector('canvas')
const ctx = $canvas.getContext('2d')
const $startBtn = document.querySelector('#start')
const $pauseBtn = document.querySelector('#pause')
let gameInterval

// const color = {
//   red: Math.floor(Math.random() * 255),
//   green: Math.floor(Math.random() * 255),
//   blue: Math.floor(Math.random() * 255),
//   rgb: function () {
//     return `rgb(${this.red}, ${this.green}, ${this.blue})`;
//   },
// };
// // let i = 0
// // function updateCanvas() {
// //   color.red = (color.red + 1) % 255;
// //   color.blue = (color.blue + 1) % 255;
// //   color.green = (color.green + 1) % 255;

// //   ctx.clearRect(0, 0, 480, 270);
// //   ctx.fillStyle = color.rgb();
// //   ctx.fillRect(0, 0, 150, 150);

// //   requestAnimationFrame(updateCanvas);
// // }

// function updateCanvas(){
//   color.red = (color.red + 1) % 255;
//   color.blue = (color.blue + 1) % 255;
//   color.green = (color.green + 1) % 255;

//   ctx.clearRect(0, 0, 480, 270);
//   ctx.fillStyle = color.rgb();
//   ctx.fillRect(0, 0, 150, 150);
//   // setTimeout(updateCanvas, 30)
// }

// setInterval(updateCanvas, 1000/60)

class Board{
  constructor(){
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.img = new Image()
    this.img.src = 'https://opengameart.org/sites/default/files/desert_BG.png'
  }
  draw(){
    if(this.x <-$canvas.width) this.x = 0
    this.x--
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
  }
}

class Character {
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = 30
    this.height = 48
    this.img = new Image()
    this.img.src = 'https://vignette.wikia.nocookie.net/among-us-wiki/images/a/ab/Cyan.png'
  }
  draw(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveUp(){
    this.y -= 5
  }
  moveDown(){
    this.y += 5
  }
  moveLeft(){
    this.x -= 5
  }
  moveRight(){
    this.x += 5
  }
}
let x = 0
let crewMate = new Character(20,$canvas.height-100)
let board = new Board()

function updateGame() {
  //recalcular el estado de los elementos
  x++
  //limpiar el canvas
  clearCanvas()
  //dibujar los elementos
  ctx.fillRect(x, 0, 10, 10)
  board.draw()
  crewMate.draw()
}

function startGame() {
  if (gameInterval) return
  gameInterval = setInterval(updateGame, 1000 / 60)
}

function pauseGame() {
  clearInterval(gameInterval)
  gameInterval = null
}
// 👇 === $button.onclick = startGame
$startBtn.addEventListener('click', startGame)
$pauseBtn.onclick = pauseGame

//funciones auxiliares

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}


// escuchar el teclado

document.onkeydown = e => {
  switch (e.keyCode) {
    // izquierda
    case 37:
    crewMate.moveLeft()
    break;
    //derecha
    case 39:
      crewMate.moveRight()
      break
      //arriba
      case 38:
        crewMate.moveUp()
        break
        case 40:
          crewMate.moveDown()
      break
    default:
      break;
  }
}