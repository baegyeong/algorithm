let [[N, K], A] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let answer = 0;

for (let bit = 19; bit >= 0; bit--) {
  const mask = 1 << bit;
  const filtered = [];

  for (const num of A) {
    if (num & mask) {
      filtered.push(num);
    }
  }

  if (filtered.length >= K) {
    answer |= mask;
    A = filtered;
  }
}

console.log(answer);
