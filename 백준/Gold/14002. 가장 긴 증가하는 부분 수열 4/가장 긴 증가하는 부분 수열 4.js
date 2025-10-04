const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array.from({ length: N }, (_, i) => [[], 1]);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i][1] = Math.max(dp[i][1], dp[j][1] + 1);
      if (dp[i][1] === dp[j][1] + 1) {
        dp[i][0] = dp[j][0];
      }
    }
  }
  dp[i][0] = dp[i][0].concat(arr[i]);
}

const count = Math.max(...dp.map((item) => item[1]));
const result = dp.find((item) => item[1] === count);
console.log(`${result[1]}\n${result[0].join(" ")}`);
