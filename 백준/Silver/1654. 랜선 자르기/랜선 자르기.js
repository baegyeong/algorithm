const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let start = 1;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (x of arr) {
    total += parseInt(x / mid);
  }
  if (total >= m) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
