const fs = require("fs");
const [N, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const dp = new Array(N + 1).fill(0);
const total = input.reduce((acc, cur) => acc + cur, 0);

if (N <= 2) {
  console.log(total);
  return;
}

dp[1] = input[0];
dp[2] = input[1];
dp[3] = input[2];

for (let i = 4; i <= N - 1; i++) {
  dp[i] = Math.min(dp[i - 2], dp[i - 3]) + input[i - 1];
}

console.log(total - Math.min(dp[N - 1], dp[N - 2]));
