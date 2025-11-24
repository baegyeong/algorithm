const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const HI = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const ARC = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = [0, 0, 0];

function binarySearch(target) {
  let start = 0;
  let end = M - 1;

  let lower = M;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);

    if (ARC[mid] >= target) {
      lower = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  start = 0;
  end = M - 1;
  let upper = M;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);

    if (ARC[mid] > target) {
      upper = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  result[0] += lower;
  result[1] += M - upper;
  result[2] += upper - lower;
}

for (const x of HI) {
  binarySearch(x);
}

console.log(result.join(" "));
