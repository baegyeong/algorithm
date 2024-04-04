const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

const dp = new Array(input).fill(0);

dp[1] = 0;
dp[2] = 1;
dp[3] = 2;

for (let i = 4; i <= input; i++) {
  dp[i] = ((i - 1) * (dp[i - 1] + dp[i - 2])) % 1000000000;
}

console.log(dp[input]);
