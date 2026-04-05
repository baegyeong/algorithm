const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: 21 }, () =>
  Array.from({ length: 21 }, () => Array(21).fill(0)),
);

dp[0][0][0] = 1;

function func(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return dp[0][0][0];
  }

  if (a > 20 || b > 20 || c > 20) {
    return func(20, 20, 20);
  }

  if (dp[a][b][c]) return dp[a][b][c];

  if (a < b && b < c) {
    dp[a][b][c] = func(a, b, c - 1) + func(a, b - 1, c - 1) - func(a, b - 1, c);
    return dp[a][b][c];
  }

  dp[a][b][c] =
    func(a - 1, b, c) +
    func(a - 1, b - 1, c) +
    func(a - 1, b, c - 1) -
    func(a - 1, b - 1, c - 1);

  return dp[a][b][c];
}

for (const [a, b, c] of input) {
  if (a === -1 && b === -1 && c === -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${func(a, b, c)}`);
}
