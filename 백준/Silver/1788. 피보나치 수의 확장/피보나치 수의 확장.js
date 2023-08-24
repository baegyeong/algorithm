const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)[0];

let dp = [0, 1];

let abs = Math.abs(input);

if (abs > 1) {
  for (let i = 2; i <= abs; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000000;
  }
}

let answer = "";

if (input === 0) {
  answer += 0;
} else if (!(abs % 2) && input < 0) {
  answer += -1;
} else {
  answer += 1;
}

answer += "\n" + (dp[abs] % 1000000000);
console.log(answer);
