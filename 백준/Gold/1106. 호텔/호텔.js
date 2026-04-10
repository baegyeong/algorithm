const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [[C, N], ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const MAX = C + 100;

const dp = Array(MAX + 1).fill(Infinity);

dp[0] = 0;

for (const [W, V] of input) {
  for (let j = V; j <= MAX; j++) {
    dp[j] = Math.min(dp[j], dp[j - V] + W);
  }
}

let answer = Infinity;
for (let i = C; i <= MAX; i++) {
  answer = Math.min(answer, dp[i]);
}

console.log(answer);
