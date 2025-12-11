const fs = require("fs");
const [[N], [K], input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

if (K >= N) {
  console.log(0);
  return;
}

input.sort((a, b) => a - b);

const diffs = [];
for (let i = 1; i < N; i++) {
  diffs.push(input[i] - input[i - 1]);
}

diffs.sort((a, b) => b - a);

let result = 0;
for (let i = K - 1; i < diffs.length; i++) {
  result += diffs[i];
}

console.log(result);
