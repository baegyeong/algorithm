const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, P, Q, X, Y] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dp = new Map();

function dfs(x) {
  if (x <= 0) return 1;

  if (dp.has(x)) return dp.get(x);

  const val = dfs(Math.trunc(x / P) - X) + dfs(Math.trunc(x / Q) - Y);

  dp.set(x, val);
  return val;
}

console.log(dfs(N));
