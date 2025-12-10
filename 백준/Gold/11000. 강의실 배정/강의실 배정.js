const fs = require("fs");
const [[N], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const starts = [];
const ends = [];

for (const [s, t] of input) {
  starts.push(s);
  ends.push(t);
}

starts.sort((a, b) => a - b);
ends.sort((a, b) => a - b);

let i = 0;
let j = 0;
let rooms = 0;
let maxRooms = 0;

while (i < N) {
  if (starts[i] < ends[j]) {
    rooms++;
    maxRooms = Math.max(maxRooms, rooms);
    i++;
  } else {
    rooms--;
    j++;
  }
}

console.log(maxRooms);
