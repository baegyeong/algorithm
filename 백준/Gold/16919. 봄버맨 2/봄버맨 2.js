const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C, N] = input[0].split(" ").map(Number);
const initBoard = input.slice(1).map((item) => item.split(""));

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function installBomb() {
  return Array.from({ length: R }, () => Array(C).fill("O"));
}

function getBombPosition(board) {
  const bombs = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === "O") {
        bombs.push([i, j]);
      }
    }
  }

  return bombs;
}

function boom(board) {
  const next = installBomb();
  const bombs = getBombPosition(board);

  for (const [x, y] of bombs) {
    next[x][y] = ".";

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      next[nx][ny] = ".";
    }
  }

  return next;
}

function arrToString(board) {
  return board.map((item) => item.join("")).join("\n");
}

if (N === 1) {
  console.log(arrToString(initBoard));
} else if (N % 2 === 0) {
  console.log(arrToString(installBomb()));
} else {
  const firstBoom = boom(initBoard);
  const secondBoom = boom(firstBoom);

  console.log(arrToString(N % 4 === 3 ? firstBoom : secondBoom));
}
