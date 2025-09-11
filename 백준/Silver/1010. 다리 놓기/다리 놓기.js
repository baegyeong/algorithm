const fs = require("fs");
const [T, ...input] = fs.readFileSync(0, 'utf-8').trim().split("\n");

const dp = Array.from({ length: 31 }, () => Array(31).fill(0));

for (let i = 0; i <= 30; i++) {
  dp[i][0] = 1;
  dp[i][i] = 1;
  for (let j = 1; j < i; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

for (let i = 0; i < +T; i++) {
  const [N, M] = input[i].split(" ").map(Number);
  console.log(dp[M][N]);
}
