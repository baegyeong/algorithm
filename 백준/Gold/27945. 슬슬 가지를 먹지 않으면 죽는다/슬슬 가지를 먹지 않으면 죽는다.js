const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const edges = [];

for (let i = 1; i <= M; i++) {
  const [u, v, t] = input[i].split(" ").map(Number);
  edges.push([t, u, v]);
}

edges.sort((a, b) => a[0] - b[0]);

const parent = Array.from({ length: N + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return x;
  }
  parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);
  if (rootA < rootB) {
    parent[rootB] = rootA;
  } else {
    parent[rootA] = rootB;
  }
}

let day = 1;

for (let i = 0; i < M; i++) {
  const [t, u, v] = edges[i];
  if (t !== day) {
    break;
  }
  if (find(u) !== find(v)) {
    union(u, v);
    day++;
  }
}

console.log(day);
