'use strict'

  // refer to the canvas element
  var canvas = document.getElementById("myCanvas")
  var ctx = canvas.getContext("2d")

  // define x and y
  var x = canvas.width/2
  var y = canvas.height-30

  // differences in x and y (movement/speed)
  var dx = -2
  var dy = -2

  //ball-radius for collision
  var ballRadius = 10;

  // for keyboard controls
  let rightKey = false
  let leftKey = false
  let upKey = false
  let downKey = false

// listeners for keystrokes
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
// listen for mouse
// document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler (e) {
  if (e.keyCode === 39) { rightKey = true }
  else if (e.keyCode === 37) { leftKey = true }
  if (e.keyCode === 38) {upKey = true}
  else if (e.keyCode === 40) {downKey = true}
}

function keyUpHandler(e) {
  if (e.keyCode === 39) { rightKey = false }
  else if (e.keyCode === 37) { leftKey = false }
  if (e.keyCode === 38) {upKey = true}
  else if (e.keyCode === 40) {downKey = true}
  }

  // collision detection
  function collisionDetection() {
      for(var c=0; c<brickColumnCount; c++) {
          for(var r=0; r<brickRowCount; r++) {
              var b = bricks[c][r];
              if(b.status === 1) {
               if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                   dy = -dy;
                   b.status = 0;
                   score++;
                   if(score === brickRowCount*brickColumnCount) {
                    alert("YOU WIN, CONGRATULATIONS!");
                    document.location.reload();
                  }
               }
             }
          }
      }
  }

  // keeping score
  function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
}

$(function() {
  window.keydown = {};

  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }

  $(document).bind("keydown", function(event) {
    keydown[keyName(event)] = true;
  });

  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });
});

// clear canvas, drawl ball, add movement
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // drawBall();
  // drawPaddle();
  // drawScore();
  // drawLives();
  // collisionDetection();
  // drawBricks();

  // collision detection for ball
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
      dy = -dy;
  // add lose condition, paddle + ball collision
  } else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
      lives--;
    if(!lives) {
      alert("GAME OVER");
      document.location.reload();
    }
    else {
      x = canvas.width/2;
      y = canvas.height-30;
      dx = 2;
      dy = -2;
      paddleX = (canvas.width-paddleWidth)/2;
    }
    }
  }

  // sideways collision detection for the paddle
  if(rightKey && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftKey && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;

  requestAnimationFrame(draw);
}


  draw();

module.exports = {
  draw: draw
}
