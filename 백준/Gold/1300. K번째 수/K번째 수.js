const fs = require("fs");
const [N, k] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let result = 0;
let left = 1;
let right = k;

while (left <= right) {
  const mid = parseInt((left + right) / 2);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    count += Math.min(parseInt(mid / i), N);
  }

  if (count >= k) {
    result = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(result);
