const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[N, M], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const parent = Array.from({ length: N + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) {
    return parent[x];
  }

  parent[x] = find(parent[x]);
  return parent[x];
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA < rootB) {
    parent[rootB] = parent[rootA];
  } else {
    parent[rootA] = parent[rootB];
  }
}

let cycle = 0;

for (const [u, v] of input) {
  if (find(u) !== find(v)) {
    union(u, v);
  } else {
    cycle++;
  }
}

const root = new Set();

for (let i = 1; i <= N; i++) {
  root.add(find(i));
}

console.log(cycle + root.size - 1);
