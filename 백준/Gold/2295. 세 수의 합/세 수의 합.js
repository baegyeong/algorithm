const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let twoSum = new Set();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    twoSum.add(arr[i] + arr[j]);
  }
}

twoSum = [...twoSum].sort((a, b) => a - b);

function binary(target) {
  let start = 0;
  let end = twoSum.length - 1;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    if (twoSum[mid] === target) return true;

    if (target < twoSum[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

let isFound = false;
for (let d = N - 1; d >= 0 && !isFound; d--) {
  for (let c = 0; c < N; c++) {
    const target = arr[d] - arr[c];
    if (binary(target)) {
      console.log(arr[d]);
      isFound = true;
      break;
    }
  }
}
