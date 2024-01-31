const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
input.shift();

let arr = input[0].split(" ").map(Number);
d = [...arr];

for (let i = 0; i < num; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      d[i] = Math.max(d[i], d[j] + arr[i]);
    }
  }
}

console.log(Math.max(...d));
