const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];
input.shift();

const dp = Array.from({ length: T }).fill(0);

dp[0] = 1;
dp[1] = 2;
dp[2] = 4;

for (let i = 3; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(dp[input[i] - 1]);
}
