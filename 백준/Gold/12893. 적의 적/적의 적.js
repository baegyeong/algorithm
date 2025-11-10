const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [start, to] = input[i].split(" ").map(Number);

  graph[start].push(to);
  graph[to].push(start);
}

const visited = Array(N + 1).fill(0);
let isBipartite = true;

function dfs(x, c) {
  visited[x] = c;

  for (const node of graph[x]) {
    if (visited[node] === c) {
      isBipartite = false;
      return;
    }

    if (visited[node] === 0) dfs(node, -c);
  }
}

for (let i = 1; i <= N; i++) {
  if (visited[i] === 0) dfs(i, 1);
}

console.log(isBipartite ? 1 : 0);
