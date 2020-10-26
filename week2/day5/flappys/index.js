const $button = document.querySelector("button")

function update() {
  frames++
  checkLimits()
  generateObstacles()
  checkCollition()
  clearObstacles()
  //TODO: Limpiar el canvas
  clearCanvas()
  board.draw()
  flappy.draw()
  drawObstacles()
  printScore()
  if (!intervalId) gameOver()
}

function start() {
  if (intervalId) return
  intervalId = setInterval(update, 1000 / 60)
}

$button.onclick = start
