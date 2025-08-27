const fs = require("fs");
const input = +fs.readFileSync(0, 'utf-8').trim().split("\n");

const dp = Array.from({ length: input + 1 }, () => 0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[input]);
