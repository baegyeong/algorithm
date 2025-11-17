const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const range = input.slice(2).map((item) => item.split(" ").map(Number));

const answer = [];
const dp = new Array(N + 1).fill(0);
dp[0] = 0;
dp[1] = arr[0];

for (let i = 2; i <= N; i++) {
  dp[i] += dp[i - 1] + arr[i - 1];
}

for (const [i, j] of range) {
  answer.push(dp[j] - dp[i - 1]);
}

console.log(answer.join("\n"));
