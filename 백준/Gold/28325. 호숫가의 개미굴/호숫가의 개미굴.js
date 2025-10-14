const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = BigInt(input[0]);
let arr = input[1].split(" ").map(BigInt);

if (arr.every((item) => item === 0n)) {
  console.log((N / 2n).toString());
  return;
}

let total = arr.reduce((v, i) => v + i, 0n);
const start = arr.findIndex((item) => item === 1n);
arr = arr.slice(start + 1).concat(arr.slice(0, start + 1));

const dp = Array(Number(N)).fill(0n);

for (let i = 0n; i < N; i++) {
  const idx = Number(i);
  if (arr[idx] || dp[idx]) continue;

  let j = i;
  for (; j < N; j++) {
    const jdx = Number(j);
    if (arr[jdx]) break;
    dp[jdx] = 1n;
  }

  total += (j - i + 1n) / 2n;
}

console.log(total.toString());
