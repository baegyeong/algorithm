const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const N = Number(input[1]);
  const L = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let answer = 0;

  for (let i = 2; i < N; i++) {
    answer = Math.max(answer, Math.abs(L[i] - L[i - 2]));
  }

  console.log(answer);
  input.splice(1, 2);
}
