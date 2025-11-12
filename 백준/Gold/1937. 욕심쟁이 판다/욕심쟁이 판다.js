const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const graph = input.slice(1).map((item) => item.split(" ").map(Number));
const dp = Array.from({ length: n }, () => Array(n).fill(0));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let result = 0;

function dfs(x, y) {
  if (dp[x][y] !== 0) return dp[x][y];

  dp[x][y] = 1;

  for (const [dx, dy] of directions) {
    const nx = dx + x;
    const ny = dy + y;

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (graph[nx][ny] <= graph[x][y]) continue;

    dp[x][y] = Math.max(dp[x][y], dfs(nx, ny) + 1);
  }

  return dp[x][y];
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    result = Math.max(result, dfs(i, j));
  }
}

console.log(result);
