const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

const binary = [];

for (let i = 0; i < N; i++) {
  let start = 0,
    end = binary.length;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[i] > binary[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  if (start < binary.length) {
    binary[start] = arr[i];
  } else {
    binary.push(arr[i]);
  }
}

console.log(binary.length);
