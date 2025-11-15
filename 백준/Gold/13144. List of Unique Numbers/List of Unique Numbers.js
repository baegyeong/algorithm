const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);
let sequence = new Set();

let left = 0;
let right = 0;
let count = 0;

while (left < N) {
  while (right < N && !sequence.has(arr[right])) {
    sequence.add(arr[right]);
    right++;
  }

  count += right - left;
  sequence.delete(arr[left]);
  left++;
}

console.log(count);
