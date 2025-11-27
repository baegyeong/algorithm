const fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr.sort((a, b) => b - a);

for (let i = 0; i < N; i++) {
  arr[i] = arr[i] * (i + 1);
}

console.log(Math.max(...arr));
