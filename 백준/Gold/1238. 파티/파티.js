const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, M, X], ...edges] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const reverseGraph = Array.from({ length: N + 1 }, () => []);

for (const [a, b, t] of edges) {
  graph[a].push([b, t]);
  reverseGraph[b].push([a, t]);
}

function dijkstra(start, graph) {
  const dist = Array(N + 1).fill(Infinity);
  const visited = Array(N + 1).fill(false);

  dist[start] = 0;

  for (let i = 1; i <= N; i++) {
    let min = Infinity;
    let curr = -1;

    for (let j = 1; j <= N; j++) {
      if (!visited[j] && dist[j] < min) {
        min = dist[j];
        curr = j;
      }
    }

    if (curr === -1) break;

    visited[curr] = true;

    for (const [next, w] of graph[curr]) {
      if (dist[curr] + w < dist[next]) {
        dist[next] = dist[curr] + w;
      }
    }
  }

  return dist;
}

const distFromX = dijkstra(X, graph);
const distToX = dijkstra(X, reverseGraph);

let answer = 0;

for (let i = 1; i <= N; i++) {
  answer = Math.max(answer, distFromX[i] + distToX[i]);
}

console.log(answer);
