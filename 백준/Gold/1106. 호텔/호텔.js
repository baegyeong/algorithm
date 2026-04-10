const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[C, N], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const MAX = C + 100;

const dp = Array.from({ length: N + 1 }, () => Array(MAX + 1).fill(Infinity));

dp[0][0] = 0;

for (let i = 1; i <= N; i++) {
  const [W, V] = input[i - 1];

  for (let j = 0; j <= MAX; j++) {
    dp[i][j] = dp[i - 1][j];

    if (j >= V) {
      dp[i][j] = Math.min(dp[i][j - V] + W, dp[i][j]);
    }
  }
}

let answer = Infinity;
for (let i = C; i <= MAX; i++) {
  answer = Math.min(answer, dp[N][i]);
}

console.log(answer);
