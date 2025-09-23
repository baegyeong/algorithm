const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((item) => item.split(""));
const visited = Array.from({ length: R }, () => Array(C).fill(false));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let current = { wolf: 0, sheep: 0 };
const result = { wolf: 0, sheep: 0 };

function dfs(x, y) {
  if (visited[x][y]) return;
  visited[x][y] = true;

  if (graph[x][y] === "v") current.wolf++;
  if (graph[x][y] === "o") current.sheep++;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx < 0 ||
      ny < 0 ||
      nx >= R ||
      ny >= C ||
      visited[nx][ny] ||
      graph[nx][ny] === "#"
    )
      continue;

    dfs(nx, ny);
  }
}

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (!visited[i][j] && graph[i][j] !== "#") {
      current.wolf = 0;
      current.sheep = 0;

      dfs(i, j);

      if (current.wolf >= current.sheep) {
        result.wolf += current.wolf;
      } else {
        result.sheep += current.sheep;
      }
    }
  }
}

console.log(`${result.sheep} ${result.wolf}`);
