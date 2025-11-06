const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const edges = [];

for (let i = 1; i <= n; i++) {
  const cost = Number(input[i]);
  edges.push([cost, 0, i]);
}

const mat = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
  const row = input[n + i].split(" ").map(Number);
  for (let j = 1; j <= n; j++) {
    mat[i][j] = row[j - 1];
  }
}

for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    edges.push([mat[i][j], i, j]);
  }
}

const parent = Array.from({ length: n + 1 }, (_, i) => i);

function find(a) {
  if (parent[a] === a) return a;
  return (parent[a] = find(parent[a]));
}

function union(a, b) {
  a = find(a);
  b = find(b);
  if (a !== b) {
    if (a < b) parent[b] = a;
    else parent[a] = b;
  }
}

edges.sort((a, b) => a[0] - b[0]);

let total = 0;
for (const [cost, a, b] of edges) {
  if (find(a) !== find(b)) {
    union(a, b);
    total += cost;
  }
}

console.log(total);
