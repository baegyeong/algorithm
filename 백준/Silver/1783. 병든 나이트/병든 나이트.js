const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

let answer = 0;
if (n === 1) {
  answer = 1;
} else if (n === 2) {
  if (m >= 1 && m <= 6) {
    answer = parseInt((m + 1) / 2);
  } else if (m >= 7) {
    answer = 4;
  }
} else if (n >= 3) {
  if (m <= 6) {
    answer = Math.min(m, 4);
  } else if (m >= 7) {
    answer = m - 2;
  }
}

console.log(answer);
