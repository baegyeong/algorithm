const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0;
let sum = 0;
let answer = Infinity;

for (let i = 0; i < N; i++) {
  sum += arr[i];

  while (sum >= S) {
    answer = Math.min(answer, i - left + 1);
    sum -= arr[left];
    left++;
  }
}

console.log(answer === Infinity ? 0 : answer);
