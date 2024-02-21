const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const testcase = Number(input[2]);
let cumsum = new Array(num + 1).fill(0);

for (let i = 1; i <= num; i++) {
  cumsum[i] = cumsum[i - 1] + arr[i - 1];
}
const result = [];
for (let i = 0; i < testcase; i++) {
  const [n, m] = input[i + 3].split(" ").map(Number);
  result.push(cumsum[m] - cumsum[n - 1]);
}

console.log(result.join("\n"));
