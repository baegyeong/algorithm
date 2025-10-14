const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array.from({ length: N });

dp[0] = Math.max(arr[0], 1);
if (arr[0]) {
  dp[1] = Math.max(dp[0] + arr[1], dp[0] + 1);
} else {
  dp[1] = Math.max(dp[0], dp[0] + arr[1]);
}

for (let i = 2; i < N; i++) {
  if (arr[i - 1]) {
    dp[i] = Math.max(dp[i - 1] + 1, dp[i - 1] + arr[i]);
  } else if (arr[i]) {
    dp[i] = dp[i - 1] + arr[i];
  } else if (i === N - 1 && dp[0]) {
    dp[i] = dp[i - 1] + arr[i];
  } else {
    dp[i] = Math.max(dp[i - 2] + 1, dp[i - 1]);
  }
}

console.log(dp[N - 1]);
