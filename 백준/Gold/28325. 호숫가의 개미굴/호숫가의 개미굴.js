const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
let arr = input[1].split(" ").map(Number);

if (arr.every((item) => item === 0)) {
  console.log(Math.floor(N / 2));
  return;
}

let total = arr.reduce((v, i) => v + i, 0);
const start = arr.findIndex((item) => item === 1);
arr = arr.slice(start + 1).concat(arr.slice(0, start + 1));

const dp = Array({ length: N }).fill(0);

for (let i = 0; i < N; i++) {
  if (arr[i] || dp[i]) continue;

  let j = i;
  for (; j < N; j++) {
    if (arr[j]) break;
    dp[j] = 1;
  }

  total += Math.floor((j - i + 1) / 2);
}

console.log(total);
