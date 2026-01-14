const [[M, N], input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);

let left = 1,
  right = input[N - 1];

let result = 0;

while (left <= right) {
  const mid = parseInt((left + right) / 2);

  const share = input.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (share >= M) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
