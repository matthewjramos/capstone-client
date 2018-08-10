'use strict'

// refer to the canvas element
function newGame () {
  $('myCanvas').stop()
  // $('#myCanvas').clear()
  draw()
}

const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')
let ballRadius = 10
let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = -2
const wolf = new Image()
wolf.src = './assets/wolf.png'
const spriteHeight = 30
const spriteWidth = 30
let spriteX = (canvas.width - spriteWidth) / 2
let spriteY = (canvas.height - spriteHeight) / 2
// console.log(canvas.height)

let rightKey = false
let leftKey = false
let upKey = false
let downKey = false

let frameCount = 0

document.addEventListener('keydown', keyDown, false)
document.addEventListener('keyup', keyUp, false)

function keyDown (e) {
  if (e.keyCode === 39) rightKey = true
  else if (e.keyCode === 37) leftKey = true
  if (e.keyCode === 38) upKey = true
  else if (e.keyCode === 40) downKey = true
}

function keyUp (e) {
  if (e.keyCode === 39) rightKey = false
  else if (e.keyCode === 37) leftKey = false

  if (e.keyCode === 38) upKey = false
  else if (e.keyCode === 40) downKey = false
}

function drawBall () {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
  ctx.fillStyle = '#a151e1'
  ctx.fill()
  ctx.closePath()
}

function drawSprite () {
  ctx.beginPath()
  ctx.rect(spriteX, spriteY, spriteWidth, spriteHeight)
  ctx.fillStyle = '#0095DD'
  ctx.fill()
  ctx.closePath()
}
function drawScore () {
  ctx.font = '16px Arial'
  ctx.fillStyle = '#a151e1'
  ctx.fillText('Score: ' + frameCount / 100, 8, 30)
}

function draw () {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawSprite()
  drawScore()

  if (x + dx > canvas.width || x + dx < 0) {
    dx = -dx
  }
  if (y + dy > canvas.height || y + dy < 0) {
    dy = -dy
  }

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx
  } if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy
  } else if ((x > spriteX && x < spriteX + spriteWidth) && (y > spriteY && y < spriteY + spriteHeight)) {
    // $('#content').html('GAME OVER')
    $('#display').html('Game over. You scored ' + (frameCount / 100) + '!')
    ballRadius += 200000
    $('#score').val((frameCount / 100))

    // $('#display').html('Signed in successfully!')

    // canvas.width = 0
    // document.location.reload()
  }

  if (rightKey && spriteX < canvas.width - spriteWidth) {
    spriteX += 5
  } else if (leftKey && spriteX > 0) {
    spriteX -= 5
  } if (downKey && spriteY < canvas.height - spriteHeight) {
    spriteY += 5
  } else if (upKey && spriteY > 0) {
    spriteY -= 5
  }

  x += dx
  y += dy
  requestAnimationFrame(draw)
  frameCount++
  // console.log(frameCount)
  ballRadius += 0.1
  // dx += 5
  // console.log(dx)
  // dy -= .1
  // canvas.width -= .0000000000001
  // console.log(dy)
  // dy += .05
  // spriteX += .05
  // spriteY += .05
}

draw()

module.exports = {
  draw: draw,
  newGame: newGame
}
