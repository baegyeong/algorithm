const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const costs = input[1].split(" ").map(Number);

let result = 0;
let end = 0;

for (let i = 0; i < N - K + 1; i++) {
  let betterCost = costs[i];
  end = i;
  while (end < i + (K - 1)) {
    end++;
    if (end !== i + K) {
      betterCost = Math.min(betterCost, costs[end]);
    }
  }
  if (end === N) break;
  result = Math.max(result, betterCost);
}

console.log(result);
