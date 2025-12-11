const fs = require("fs");
const [[N, L], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a[0] - b[0]);
let count = 0;
let lastPos = 0;

for (const [start, end] of input) {
  if (end <= lastPos) continue;
  const i = start <= lastPos ? lastPos + 1 : start;
  const range = end - i;
  const len = Math.ceil(range / L);
  count += len;
  lastPos = i + L * len - 1;
}

console.log(count);
