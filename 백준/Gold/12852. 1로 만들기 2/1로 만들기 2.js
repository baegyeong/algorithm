const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

const dp = new Array(N + 1).fill(0);
const pre = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  pre[i] = i - 1;

  if (i % 2 === 0 && dp[i] > dp[i / 2] + 1) {
    dp[i] = dp[i / 2] + 1;
    pre[i] = i / 2;
  }

  if (i % 3 === 0 && dp[i] > dp[i / 3] + 1) {
    dp[i] = dp[i / 3] + 1;
    pre[i] = i / 3;
  }
}

let cur = N;
let result = `${dp[N]}\n`;

while (true) {
  result += cur + " ";
  if (cur === 1) break;
  cur = pre[cur];
}

console.log(result);
