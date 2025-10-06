const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

const MOD = 1_000_000_000;
const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][1] % MOD;
    else if (j === 9) dp[i][j] = dp[i - 1][8] % MOD;
    else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MOD;
  }
}

const result = dp[N].reduce((a, b) => (a + b) % MOD, 0);
console.log(result);
