const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
arr.unshift(0);
const dp = Array(N + 1).fill(0);

dp[1] = arr[1];
dp[2] = Math.max(arr[1] + arr[1], arr[2]);

for (let i = 3; i <= N; i++) {
  dp[i] = arr[i];
  for (let j = i; j >= 0; j--) {
    const k = i - j;
    dp[i] = Math.max(dp[i], dp[j] + dp[k]);
  }
}

console.log(dp[N]);
