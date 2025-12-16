const [[N, M, K], input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);
const dp = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  if (i < K) {
    dp[i] = input[i];
  } else {
    dp[i] = dp[i - K] + input[i];
  }

  if (dp[i] > M) {
    console.log(i);
    return;
  }
}

console.log(N);
