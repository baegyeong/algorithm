const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const testCase = Number(input[0]);

for (let i = 0; i < testCase; i++) {
  const N = Number(input[1]);
  const coins = input[2].split(" ").map(Number);
  const M = Number(input[3]);

  const dp = new Array(M + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let j = 0; j <= M; j++) {
      if (j >= coin) {
        dp[j] += dp[j - coin];
      }
    }
  }

  console.log(dp[M]);
  input.splice(1, 3);
}
