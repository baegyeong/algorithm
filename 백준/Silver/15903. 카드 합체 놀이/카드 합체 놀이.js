const fs = require("fs");
const [[n, m], arr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let a = arr.map(BigInt);
a.sort((x, y) => (x < y ? -1 : 1));

for (let i = 0; i < m; i++) {
  const x = a[0];
  const y = a[1];
  const sum = x + y;

  a.splice(0, 2);

  const pos = binaryInsertPosition(a, sum);

  a.splice(pos, 0, sum, sum);
}

console.log(a.reduce((acc, v) => acc + v, 0n).toString());

function binaryInsertPosition(arr, value) {
  let l = 0,
    r = arr.length;
  while (l < r) {
    const mid = (l + r) >> 1;
    if (arr[mid] < value) l = mid + 1;
    else r = mid;
  }
  return l;
}
