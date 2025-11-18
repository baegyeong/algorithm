const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [p, w] = input[0].split(" ").map(Number);
const [c, v] = input[1].split(" ").map(Number);
const arr = input
  .slice(2)
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => b[2] - a[2]);

const parent = Array.from({ length: p }, (_, i) => i);

function find(x) {
  if (x === parent[x]) return x;
  parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA === rootB) return;
  if (rootA < rootB) parent[rootB] = rootA;
  else parent[rootA] = rootB;
}

for (let i = 0; i < w; i++) {
  const [start, end, width] = arr[i];

  union(start, end);

  if (find(c) === find(v)) {
    console.log(width);
    break;
  }
}
