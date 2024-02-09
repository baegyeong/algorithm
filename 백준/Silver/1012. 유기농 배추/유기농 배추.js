const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const t = Number(input[0]);
input.shift();

let arr = [];
let visited = [];

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function dfs(x, y) {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const xplus = x + dx[i];
    const yplus = y + dy[i];
    const node = [xplus, yplus];
    if (
      xplus >= 0 &&
      yplus >= 0 &&
      arr.some((x) => x[0] === node[0] && x[1] === node[1]) &&
      !visited[xplus][yplus]
    ) {
      dfs(xplus, yplus);
    }
  }
}

let result = 0;
let answer = [];

for (let j = 0; j < t; j++) {
  const [m, n, k] = input[0].split(" ").map(Number);
  input.shift();

  for (let w = 0; w < k; w++) {
    const [a, b] = input[w].split(" ").map(Number);
    arr.push([a, b]);
  }

  for (let i = 0; i < m; i++) visited[i] = [false];

  for (let i = 0; i < k; i++) {
    const x = arr[i][0];
    const y = arr[i][1];
    if (!visited[x][y]) {
      dfs(arr[i][0], arr[i][1]);
      result += 1;
    }
  }

  answer.push(result);
  result = 0;
  arr = [];
  visited = [];
  input.splice(0, k);
}

console.log(answer.join("\n"));
