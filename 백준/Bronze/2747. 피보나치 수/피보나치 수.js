const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().split("\n")[0]);

let dp = new Array(1000).fill(0);
dp[1] = 1;

for (let i = 2; i <= input; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[input]);
