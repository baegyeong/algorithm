const fs = require("fs");
const [[N, P, E], ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let done = false;

function dfs(idx, picked, minSum) {
  if (done) return;

  if (picked.length === P) {
    check(picked, minSum);
    return;
  }

  if (idx === N) return;
  if (picked.length + (N - idx) < P) return;

  const [A] = input[idx];
  picked.push(idx);
  dfs(idx + 1, picked, minSum + A);
  picked.pop();

  dfs(idx + 1, picked, minSum);
}

function check(picked, minSum) {
  let maxSum = 0;

  for (const p of picked) {
    const [x, y] = input[p];
    maxSum += y;
  }

  if (minSum <= E && E <= maxSum) {
    makeAnswer(picked, minSum);
  }
}

function makeAnswer(picked, minSum) {
  let remain = E - minSum;
  const result = Array(N).fill(0);

  for (const p of picked) {
    const [x, y] = input[p];
    const add = Math.min(y - x, remain);
    result[p] += input[p][0] + add;
    remain -= add;
  }

  console.log(result.join(" "));
  done = true;
}

dfs(0, [], 0);
if (!done) console.log(-1);
