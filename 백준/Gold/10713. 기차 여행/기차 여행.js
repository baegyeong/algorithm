const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let path = input[1].split(" ").map(Number);

const fee = Array.from({ length: n }, () => []);
for (let i = 1; i < n; i++) {
  fee[i] = input[i + 1].split(" ").map(Number);
}

let accum = Array(n + 1).fill(0);

for (let i = 0; i < m - 1; i++) {
  let u = path[i];
  let v = path[i + 1];
  if (u < v) {
    accum[u] += 1;
    accum[v] -= 1;
  } else {
    accum[v] += 1;
    accum[u] -= 1;
  }
}

let answer = 0;
let a = 0;
for (let i = 1; i < n; i++) {
  a += accum[i];
  let ticket = fee[i][0] * a;
  let card = fee[i][2] + fee[i][1] * a;
  answer += Math.min(ticket, card);
}

console.log(answer);
