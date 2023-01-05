const canvas = document.getElementById("flappy-bird");
const ctx = canvas.getContext("2d");

let birdY = 50;
let birdV = 0;

let pipeX = 300;
let pipeY = 100;

function drawBird() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(50, birdY, 50, 50);
}

function drawPipe() {
  ctx.fillStyle = "green";
  ctx.fillRect(pipeX, 0, 50, pipeY);
  ctx.fillRect(pipeX, pipeY + 100, 50, 500);
}

function movePipe() {
  pipeX -= 5;
  if (pipeX < -50) {
    pipeX = 300;
  }
}

function moveBird() {
  birdY += birdV;
  birdV += 0.5;
}

function flap() {
  birdV = -10;
}

document.addEventListener("keydown", flap);

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movePipe();
  moveBird();
  drawPipe();
  drawBird();
  requestAnimationFrame(update);
}

update();
