const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
input.shift();

d = Array.from({ length: num }).fill(1);
let arr = input[0].split(" ").map(Number);

for (let i = 0; i < num; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      d[i] = Math.max(d[i], d[j] + 1);
    }
  }
}

console.log(Math.max(...d));
