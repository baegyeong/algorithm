const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const board = input
  .slice(0, input.length - 1)
  .map((item) => item.split(" ").map(Number));

const dp = Array.from({ length: 51 }, () =>
  Array.from({ length: 51 }, () => Array(51).fill(0))
);

function recursive(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  }

  if (a > 20 || b > 20 || c > 20) {
    return recursive(20, 20, 20);
  }

  if (dp[a][b][c] !== 0) return dp[a][b][c];

  if (a < b && b < c) {
    dp[a][b][c] =
      recursive(a, b, c - 1) +
      recursive(a, b - 1, c - 1) -
      recursive(a, b - 1, c);
  } else {
    dp[a][b][c] =
      recursive(a - 1, b, c) +
      recursive(a - 1, b - 1, c) +
      recursive(a - 1, b, c - 1) -
      recursive(a - 1, b - 1, c - 1);
  }

  return dp[a][b][c];
}

for (let i = 0; i < board.length; i++) {
  const [a, b, c] = board[i];
  console.log(`w(${a}, ${b}, ${c}) = ${recursive(a, b, c)}`);
}
