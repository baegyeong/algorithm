const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m, k] = input[0].split(" ").map(Number);

let answer = 0;
while (true) {
  if (n < 2 || m < 1 || n + m - 3 < k) {
    break;
  }

  n -= 2;
  m -= 1;
  answer++;
}

console.log(answer);
