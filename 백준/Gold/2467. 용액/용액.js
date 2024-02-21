const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let start = 0;
let end = n - 1;

let max = Infinity;
let a = 0,
  b = 0;
while (start < end) {
  const answer = arr[start] + arr[end];
  if (Math.abs(answer) < Math.abs(max)) {
    max = answer;
    a = arr[start];
    b = arr[end];
  }
  if (answer === 0) {
    break;
  } else if (answer < 0) {
    start++;
  } else {
    end--;
  }
}

console.log(a, b);
