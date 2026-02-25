const [[N], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const low = [...arr].sort((a, b) => a - b);
const high = [...arr].sort((a, b) => b - a);

let recent = 0;
let answer = 0;
let i = 0;

while (i < N) {
  const x = low.pop();
  answer += Math.max(x - recent, 0);
  recent = x;

  const y = high.pop();
  answer += Math.max(y - recent, 0);
  recent = y;

  i += 2;
}

console.log(answer);
