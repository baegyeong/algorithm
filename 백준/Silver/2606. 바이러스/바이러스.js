const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [from, to] = input[i + 2].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const visited = Array.from({ length: N + 1 }).fill(false);

function BFS(v) {
  const queue = [v];
  visited[v] = true;

  while (queue.length) {
    const node = queue.shift();
    for (i of graph[node]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
}

BFS(1);

const virus = visited.filter((x) => x === true).length - 1;
console.log(virus);
