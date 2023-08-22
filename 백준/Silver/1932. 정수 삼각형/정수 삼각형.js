const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);

let dp = [];
for (let i = 1; i <= num; i++) {
  let data = input[i].split(" ").map(Number);
  dp.push(data);
}

for (let i = 1; i < num; i++) {
  for (let j = 0; j <= i; j++) {
    let upLeft = 0;
    if (j != 0) upLeft = dp[i - 1][j - 1];
    let up = 0;
    if (j != i) up = dp[i - 1][j];
    dp[i][j] = dp[i][j] + Math.max(upLeft, up);
  }
}
console.log(Math.max(...dp[num - 1]));
