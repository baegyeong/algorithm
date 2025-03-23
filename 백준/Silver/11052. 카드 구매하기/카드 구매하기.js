const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const cards = input[1].split(" ").map(Number);

const dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
  }
}

console.log(dp[N]);
