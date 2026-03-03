const [[N, M, K], d] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const problems = d
  .map((value, index) => [value, index + 1])
  .sort((a, b) => a[0] - b[0]);

let totalDays = 0;
let totalFreeze = 0;

let chosen = [];

for (let i = 0; i < N; i++) {
  const [day, idx] = problems[i];

  if (totalDays + day > K) continue;

  const neededFreeze = day - 1;

  if (totalFreeze + neededFreeze > M) continue;

  totalDays += day;
  totalFreeze += neededFreeze;
  chosen.push([day, idx]);
}

if (totalDays > K) {
  console.log(-1);
  process.exit(0);
}

const remainDays = K - totalDays;
if (totalFreeze + remainDays > M) {
  console.log(-1);
  process.exit(0);
}

let answer = [];

for (const [day, idx] of chosen) {
  for (let i = 0; i < day - 1; i++) {
    answer.push(0);
  }
  answer.push(idx);
}

for (let i = 0; i < remainDays; i++) {
  answer.push(0);
}

if (answer.length !== K) {
  console.log(-1);
} else {
  console.log(answer.join(" "));
}
