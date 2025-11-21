const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input
  .slice(1)
  .map((item) => item.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

let max = arr[0][1],
  len = Math.abs(arr[0][1] - arr[0][0]);

for (let i = 1; i < N; i++) {
  const [x, y] = arr[i];

  if (max === x) {
    len += Math.abs(y - x);
  } else if (max > x) {
    if (max >= y) continue;
    len += Math.abs(y - max);
  } else {
    len += Math.abs(y - x);
  }

  max = Math.max(y, max);
}

console.log(len);
