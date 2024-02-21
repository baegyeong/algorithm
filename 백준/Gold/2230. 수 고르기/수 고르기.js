const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
input.shift();
let arr = [];
input.map((x) => arr.push(+x));
arr.sort((a, b) => a - b);

let start = 0;
let end = 0;

let min = Infinity;

while (start <= end && end < n) {
  const diff = Math.abs(arr[start] - arr[end]);
  if (diff >= m) {
    min = Math.min(min, diff);
    start++;
  } else {
    end++;
  }
  if (diff === m) {
    break;
  }
}

console.log(min);
