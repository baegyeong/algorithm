const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const arr = input[2].split(" ").map(Number);
arr.sort((a, b) => a - b);

let start = 0;
let end = n - 1;
let answer = 0;
while (start != end) {
  if (arr[start] + arr[end] === m) {
    answer++;
    start++;
  } else if (arr[start] + arr[end] > m) {
    end--;
  } else {
    start++;
  }
}
console.log(answer);
