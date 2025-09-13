const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const count = new Map();
let left = 0;
let answer = 0;

for (let right = 0; right < N; right++) {
  const num = arr[right];
  count.set(num, (count.get(num) || 0) + 1);

  while (count.get(num) > K) {
    count.set(arr[left], count.get(arr[left]) - 1);
    left++;
  }

  answer = Math.max(answer, right - left + 1);
}

console.log(answer);
