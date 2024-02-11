const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let graph = [];
for (let i = 0; i < num; i++) {
  graph[i] = input[i + 1].split("").map(Number);
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

visited = Array.from({ length: num }, () => []);
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    visited[i][j] = false;
  }
}

let answer = 0;
let result = [];
function dfs(x, y) {
  visited[x][y] = true;
  answer += 1;

  for (let i = 0; i < 4; i++) {
    const xplus = x + dx[i];
    const yplus = y + dy[i];
    if (
      xplus > -1 &&
      yplus > -1 &&
      xplus < num &&
      yplus < num &&
      graph[xplus][yplus] === 1 &&
      !visited[xplus][yplus]
    ) {
      dfs(xplus, yplus);
    }
  }
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      dfs(i, j);
      answer !== 0 && result.push(answer);
      answer = 0;
    }
  }
}

result.sort((a, b) => a - b);
const count = result.length;
console.log(count + "\n" + result.join("\n"));