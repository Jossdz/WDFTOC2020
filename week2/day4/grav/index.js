const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
const gravity = 0.98
const friction = 0.9
const keys = []

class Character {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 30
    this.height = 30
    this.velX = 0
    this.velY = 0
    this.jumpStrength = 12
    this.jumps = 0
    this.jumping = false
  }
  draw() {
    if (this.x < 0) this.x = $canvas.width
    if (this.x > $canvas.width) this.x = 0
    if (this.y > $canvas.height - this.height) {
      this.y = $canvas.height - this.height
      this.jumps = 0
      this.jumping = false
    }
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  changePos() {
    this.y += this.velY
    this.velY += gravity
    this.x += this.velX
    this.velX *= friction
  }
  jump() {
    console.log(this.jumps)
    this.jumping = false
    if (this.jumps >= 5) {
      this.jumping = true
    }
    if (!this.jumping) {
      this.jumps++
      this.velY = -this.jumpStrength
    }
  }
}

const p1 = new Character(20, 0)

function update() {
  checkKeys()
  p1.changePos()
  clearCanvas()
  p1.draw()
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

setInterval(update, 1000 / 60)

//control

function checkKeys() {
  if (keys["ArrowUp"]) {
    p1.jump()
  }
  if (keys["ArrowLeft"]) {
    p1.velX--
  }
  if (keys["ArrowRight"]) {
    p1.velX++
  }
}

document.onkeydown = e => {
  keys[e.key] = true
}

document.onkeyup = e => {
  keys[e.key] = false
}

// document.onkeydown = e => {
//   console.log(e.key)
//   switch (e.key) {
//     case "ArrowUp":
//       return p1.jump()
//     case "ArrowLeft":
//       return p1.velX--
//     case "ArrowRight":
//       return p1.velX++
//     default:
//       break
//   }
// }
