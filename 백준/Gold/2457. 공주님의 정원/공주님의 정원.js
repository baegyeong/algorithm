const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function toDay(m, d) {
  let total = 0;
  for (let i = 1; i < m; i++) total += days[i];
  return total + d;
}

let flowers = input.map(([sm, sd, em, ed]) => [toDay(sm, sd), toDay(em, ed)]);

const START = toDay(3, 1);
const END = toDay(11, 30);

flowers.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  return a[0] - b[0];
});

let count = 0;
let idx = 0;
let current = START;

while (current <= END) {
  let best = -1;

  while (idx < N && flowers[idx][0] <= current) {
    best = Math.max(best, flowers[idx][1]);
    idx++;
  }

  if (best === -1) break;

  count++;
  current = best;

  if (best > END) break;
}

console.log(current > END ? count : 0);