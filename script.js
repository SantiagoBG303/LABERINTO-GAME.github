const player = document.getElementById("player");
const goal = document.getElementById("goal");
const walls = document.querySelectorAll(".wall");
const message = document.getElementById("message");

let posX = 10;
let posY = 10;

document.addEventListener("keydown", (e) => {
  let newX = posX;
  let newY = posY;

  if (e.key === "ArrowUp") newY -= 10;
  if (e.key === "ArrowDown") newY += 10;
  if (e.key === "ArrowLeft") newX -= 10;
  if (e.key === "ArrowRight") newX += 10;

  const playerBox = { x: newX, y: newY, w: 20, h: 20 };
  let collision = false;

  walls.forEach((wall) => {
    const wallBox = {
      x: wall.offsetLeft,
      y: wall.offsetTop,
      w: wall.offsetWidth,
      h: wall.offsetHeight
    };

    if (
      playerBox.x < wallBox.x + wallBox.w &&
      playerBox.x + playerBox.w > wallBox.x &&
      playerBox.y < wallBox.y + wallBox.h &&
      playerBox.y + playerBox.h > wallBox.y
    ) {
      collision = true;
    }
  });

  if (!collision) {
    posX = newX;
    posY = newY;
    player.style.left = posX + "px";
    player.style.top = posY + "px";
  }

  if (
    posX + 20 > goal.offsetLeft &&
    posY + 20 > goal.offsetTop
  ) {
    message.textContent = "🎉 ¡Ganaste!";
  }
});
