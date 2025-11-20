const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];
input.shift();

for (let i = 0; i < T; i++) {
  const n = +input[3 * i];
  const up = input[3 * i + 1].split(" ").map(Number);
  const down = input[3 * i + 2].split(" ").map(Number);

  const dp = [[0, up[0], down[0]]];

  for (let i = 1; i < n; i++) {
    dp[i] = [
      Math.max(...dp[i - 1]),
      Math.max(dp[i - 1][0], dp[i - 1][2]) + up[i],
      Math.max(dp[i - 1][0], dp[i - 1][1]) + down[i],
    ];
  }

  console.log(Math.max(...dp[n - 1]));
}
