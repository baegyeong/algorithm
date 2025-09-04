const fs = require("fs");
const data = fs.readFileSync(0, 'utf-8').trim().split("\n").map(Number);
const N = data[0];
const M = data[1];

const arr = Array.from({ length: N }, () => Array(N).fill(0));

let x = Math.floor(N / 2);
let y = Math.floor(N / 2);
arr[x][y] = 1;

let targetX = x;
let targetY = y;
if (M !== 1) {
  targetX = -1;
  targetY = -1;
}

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let cur = 2;
let step = 1;
let index = 0;

while (cur <= N * N) {
  for (let r = 0; r < 2; r++) {
    const [dx, dy] = directions[index % 4];
    for (let s = 0; s < step && cur <= N * N; s++) {
      x += dx;
      y += dy;
      arr[x][y] = cur;
      if (cur === M) {
        targetX = x;
        targetY = y;
      }
      cur++;
    }
    index++;
  }
  step++;
}

console.log(arr.map((row) => row.join(" ")).join("\n"));
console.log(targetX + 1, targetY + 1);
