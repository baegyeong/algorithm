const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((x) => x.split(" ").map(Number));
const dp = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  const [t, p] = arr[i];
  if (i + t > n) continue;
  dp[i] += p;
  for (let j = i + t; j < n; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}

console.log(Math.max(...dp));
