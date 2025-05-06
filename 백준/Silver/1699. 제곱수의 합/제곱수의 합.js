const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

const dp = Array(input + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= input; i++) {
  for (let j = 1; j * j <= i; j++) {
    const square = j * j;
    dp[i] = Math.min(dp[i], dp[i - square] + 1);
  }
}

console.log(dp[input]);
