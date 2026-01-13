const [[N], input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

input.sort((a, b) => a - b);

if (Math.max(...input) > 50) {
  console.log(0);
  return;
}

const used = Array(N).fill(false);
let best = 0;

function dfs(depth, sum, prefix, cnt) {
  if (depth === N) {
    best = Math.max(best, cnt);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (used[i]) continue;

    used[i] = true;
    const nextSum = sum + input[i];
    let add = 0;

    if (prefix.has(nextSum - 50)) add++;

    prefix.add(nextSum);
    dfs(depth + 1, nextSum, prefix, cnt + add);
    prefix.delete(nextSum);

    used[i] = false;
  }
}

dfs(0, 0, new Set(), 0);
console.log(best);
