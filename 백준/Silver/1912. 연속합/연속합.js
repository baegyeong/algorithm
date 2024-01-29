const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let d = [arr[0]];

for (let i = 1; i < num; i++) {
  d[i] = arr[i] > arr[i] + d[i - 1] ? arr[i] : arr[i] + d[i - 1];
}

console.log(Math.max(...d));
