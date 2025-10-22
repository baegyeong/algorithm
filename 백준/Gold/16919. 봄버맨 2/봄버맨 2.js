const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C, N] = input[0].split(" ").map(Number);
const initBoard = input.slice(1).map((item) => item.split(""));
let bombBoard = JSON.parse(JSON.stringify(initBoard));
let allBombBoard;

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const queue = [];

function getBombPosition(board) {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] === "O") {
        queue.push([i, j]);
      }
    }
  }
}

function installBomb() {
  return Array.from({ length: R }, () => Array(C).fill("O"));
}

function boom(board) {
  const copiedBoard = JSON.parse(JSON.stringify(board));

  while (queue.length) {
    const [x, y] = queue.shift();
    copiedBoard[x][y] = ".";

    for (const [dx, dy] of directions) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
      copiedBoard[nx][ny] = ".";
    }
  }

  return copiedBoard;
}

function arrToString(answer) {
  return answer.map((item) => item.join("")).join("\n");
}

let beforeBomb, afterBomb;

for (let i = 0; i < 4; i++) {
  if (i % 2 === 0) {
    getBombPosition(bombBoard);
    allBombBoard = installBomb();
  } else {
    bombBoard = boom(allBombBoard);
    if (i === 3) {
      beforeBomb = bombBoard;
    } else {
      afterBomb = bombBoard;
    }
  }
}

if (N === 1) {
  console.log(arrToString(initBoard));
  return;
}

if (N % 2 === 0) {
  console.log(arrToString(allBombBoard));
  return;
}

if (N % 4 === 1) {
  console.log(arrToString(beforeBomb));
  return;
}

console.log(arrToString(afterBomb));
