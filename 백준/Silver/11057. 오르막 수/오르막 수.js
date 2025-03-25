const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().split("\n")[0];

const dp = Array.from(Array(N + 1), () => new Array(10).fill(1));

for (let i = 2; i <= N; i++) {
  for (let j = 1; j < 10; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007;
  }
}

console.log(dp[N].reduce((a, v) => a + v) % 10007);
