const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
let dp = new Array(90).fill(0);
dp[1] = 1;

if (num > 1) {
  for (let i = 2; i <= num; i++) {
    dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
  }
}

console.log(dp[num].toString());
