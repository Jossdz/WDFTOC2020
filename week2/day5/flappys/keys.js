document.onkeydown = e => {
  if (!intervalId) return
  if (e.key === " ") {
    flappy.jump()
  }
}
