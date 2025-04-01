const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const arr = input.map((x) => +x).sort((a, b) => a - b);

let start = 1;
let end = arr[N - 1] - arr[0];

while (start <= end) {
  let count = 1;
  let prev = arr[0];

  const mid = Math.floor((start + end) / 2);

  for (let i = 1; i < N; i++) {
    if (arr[i] - prev >= mid) {
      count++;
      prev = arr[i];
    }
  }

  if (count >= C) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);
