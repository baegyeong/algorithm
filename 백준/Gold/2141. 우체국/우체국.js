const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);

const total = input.reduce((a, b) => a + b[1], 0);
let prefix = 0;

for (let i = 0; i < N; i++) {
  const [X, A] = input[i];
  prefix += A;
  if (prefix >= total / 2) {
    console.log(X);
    return;
  }
}
