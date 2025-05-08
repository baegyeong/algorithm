const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = +input[0];

for (let i = 1; i < T * 2; i += 2) {
  const N = +input[i];
  const arr = input[i + 1].split(" ").map(Number);

  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 1; i < N; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  console.log(maxSum);
}
