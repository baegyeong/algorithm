const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, M, K] = input[0];
const candy = input[1];
const relationships = input.slice(2);

const parent = Array.from({ length: N + 1 }, (_, i) => i);
const size = Array(N + 1).fill(1);

function find(x) {
  if (x === parent[x]) return x;
  parent[x] = find(parent[x]);

  return parent[x];
}

function union(a, b) {
  const rootA = find(a);
  const rootB = find(b);

  if (rootA !== rootB) {
    parent[rootB] = rootA;
    size[rootA] += size[rootB];
    candy[rootA - 1] += candy[rootB - 1];
    return true;
  }

  return false;
}

relationships.forEach(([u, v]) => union(u, v));

const items = [];
for (let i = 1; i <= N; i++) {
  if (parent[i] === i) {
    items.push({ w: size[i], v: candy[i - 1] });
  }
}

const dp = Array(K).fill(0);

for (const item of items) {
  for (let j = K - 1; j >= item.w; j--) {
    dp[j] = Math.max(dp[j], dp[j - item.w] + item.v);
  }
}

console.log(Math.max(...dp));
