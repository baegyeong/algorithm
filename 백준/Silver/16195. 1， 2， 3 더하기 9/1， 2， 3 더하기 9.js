const [[T], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const MOD = 1_000_000_009;

const dp = Array.from({ length: 1001 }, () => Array(1001).fill(0));
dp[1][1] = 1;
dp[2][1] = 1;
dp[3][1] = 1;

dp[2][2] = 1;
dp[3][2] = 2;
dp[3][3] = 1;

let result = "";

for (let i = 4; i <= 1000; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 2][j - 1] + dp[i - 3][j - 1]) % MOD;
  }
}

for (const [n, m] of input) {
  let sum = 0;
  for (let i = 1; i <= m; i++) {
    sum = (sum + dp[n][i]) % MOD;
  }
  result += sum + "\n";
}

console.log(result);
