class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = $canvas.width
    this.height = $canvas.height
    this.img = new Image()
    this.img.src =
      "https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/images/bg.png"
    this.img.onload = () => {
      // console.log(this)
      this.draw()
    }
  }
  draw() {
    this.x--
    if (this.x < -$canvas.width) this.x = 0
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.img,
      this.x + $canvas.width,
      this.y,
      this.width,
      this.height
    )
  }
}

class Flappy {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 50
    this.height = 50
    this.velY = 0
    this.jumpS = 10
    this.img = new Image()
    this.img.src =
      "https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/images/flappy.png"
    this.img.onload = () => {
      this.draw()
    }
  }
  draw() {
    this.velY += gravity
    this.y += this.velY
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  jump() {
    this.velY = -this.jumpS
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
  constructor(y) {
    this.x = $canvas.width
    this.y = y
    this.width = 80
    this.height = 600
    this.topImg = new Image()
    this.botImg = new Image()
    this.topImg.src =
      "https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/images/obstacle_top.png"
    this.botImg.src =
      "https://raw.githubusercontent.com/ironhack-labs/lab-canvas-flappybirds/master/images/obstacle_bottom.png"
  }
  draw() {
    this.x--
    if (this.y <= 0) {
      ctx.drawImage(this.topImg, this.x, this.y, this.width, this.height)
    } else {
      ctx.drawImage(this.botImg, this.x, this.y, this.width, this.height)
    }
  }
}

//Instances

const board = new Board()
const flappy = new Flappy(10, $canvas.height / 2 - 25)
