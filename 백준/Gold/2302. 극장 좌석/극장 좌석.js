const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const fixed = input.slice(2).map(Number);

const dp = Array(N + 1).fill(1);

let result = 1;

for (let i = 2; i <= N; i++) {
  if (fixed.includes(i)) {
    dp[i + 1] = 1;
    result *= dp[i - 1];
  } else if (fixed.includes(i - 1)) {
    continue;
  } else {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
}

if (!fixed.includes(N)) {
  result *= dp[N];
}

console.log(result);
