const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const memories = input[1].split(" ").map(Number);
const costs = input[2].split(" ").map(Number);

const maxCost = costs.reduce((acc, cur) => acc + cur);
const dp = Array.from({ length: maxCost + 1 }).fill(0);

for (let i = 0; i < N; i++) {
  const memory = memories[i];
  const cost = costs[i];

  for (let i = maxCost; i >= cost; i--) {
    dp[i] = Math.max(dp[i], dp[i - cost] + memory);
  }
}

let answer = maxCost;
for (let i = 0; i <= maxCost; i++) {
  if (dp[i] >= M) {
    answer = i;
    break;
  }
}

console.log(answer);
