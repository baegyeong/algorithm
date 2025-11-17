const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const arr = [0, ...input.slice(1).map(Number)];
const dp = Array.from({ length: n + 1 }).fill(0);

if (n >= 1) dp[1] = arr[1];
if (n >= 2) dp[2] = arr[1] + arr[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 1] + arr[i], dp[i - 2] + arr[i]);
}

console.log(dp[n]);
