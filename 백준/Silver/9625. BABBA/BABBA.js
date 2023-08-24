const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number)[0];

dp = new Array(45).fill([0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

if (input >= 2) {
  for (let i = 2; i <= input; i++) {
    let a = dp[i - 1][0] + dp[i - 2][0];
    let b = dp[i - 1][1] + dp[i - 2][1];
    dp[i] = [a, b];
  }
}

console.log(...dp[input]);
