const [[N, D], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);

const dp = Array(D + 1).fill(Infinity);
const shortcuts = Array.from({ length: D + 1 }, () => []);
dp[0] = 0;

for (const [start, end, len] of input) {
  if (end > D || len >= end - start) continue;

  if (!shortcuts[start]) {
    shortcuts[start] = [];
  }
  shortcuts[start].push([end, len]);
}

for (let i = 0; i < D; i++) {
  dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);

  for (const [end, len] of shortcuts[i]) {
    dp[end] = Math.min(dp[end], dp[i] + len);
  }
}

console.log(dp[D]);
