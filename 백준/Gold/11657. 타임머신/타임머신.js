const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let INF = 1e9;

const [n, m] = input[0].split(" ").map(Number);
const dist = new Array(n + 1).fill(INF);

const bf = (graph) => {
  dist[1] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const [a, b, c] = graph[j];
      if (dist[a] !== INF && dist[b] > dist[a] + c) {
        dist[b] = dist[a] + c;
        if (i === n - 1) return true;
      }
    }
  }

  return false;
};

let graph = [];

for (let j = 1; j <= m; j++) {
  const [a, b, c] = input[j].split(" ").map(Number);
  graph.push([a, b, c]);
}

let negative_cycle = bf(graph);

if (negative_cycle) console.log(-1);
else {
  for (let i = 2; i < n + 1; i++) {
    if (dist[i] === INF) {
      console.log(-1);
    } else {
      console.log(dist[i]);
    }
  }
}
