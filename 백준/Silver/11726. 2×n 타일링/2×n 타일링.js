const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)[0];

let dp = [];
dp[0] = 1;
dp[1] = 1;

if (input >= 2) {
  for (let i = 2; i <= input; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2])%10007;
  }
}

console.log(dp[input] % 10007);
