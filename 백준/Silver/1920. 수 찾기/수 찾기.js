const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arr = input[3].split(" ").map(Number);

const result = [];

for (const x of arr) {
  let start = 0;
  let end = N - 1;
  let mid = 0;
  let isFind = false;

  while (start <= end) {
    if (A[mid] === x) {
      isFind = true;
      result.push(1);
      break;
    }

    mid = parseInt((start + end) / 2);
    if (x < A[mid]) {
      end = mid - 1;
    } else if (x > A[mid]) {
      start = mid + 1;
    }
  }

  if (!isFind) result.push(0);
}

console.log(result.join("\n"));
