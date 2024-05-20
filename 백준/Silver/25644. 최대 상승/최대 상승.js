const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let min = arr[0];
let result = 0;

for (let i = 1; i <= N; i++) {
  min = Math.min(min, arr[i]);
  if (arr[i] > min) result = Math.max(arr[i] - min, result);
}

console.log(result);
