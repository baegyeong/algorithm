const fs = require("fs");
let [N, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input = [
  ...input.filter((item) => item > 0).sort((a, b) => b - a),
  ...input.filter((item) => item <= 0).sort((a, b) => a - b),
];

if (N === 1) {
  console.log(input[0]);
  return;
}

let sum = 0;
let idx = 0;

while (idx < N) {
  const a = input[idx];
  const b = input[idx + 1];

  if (a * b >= a + b) {
    sum += a * b;
    idx += 2;
  } else {
    idx += 1;
    sum += a;
  }
}

console.log(sum);
