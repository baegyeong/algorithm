const fs = require("fs");
const input =  fs.readFileSync(0, 'utf-8').trim().split("\n");

const [N, K, Q, M] = input[0].split(" ").map(Number);
const sleep = input[1].split(" ").map(Number);
const attendance = input[2].split(" ").map(Number);
const range = [];

for (let i = 3; i < M + 3; i++) {
  range.push(input[i].split(" ").map(Number));
}

const isSleeping = Array(N + 3).fill(false);
for (const s of sleep) {
  isSleeping[s] = true;
}

const attend = Array(N + 3).fill(0);

for (const a of attendance) {
  if (isSleeping[a]) continue;
  for (let i = a; i <= N + 2; i += a) {
    if (!isSleeping[i]) attend[i] = 1;
  }
}

const prefixSum = Array(N + 3).fill(0);

for (let i = 3; i <= N + 2; i++) {
  prefixSum[i] = prefixSum[i - 1] + (attend[i] ? 0 : 1);
}

let answer = "";
for (const [S, E] of range) {
  answer += prefixSum[E] - prefixSum[S - 1] + "\n";
}

console.log(answer);
