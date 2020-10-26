function checkLimits() {
  if (flappy.y <= 0 || flappy.y >= $canvas.height - flappy.height) gameOver()
}

function gameOver() {
  clearInterval(intervalId)
  intervalId = null
  ctx.fillStyle = "black"
  ctx.font = "40px Arial"
  ctx.fillText("Game Over", 140, $canvas.height / 2)
}

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

function generateObstacles() {
  if (frames % 300 === 0) {
    const minY = -$canvas.height + 100
    const maxY = 0
    const minGap = 120
    const maxGap = 160
    const randomGap = Math.floor(Math.random() * (maxGap - minGap) + minGap)
    const randomY = Math.floor(Math.random() * (maxY - minY) + minY)
    obstacles.push(new Obstacle(randomY))
    obstacles.push(new Obstacle(randomY + randomGap + 600))
  }
}

function drawObstacles() {
  obstacles.forEach(obs => obs.draw())
}

function checkCollition() {
  obstacles.forEach(obs => {
    if (flappy.isTouching(obs)) {
      gameOver()
    }
  })
}

function clearObstacles() {
  obstacles = [...obstacles].filter(o => o.x >= 0 - o.width)
}

let score = 0
function printScore() {
  ctx.fillStyle = "white"
  ctx.font = "20px arial"
  if (frames > 200 && frames % 50 === 0) {
    score++
  }
  ctx.fillText(`Score: ${score}`, 200, 30)
}
