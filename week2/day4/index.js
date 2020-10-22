const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
const $startBtn = document.querySelector("button")
let intervalId
let frames = 0
let ratio = 200
let score = 0
let obstacles = []

// Classes
class Character {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    this.color = color
    this.width = 50
    this.height = 50
    this.vel = 10
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  move(dir) {
    switch (dir) {
      case "UP":
        if (this.y <= 0) return
        return (this.y -= this.vel)
      case "DOWN":
        if (this.y >= $canvas.height - this.height) return
        return (this.y += this.vel)
      case "LEFT":
        if (this.x <= 0) return
        return (this.x -= this.vel)
      case "RIGHT":
        if (this.x >= $canvas.width - this.width) return
        return (this.x += this.vel)
      default:
        throw new Error("Invalid direction")
    }
    // if(dir === 'UP'){
    //   this.y -= this.vel
    // }else if(dir === 'DOWN'){
    //   this.y += this.vel
    // }else if(dir === 'LEFT'){
    //   this.x -= this.vel
    // }else if(dir === 'RIGHT'){
    //   this.x += this.vel
    // }else{
    //   throw new Error('asef')
    // }
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}

class Obstacle {
  constructor(y, height) {
    this.x = $canvas.width
    this.y = y
    this.width = 30
    this.height = height
  }
  draw() {
    this.x--
    ctx.fillStyle = "forestgreen"
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

// Instan
const usrColor = prompt("inserta un color")
const p1 = new Character(200, 20, usrColor)
//TODO: Generar obstaculos

// Main

function update() {
  frames++
  // 1. Recalcular el estado del juego
  // 2. Limpiar el canvas
  clearObstacles()
  generateObstacles()
  clearCanvas()
  checkCollitions()
  // 3. Pintar los elementos del juego
  p1.draw()
  drawObstacles()
  printScore()
}

function start() {
  if (intervalId) return
  intervalId = setInterval(update, 1000 / 60)
}

$startBtn.onclick = start

// Aux fn

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

function generateObstacles() {
  // if (frames % 150 === 0) ratio -= 10
  if (frames % ratio === 0) {
    const min = 100
    const max = $canvas.height - 100
    const randomHeight = Math.floor(Math.random() * (max - min))
    const gap = 100
    obstacles.push(new Obstacle(0, randomHeight))
    obstacles.push(
      new Obstacle(randomHeight + gap, $canvas.height - randomHeight - gap)
    )
  }
}

function drawObstacles() {
  obstacles.forEach(obs => obs.draw())
}

function clearObstacles() {
  obstacles = obstacles.filter(obs => obs.x > -obs.width)
}

function checkCollitions() {
  obstacles.forEach(obs => {
    if (p1.isTouching(obs)) {
      alert("perdiste")
    }
  })
}

function printScore() {
  if (frames % 200 === 0 && frames > 500) score++
  ctx.font = "20px Sans-serif"
  ctx.fillStyle = "black"
  ctx.fillText(`Score: ${score}`, $canvas.width - 100, 30)
}
// Controls

document.onkeydown = e => {
  switch (e.key) {
    case "ArrowUp":
      return p1.move("UP")
    case "ArrowDown":
      return p1.move("DOWN")
    case "ArrowLeft":
      return p1.move("LEFT")
    case "ArrowRight":
      return p1.move("RIGHT")
    default:
      break
  }
}
