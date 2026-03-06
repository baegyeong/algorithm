const isLocal = process.platform !== "linux";
const filePath = isLocal ? "input.txt" : "/dev/stdin";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [R, C] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(""));
const visited = Array(26).fill(0);
visited[board[0][0].charCodeAt(0) - 65] = 1;

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let answer = 0;

function dfs(x, y, depth) {
  answer = Math.max(depth, answer);

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= R || ny < 0 || ny >= C) continue;

    const idx = board[nx][ny].charCodeAt(0) - 65;

    if (visited[idx] === 0) {
      visited[idx] = 1;
      dfs(nx, ny, depth + 1);
      visited[idx] = 0;
    }
  }
}

dfs(0, 0, 1);
console.log(answer);
