const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  let current = input[i];
  for (let j = 0; j < i; j++) {
    if (current > input[j]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(N - Math.max(...dp));
