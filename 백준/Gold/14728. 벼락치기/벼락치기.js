const fs = require("fs");
const [[N, T], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(T + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [K, S] = input[i - 1];
  for (let j = 1; j <= T; j++) {
    dp[i][j] = dp[i - 1][j];
    if (j >= K) {
      dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - K] + S);
    }
  }
}

console.log(dp[N][T]);
