const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let dp = new Array(num).fill(1);

for (let i = 0; i < num; i++) {
  let current = arr[i];
  for (let j = 0; j < i; j++) {
    if (current > arr[j]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(Math.max(...dp));
