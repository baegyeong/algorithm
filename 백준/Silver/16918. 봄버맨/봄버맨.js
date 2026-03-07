const isLocal = process.platform !== "linux";
const filePath = isLocal ? "input.txt" : "/dev/stdin";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [R, C, N] = input[0].split(" ").map(Number);
let board = input.slice(1).map((line) => line.split(""));
let allBomb = Array.from({ length: R }, () => Array(C).fill("O"));

const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function bomb() {
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (board[x][y] === ".") continue;

      allBomb[x][y] = ".";

      for (const [dx, dy] of directions) {
        const nx = dx + x;
        const ny = dy + y;

        if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;
        allBomb[nx][ny] = ".";
      }
    }
  }

  board = [...allBomb];
  allBomb = Array.from({ length: R }, () => Array(C).fill("O"));
}

function printBoard(board) {
  console.log(board.map((item) => item.join("")).join("\n"));
}

if (N % 2 === 0) {
  printBoard(allBomb);
  return;
}

for (let i = 3; i <= N; i += 2) {
  bomb();
}

printBoard(board);
