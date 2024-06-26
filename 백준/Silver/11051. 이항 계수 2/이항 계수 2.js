const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= i; j++) {
    if (i === j || j === 0) dy[i][j] = 1;
    else dy[i][j] = (dy[i - 1][j - 1] + dy[i - 1][j]) % 10007;
  }
}

console.log(dy[n][k]);
