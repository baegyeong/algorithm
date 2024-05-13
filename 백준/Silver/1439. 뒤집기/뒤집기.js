const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n")[0].split("");

const len = input.length;
let arr = [0, 0];
let idx = 0;

input[0] === "1" ? arr[1]++ : arr[0]++;

while (idx + 1 !== len) {
  if (input[idx] !== input[idx + 1]) {
    input[idx + 1] === "1" ? arr[1]++ : arr[0]++;
  }

  idx++;
}

console.log(Math.min(...arr));
