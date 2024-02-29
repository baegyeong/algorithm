const fs = require("fs");
let [tc, ...cases] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
tc = Number(tc);
let INF = 1e9;

const bf = (n, graph) => {
  const dist = new Array(n + 1).fill(INF);
  dist[1] = 0;
  for (let i = 0; i < n; i++) {
    for (const [u, v, w] of graph) {
      if (dist[v] > dist[u] + w) {
        dist[v] = dist[u] + w;
        if (i === n - 1) return true;
      }
    }
  }

  return false;
};

for (let i = 0; i < tc; i++) {
  const [n, m, w] = cases.shift().split(" ").map(Number);
  let graph = [];

  for (let j = 0; j < m; j++) {
    const [s, e, t] = cases.shift().split(" ").map(Number);
    graph.push([s, e, t], [e, s, t]);
  }

  for (let j = 0; j < w; j++) {
    const [s, e, t] = cases.shift().split(" ").map(Number);
    graph.push([s, e, -t]);
  }

  console.log(bf(n, graph) ? "YES" : "NO");
}
