const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => b[1] - a[1]);
let result = 0;

const visited = Array(1001).fill(false);

for (const [day, worth] of input) {
  let i = day;
  while (i > 0 && visited[i]) {
    i -= 1;
  }

  if (i === 0) continue;
  else {
    visited[i] = true;
    result += worth;
  }
}

console.log(result);
