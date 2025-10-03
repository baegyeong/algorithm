const fs = require("fs");
const [T, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString().trim()
  .split("\n")
  .map(Number);

const dp = Array.from({ length: 41 }, () => Array(2));

dp[0] = [1, 0];
dp[1] = [0, 1];

const maxN = Math.max(...input);

for (let i = 2; i <= maxN; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

let answer = "";
for (const x of input) {
  answer += `${dp[x][0]} ${dp[x][1]}\n`;
}

console.log(answer);
