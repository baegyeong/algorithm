const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const [a, b] = input[1].split(" ").map(Number);

const m = +input[2];
const graph = Array.from({ length: n + 1 }, () => []);
const visited = Array.from({ length: n + 1 }, () => false);

let answer = -1;

for (let i = 3; i < m + 3; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

function dfs(node, count) {
  visited[node] = true;

  if (node === b) {
    answer = count;
    return;
  }

  for (const n of graph[node]) {
    if (!visited[n]) {
      dfs(n, count + 1);
    }
  }
}

dfs(a, 0);
console.log(answer);
