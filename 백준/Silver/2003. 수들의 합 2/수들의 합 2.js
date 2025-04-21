const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let start = 0,
  end = 1;

let result = 0;
let sum = arr[start];

while (true) {
  if (sum > M) {
    sum -= arr[start];
    start++;
  } else if (sum === M) {
    sum -= arr[start];
    start++;
    result++;
  } else {
    if (end < N) {
      sum += arr[end];
      end++;
    } else break;
  }
}

console.log(result);
